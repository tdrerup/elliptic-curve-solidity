import { Buckets } from '@textile/buckets'
import { Context } from '@textile/context'
import { PrivateKey } from '@textile/crypto'
import { SignupResponse } from '@textile/hub-grpc/api/hubd/pb/hubd_pb'
import { Client } from '@textile/hub-threads-client'
import { ThreadID } from '@textile/threads-id'
import { Users } from '@textile/users'
import { isBrowser } from 'browser-or-node'
import { expect } from 'chai'
import fs from 'fs'
import path from 'path'
import { addrApiurl, addrGatewayUrl, createKey, sessionSecret, signUp } from '@textile/testing'

describe('All apis...', () => {
  describe('Buckets and accounts', () => {
    context('a developer', () => {
      const ctx = new Context(addrApiurl)
      let dev: SignupResponse.AsObject
      it('should sign-up, create an API key, and sign it for the requests', async () => {
        // @note This should be done using the cli
        const { user } = await signUp(ctx, addrGatewayUrl, sessionSecret)
        if (user) dev = user
        // @note This should be done using the cli
        ctx.withSession(dev.session)
        const { keyInfo } = await createKey(ctx, 'KEY_TYPE_ACCOUNT')
        await ctx.withAPIKey(keyInfo?.key).withKeyInfo(keyInfo)
        expect(ctx.toJSON()).to.have.ownProperty('x-textile-api-sig')
      }).timeout(3000)
      it('should then create a db for the bucket', async () => {
        const db = new Client(ctx)
        const id = ThreadID.fromRandom()
        await db.newDB(id, 'my-buckets')
        expect(ctx.toJSON()).to.have.ownProperty('x-textile-thread-name')
      })
      it('should create a new bucket in the db and push to it', async function () {
        if (isBrowser) return this.skip()
        // Create a new bucket in the db
        const buckets = new Buckets(ctx)
        const buck = await buckets.create('mybuck')
        expect(buck.root?.name).to.equal('mybuck')

        // Finally, push a file to the bucket.
        const pth = path.join(__dirname, '../../..', 'testdata')
        const stream = fs.createReadStream(path.join(pth, 'file1.jpg'))
        const rootKey = buck.root?.key || ''
        const { root } = await buckets.pushPath(
          rootKey,
          'dir1/file1.jpg',
          stream,
        )
        expect(root).to.not.be.undefined

        // We should have a thread named "my-buckets"
        const db = new Client(ctx)
        const res = await db.getThread('my-buckets')
        expect(res.id).to.deep.equal(ctx.toJSON()['x-textile-thread'])
      })
    })
    context('a developer with a user', function () {
      this.timeout(5000)
      const ctx = new Context(addrApiurl)
      const identity = PrivateKey.fromRandom()
      let dev: SignupResponse.AsObject
      let db: Client
      let users: Users
      it('should sign-up, create an API key, and a new user', async function () {
        // @note This should be done using the cli
        const { user } = await signUp(ctx, addrGatewayUrl, sessionSecret)
        if (user) dev = user
        // @note This should be done using the cli
        // This time they create a user key
        const { keyInfo } = await createKey(
          ctx.withSession(dev.session),
          'KEY_TYPE_USER',
        )

        // We also explicitly specify a custom context here, which could be omitted as it uses reasonable defaults
        const userContext = await new Context(addrApiurl).withKeyInfo(keyInfo)
        // In the app, we simply create a new user from the provided user key, signing is done automatically
        db = new Client(userContext)
        const token = await db.getToken(identity)
        users = new Users(userContext)
        users.setToken(token)
        expect(db.context.toJSON()).to.have.ownProperty('x-textile-api-sig')
      }).timeout(3000)

      it('should then create a db for the bucket', async function () {
        await db.newDB(ThreadID.fromRandom(), 'my-buckets')
        expect(db.context.toJSON()).to.have.ownProperty('x-textile-thread-name')
      })

      it('should create a new bucket in the db and push to it', async function () {
        if (isBrowser) return this.skip()
        // Create a new bucket in the db from the user context
        const buckets = new Buckets(db.context)
        const buck = await buckets.create('mybuck')
        expect(buck.root?.name).to.equal('mybuck')

        // Finally, push a file to the bucket.
        const pth = path.join(__dirname, '../../..', 'testdata')
        const stream = fs.createReadStream(path.join(pth, 'file1.jpg'))
        const rootKey = buck.root?.key || ''
        const { root } = await buckets.pushPath(
          rootKey,
          'dir1/file1.jpg',
          stream,
        )
        expect(root).to.not.be.undefined

        // Ensure context is set properly
        expect(db.context.toJSON()).to.have.ownProperty('x-textile-thread-name')
        expect(db.context.get('x-textile-thread-name')).to.equal('my-buckets')

        // We should have a thread named "my-buckets"
        const res = await db.getThread('my-buckets')
        expect(res.id).to.deep.equal(db.context.toJSON()['x-textile-thread'])

        // The dev should see that the key was used to create one thread
        // @todo: Use the cli to list keys
      })

      it('should check the users own usage', async function () {
        if (isBrowser) return this.skip()

        const usage = await users.getUsage()
        const daily = usage.customer?.dailyUsageMap || []
        for (const use of daily) {
          switch (use[0]) {
            case 'instance_reads': {
              expect(use[1].total).to.equal(4)
              break
            }
            case 'instance_writes': {
              expect(use[1].total).to.equal(2)
              break
            }
            case 'network_egress': {
              expect(use[1].total).to.be.closeTo(3887, 1000)
              break
            }
            case 'stored_data': {
              expect(use[1].total).to.equal(601902)
              break
            }
          }
        }
      })
      it('should check the users usage as the developer', async function () {
        if (isBrowser) return this.skip()
        const { keyInfo } = await createKey(ctx, 'KEY_TYPE_ACCOUNT')
        await ctx.withAPIKey(keyInfo?.key).withKeyInfo(keyInfo)
        const devUser = new Users(ctx)

        const usage = await devUser.getUsage({
          dependentUserKey: identity.public.toString(),
        })
        const daily = usage.customer?.dailyUsageMap || []
        for (const use of daily) {
          switch (use[0]) {
            case 'instance_reads': {
              expect(use[1].total).to.equal(4)
              break
            }
            case 'instance_writes': {
              expect(use[1].total).to.equal(2)
              break
            }
            case 'network_egress': {
              expect(use[1].total).to.be.closeTo(3887, 1000)
              break
            }
            case 'stored_data': {
              expect(use[1].total).to.equal(601902)
              break
            }
          }
        }
      })
      it('should check the developers usage', async function () {
        if (isBrowser) return this.skip()
        const { keyInfo } = await createKey(ctx, 'KEY_TYPE_ACCOUNT')
        await ctx.withAPIKey(keyInfo?.key).withKeyInfo(keyInfo)
        const devUser = new Users(ctx)

        const usage = await devUser.getUsage()
        const daily = usage.customer?.dailyUsageMap || []
        for (const use of daily) {
          switch (use[0]) {
            case 'instance_reads': {
              expect(use[1].total).to.equal(4)
              break
            }
            case 'instance_writes': {
              expect(use[1].total).to.equal(2)
              break
            }
            case 'network_egress': {
              expect(use[1].total).to.be.closeTo(5237, 1000)
              break
            }
            case 'stored_data': {
              expect(use[1].total).to.equal(601902)
              break
            }
          }
        }
      })
    })
  })
})
