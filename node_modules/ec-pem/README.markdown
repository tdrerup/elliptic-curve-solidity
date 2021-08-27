# ec_pem

Enables `crypto.sign` and `crypto.verify` using `crypto.createECDH` generated keys

### Use

```javascript
const crypto = require('crypto');
const ec_pem = require('ec-pem');

let alice_pem_private, alice_pem_public;
{
  let curve = 'secp521r1'
  let alice = crypto.createECDH(curve);
  alice.generateKeys();
  alice = ec_pem(alice, curve);

  alice_pem_private = alice.encodePrivateKey();
  // console.log(alice_pem_private);

  alice_pem_public = alice.encodePublicKey();
  // console.log(alice_pem_public);
}


const data = Buffer.from('a message to sign');

let signature;
{
  const sign = crypto.createSign('sha256');
  sign.update(data);
  signature = sign.sign(alice_pem_private);
  // console.log({signature})
}


{
  const verify = crypto.createVerify('sha256');
  verify.update(data);
  const matched = verify.verify(alice_pem_public, signature);
  // console.log({matched})
  if (!matched)
    throw new Error("Verification failed");
}
```

### Use ec_pem/cert

```javascript
const https = require('https');
const ec_pem = require('ec-pem');
const ec_cert = require('ec-pem/cert');

const tls_options = ec_cert.createSelfSignedCertificate('example.com', 
    { ec: ec_pem.generate('prime256v1'),
      days: 30, altNames: ['example.com', 'www.example.com', '1.234.56.255'] })

demo_https_server(tls_options)



function demo_https_server(tls_options) {
  let svr = tls_options
    .then(options => https.createServer(options) )
    .then(svr => {
      svr.on('secureConnection', sock => console.log("New secure connection"));
      svr.on('request', (req,res) => {
        res.writeHead(200);
        res.end('hello world\n');
      });
      return svr })
    .then(svr => new Promise((resolve, reject) =>
        svr.listen(8443, '127.0.0.1',
          (err) => err ? reject(err) : resolve(svr))))

  svr.then(() =>
    https.get(
      {hostname: '127.0.0.1', port:8443, pathname:'/', rejectUnauthorized: false},
      res => { console.log(res.statusCode) }))
}

```


### Use ec_pem/local_cert

```javascript
const https = require('https');
const ec_localcert = require('ec-pem/local_cert');

const tls_options = ec_localcert('tls_local.json')

demo_https_server(tls_options)
```

or


```javascript
const https = require('https');
const ec_localcert = require('ec-pem/local_cert');

const tls_options = ec_localcert('tls_local.json', ({ec_cert, ec_pem}) =>
  ec_cert.createSelfSignedCertificate('localhost.dev', {
    ec: ec_pem.generate('prime256v1'),
    days: 3660, // 10 years
    altNames: ['localhost.dev', 'localhost', '127.0.0.1'],
  }))

demo_https_server(tls_options)
```
