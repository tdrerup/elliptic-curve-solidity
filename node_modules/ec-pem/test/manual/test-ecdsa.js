const fs = require('fs').promises
const crypto = require('crypto')
const ec_pem = require('../..')

const curve_alias = {
  'P-256': 'prime256v1',
  'P-384': 'secp384r1',
  'P-521': 'secp521r1',
}


function signedData(namedCurve='P-256') {
  return genSignedData(namedCurve)
    .then(src => verifySignedData(src)
      .then(ver => [src, ver])) }

async function genSignedData(namedCurve='P-256') {
  const ec_priv = ec_pem.generate(curve_alias[namedCurve])

  const publicKey_hex = ec_priv.getPublicKey('hex')
  const examples = await Promise.all([
    [],
    [ 0x41, 0x42, 0x43, 0x44 ],
    [ 1, 9, 4, 2 ],
  ].map(execExamples))

  return { namedCurve, publicKey_hex, examples }

  async function execExamples(data) {
    const u8 = Buffer.from(data)
    return {data,
      sha_1: crypto.createHash('SHA1').update(u8).digest().toString('hex'),
      sig_1: ec_priv.sign_ecdsa('SHA1').update(u8).sign().toString('hex'),
      sig_256: ec_priv.sign_ecdsa('SHA256').update(u8).sign().toString('hex'),
      sig_384: ec_priv.sign_ecdsa('SHA384').update(u8).sign().toString('hex'),
      sig_512: ec_priv.sign_ecdsa('SHA512').update(u8).sign().toString('hex'),
    }
  }
}

async function verifySignedData({namedCurve, publicKey_hex, examples}) {
  const ec_pub = ec_pem(curve_alias[namedCurve])
    .setPublicKey(publicKey_hex, 'hex')

  const verified = await Promise.all(examples.map(execVerify))
  const all_verified = verified.every(e => true === e.all)
  return { namedCurve, publicKey_hex, verified, all_verified }

  async function execVerify({data, sha_1, sig_1, sig_256, sig_384, sig_512}) {
    const u8 = Buffer.from(data)
    const res = {
      sha_1: sha_1.toLowerCase() == crypto.createHash('SHA1').update(u8).digest().toString('hex').toLowerCase(),
      sig_1: ec_pub.verify_ecdsa('SHA1').update(u8).verify(Buffer.from(sig_1, 'hex')),
      sig_256: ec_pub.verify_ecdsa('SHA256').update(u8).verify(Buffer.from(sig_256, 'hex')),
      sig_384: ec_pub.verify_ecdsa('SHA384').update(u8).verify(Buffer.from(sig_384, 'hex')),
      sig_512: ec_pub.verify_ecdsa('SHA512').update(u8).verify(Buffer.from(sig_512, 'hex')),
    }
    res.all = Object.values(res).every(v => true === v)
    return res
  }
}

const json_pprint = o => JSON.stringify(o,null,2)

Promise.all([
  genSignedData('P-256'),
  genSignedData('P-384'),
  genSignedData('P-521'),
]).then(json_pprint)
.then(async json => {
  const filename = `${__dirname}/data.nodejs.js`
  const fh = await fs.open(filename, 'wx').catch(()=>null)
  if (null === fh)
    return console.log(`Skipping "${filename}" -- already exists`)

  console.log(`Generating "${filename}"`)
  return fh.writeFile(`run_ecdsa_tests_for_nodejs_data(\n${json}\n);`, 'utf-8')
})


Promise.all(require('./data.browser.json').map(verifySignedData))
.then(ver => {
  const all_verified = ver.every(e => true === e.all_verified)
  if (all_verified) {
    console.log('-- PASSED --')
    process.exitCode = 0
  } else {
    console.error('-- FAILED --')
    process.exitCode = 1
  }
})
