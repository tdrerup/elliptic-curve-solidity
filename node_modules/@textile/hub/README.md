# Textile Hub

> JS lib for interacting with Hub APIs

## Introduction

`@textile/hub` provides access to Textile APIs in apps based on Account Keys or User Group Keys. For details on getting keys, see [textileio/textile](https://docs.textile.io/hub/app-apis/) and for the full Textile documentation.

Join us on our [public Slack channel](https://slack.textile.io/) for news, discussions, and status updates. [Check out our blog](https://blog.textile.io/) for the latest posts and announcements.

### Install

```bash
npm install @textile/hub
```

## Usage

The Hub library contains three API clients: Users, Buckets, and Threads Client. You can use each of these to access the full set of APIs available on the Hub. To use any of them, you must first start by authenticating your app with the API.

### Authentication & authorization

Authentication & authorization steps is the same no matter which API client you use, Users, Buckets or Threads Client. For most applications, this will happen in two parts.

1. Authentication. In this step, you will use your User Group keys or Account keys to gain access to the Hub API.
2. User token generation. In this step, you will assign a unique API token to a new user of your app, to grant them access to your resources on the Hub.

[Read more on authenticating users here](https://docs.textile.io/tutorials/hub/web-app/).

There are two commonly used object types for passing authentication parameters to the Hub library: `UserAuth` and `KeyInfo`.

#### UserAuth

`UserAuth` objects can be generated to provide Hub API access to your users inside of your application. Review the tutorial linked above on setting up a UserAuth providing endpoint.

```typescript
import { UserAuth } from '@textile/hub'

const auth: UserAuth = {
  msg: '<api msg>',
  sig: '<api sig>',
  token: '<user msg>',
  key: '<api key>',
}
```

#### KeyInfo

The `KeyInfo` object holds your API secret and so should never be used in an insecure environment (such as in an application). You can use `KeyInfo` with an insecure key (signing not required) from the api by leaving `secret` off.

```typescript
import { KeyInfo } from '@textile/hub'

const auth: KeyInfo = {
  key: '<api key>',
  secret: '<api secret>'
}
```

#### Examples

**Developer Account Auth**

Create a database client using the Textile Hub and account keys.

```typescript
import { Client, KeyInfo } from '@textile/hub'

async function start () {
  const keyInfo: KeyInfo = {
    key: '<api key>',
    secret: '<api secret>'
  }
  const client = await Client.withKeyInfo(keyInfo)
}
```

**User Account Auth**

Create a database client using the Textile Hub and user group keys.

```typescript
import { Client, UserAuth } from '@textile/hub'

function start (callback: () => Promise<UserAuth>) {
  const client = Client.withUserAuth(callback)
  return client
}
```

**Transfer Auth**

You can transfer authentication & authorization between Users and Buckets API clients below by using their respective `copyAuth` methods.

For example, copying a setup Users client to Buckets

```typescript
import { Buckets, Users } from '@textile/hub'

const usersToBuckets = async (users: Users) => {
  const buckets = Buckets.copyAuth(users)
  return buckets
}
```

An inversely, copying a Bucket session to Users client.

```typescript
import { Buckets, Users } from '@textile/hub'

const bucketsToUsers = async (buckets: Buckets) => {
  const user = Users.copyAuth(buckets)
  return user
}
```

### Users client

The Users client allows you to access a local (in your app) user's account information, such as a list of all their threads in your app. It also gives you access to a per-user inboxing API for transferring messages between your users based on simple private key identities.

[Read the full client docs here](https://textileio.github.io/js-textile/docs/hub.users).

**List a user's threads**

```typescript
import { Users } from '@textile/hub'

async function list (users: Users) {
  const threads = await users.listThreads()
}
```

**Setup a user's mailbox**

```typescript
import { Users } from "@textile/hub"

async function example(users: Users) {
   return await users.setupMailbox()
}
```

**Send message to another user by public key**

```typescript
import { Users, Identity, PublicKey  } from "@textile/hub"

async function example(users: Users, from: Identity, to: PublicKey, message: string) {
  const encoder = new TextEncoder()
  const body = encoder.encode(message)
  return await users.sendMessage(from, to, body)
}
```

### ThreadDB client

Threads client to access remote threads, create new threads, add and remove data.

[Read the full client docs here](https://textileio.github.io/js-textile/docs/hub.client).

**Create a thread**

```typescript
import { Client, ThreadID } from '@textile/hub'

async function start (client: Client, schema: any) {
  /**
   * Setup a new ThreadID and Database
   */
  const threadId = ThreadID.fromRandom();

  /**
   * Each new ThreadID requires a `newDB` call.
   */
  await client.newDB(threadId)

  /**
   * We add our first Collection to the DB for any schema.
   */
  await client.newCollection(threadId, { name: 'Astronaut', schema });
}
```

**Insert data**

```typescript
import { Client, ThreadID } from '@textile/hub'

async function createEntity (client: Client, threadId: ThreadID, jsonData: any) {
  /**
   * Add a new Astronaut
   *
   * Our Thread contains the Astronaut Collection, so you just need
   * to add a new astronaut that matches the expected schema.
   *
   * If you run this app many times, you'll notice many Buzz Aldrin
   * entries in your ThreadDB, each with a unique ID.
   */
  const ids = await client.create(threadId, 'Astronaut', [
    jsonData,
  ]);
}
```

### Buckets client

Create, manage, and publish user and account Buckets.

[Read the full client docs here](https://textileio.github.io/js-textile/docs/hub.buckets).

**Create a new Bucket client**

```typescript
import { Buckets, UserAuth } from '@textile/hub'

/**
 * Create a Bucket client instance with the same auth
 * methods used for threads
 */
async function start (callback: () => Promise<UserAuth>) {
  const buckets = Buckets.withUserAuth(callback)
  return buckets
}
```

**Read existing Buckets**

```typescript
import { Buckets } from '@textile/hub'

async function run (buckets: Buckets) {
  /**
   * List existing Buckets
   */
  const roots = await buckets.list();
  const existing = roots.find((bucket) => bucket.name === 'files')

  /**
   * If a Bucket named 'files' already existed for this user, use it.
   * If not, create one now.
   */
  let bucketKey = ''
  if (existing) {
    bucketKey = existing.key;
  } else {
    const created = await buckets.create('files');
    bucketKey = created.root ? created.root.key : ''
  }
  return bucketKey
}
```

**Add files to Buckets**

```typescript
import { Buckets, UserAuth } from '@textile/hub'

async function add (buckets: Buckets, webpage: string, bucketKey: string) {
  /**
   * Add a simple file Buffer
   *
   * Alternative formats are here: https://github.com/textileio/js-textile/blob/master/src/normalize.ts#L14
   *
   * We add the file as index.html so that we can render it right in the browser afterwards.
   */
  const file = { path: '/index.html', content: Buffer.from(webpage) }

  /**
   * Push the file to the root of the Files Bucket.
   */
  const raw = await buckets.pushPath(bucketKey, 'index.html', file)
}
```
