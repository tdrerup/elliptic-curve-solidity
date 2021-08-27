'use strict'
const assert = require('assert')
const fs = require('fs')
const tls = require('tls')
const https = require('https')
const crypto = require('crypto')
const ec_pem = require('../ec_pem')
const ec_cert = require('../cert')

const debug = !!process.env.debug

const test_data = {
  priv: ['-----BEGIN EC PRIVATE KEY-----',
         'MIHbAgEBBEGBGI8CO/hGZWi0fW1RZbitCb+eyxZfhIA3bwmm6o1LltiIcRguGcpR',
         'nSJqfDjKAFFNZ+yBpQzZl2eVItKnX7z5RKAHBgUrgQQAI6GBiQOBhgAEAZxYxkUi',
         'Kjf2qlRl5HQKK915B5HW80OsacHj2tPvXbzS8wlFK8eva4btnj+Gpoco7IRCt1Ky',
         'Wpo2q1Bm6AmjGLqmARyH4bubEovlHp/Er0ayQYdp8xx5RIgbEVidQv6TcaZ6UxH8',
         'ia/teZ1hfdzgpeIS2SWflu1dp5hT8S3aOIj6+Kye',
         '-----END EC PRIVATE KEY-----',
         ''].join('\n'),
  csr: [ '-----BEGIN CERTIFICATE REQUEST-----',
         'MIIB0zCCATUCAQAwFjEUMBIGA1UEAwwLZXhhbXBsZS5jb20wgZswEAYHKoZIzj0C',
         'AQYFK4EEACMDgYYABAGcWMZFIio39qpUZeR0CivdeQeR1vNDrGnB49rT71280vMJ',
         'RSvHr2uG7Z4/hqaHKOyEQrdSslqaNqtQZugJoxi6pgEch+G7mxKL5R6fxK9GskGH',
         'afMceUSIGxFYnUL+k3GmelMR/Imv7XmdYX3c4KXiEtkln5btXaeYU/Et2jiI+vis',
         'nqB6MHgGCSqGSIb3DQEJDjFrMGkwDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCAf4w',
         'HQYDVR0OBBYEFFPasyZgab6ZlbigEtvCJChVh613MC0GA1UdEQQmMCSCC2V4YW1w',
         'bGUuY29tgg93d3cuZXhhbXBsZS5jb22HBAHqOP8wCQYHKoZIzj0EAQOBjAAwgYgC',
         'QgCdvD6w9R+KkBV5oa3QQlZBZasdhLnB/HG+k/i7cNV3EJ3mVNouZ6byFjWtBmj9',
         'BiXx6j4/XXE3XaO4ia/MotkVbAJCAQa56cKrSVEpVuSO5QioC1Qn++TZFo+E/pU2',
         'XeC1p1AT17avBkqT0H3p5y2MkLwmnOwHc+Lz/X5DMj5uKKbPHRsd',
         '-----END CERTIFICATE REQUEST-----',
         ''],
  cert:[ '-----BEGIN CERTIFICATE-----',
         'MIICEjCCAXagAwIBAgIJAKnCMfUE4LwWMAkGByqGSM49BAEwFjEUMBIGA1UEAwwL',
         'ZXhhbXBsZS5jb20wHhcNMTcwMTExMjA1OTE5WhcNMjcwMTE5MjA1OTE5WjAWMRQw',
         'EgYDVQQDDAtleGFtcGxlLmNvbTCBmzAQBgcqhkjOPQIBBgUrgQQAIwOBhgAEAZxY',
         'xkUiKjf2qlRl5HQKK915B5HW80OsacHj2tPvXbzS8wlFK8eva4btnj+Gpoco7IRC',
         't1KyWpo2q1Bm6AmjGLqmARyH4bubEovlHp/Er0ayQYdp8xx5RIgbEVidQv6TcaZ6',
         'UxH8ia/teZ1hfdzgpeIS2SWflu1dp5hT8S3aOIj6+Kyeo2swaTAMBgNVHRMEBTAD',
         'AQH/MAsGA1UdDwQEAwIB/jAdBgNVHQ4EFgQUU9qzJmBpvpmVuKAS28IkKFWHrXcw',
         'LQYDVR0RBCYwJIILZXhhbXBsZS5jb22CD3d3dy5leGFtcGxlLmNvbYcEAeo4/zAJ',
         'BgcqhkjOPQQBA4GKADCBhgJBT7TEKSrMiAXQqFP+GTrbwsrycrS+iwfQZgygASnP',
         '5kinIr7V/PmRuc7Oi/cZLAjTpGGNzR3TP8D5LRYj9uPqxnkCQWTSyfWrrkTBx867',
         'pg3Wrfvx8ClqbekWi4uuMbOtWU9spVPlczkVhwtRHMdNK+D0RdYlrX6IQrap0Ag6',
         'Mxeho9Xa',
         '-----END CERTIFICATE-----',
         '']
}


describe('test EC generating a CSR', () => {
  it('from a new ec_pem keypair', done => {
    const ec = ec_pem.generate('prime256v1')

    ec_cert.generateCSR('example.com', ec)
      .then(options => { assert(/BEGIN CERTIFICATE REQUEST/.test(options.csr), options.csr) })
      .then(() => done(), done)
  })

  it('from a new crypto.createECDH keypair', done => {
    const ec = crypto.createECDH('prime256v1')
    ec.curve = 'prime256v1'
    ec.generateKeys()

    ec_cert.generateCSR('example.com', ec)
      .then(options => { assert(/BEGIN CERTIFICATE REQUEST/.test(options.csr), options.csr) })
      .then(() => done(), done)
  })

  it('from a known EC Private Key in PEM format', done => {
    const ec = ec_pem.loadPrivateKey(test_data.priv)
    ec_cert.generateCSR('example.com',
        {ec, CA:true, days: 3660, altNames: ['example.com', 'www.example.com', '1.234.56.255']})
      .then(options => {
        fs.writeFileSync('test/testCerts.csr.pem', options.csr)
      }).then(() => done(), done)
  })
})


describe('test EC generating a self-signed certificate', () => {
  it('from a new ec_pem keypair', done => {
    const ec = ec_pem.generate('prime256v1')

    ec_cert.createSelfSignedCertificate('example.com', ec)
      .then(options => { assert(/BEGIN CERTIFICATE/.test(options.cert), options.cert) })
      .then(() => done(), done)
  })

  it('from a new crypto.createECDH keypair', done => {
    const ec = crypto.createECDH('prime256v1')
    ec.curve = 'prime256v1'
    ec.generateKeys()

    ec_cert.createSelfSignedCertificate('example.com', ec)
      .then(options => { assert(/BEGIN CERTIFICATE/.test(options.cert), options.cert) })
      .then(() => done(), done)
  })

  it('from a known EC Private Key in PEM format', done => {
    const ec = ec_pem.loadPrivateKey(test_data.priv)
    ec_cert.createSelfSignedCertificate('example.com',
        {ec, CA:true, days: 3660, altNames: ['example.com', 'www.example.com', '1.234.56.255']})
      .then(options => {
        fs.writeFileSync('test/testCerts.cert.pem', options.cert)
      }).then(() => done(), done)
  })
})

describe('test using EC self-signed certificate', () => {
  let ec, cert_options, ca_list

  before(() => {
    ec = ec_pem.generate('prime256v1')
    cert_options = ec_cert.createSelfSignedCertificate('localhost',
      {ec, altNames: ['localhost', '127.0.0.1']})
    ca_list = [cert_options.then(options => options.cert)]
  })

  it('with tls over localhost', done => do_tls_server_test('localhost', cert_options, ca_list, done))
  it('with tls over 127.0.0.1', done => do_tls_server_test('127.0.0.1', cert_options, ca_list, done))
  it('with https over localhost', done => do_https_server_test('localhost', cert_options, ca_list, done))
  it('with https over 127.0.0.1', done => do_https_server_test('127.0.0.1', cert_options, ca_list, done))
})

describe('test EC signing a CSR', () => {
  let ec, csr
  before(() => {
    ec = ec_pem.generate('prime256v1')
    csr = ec_cert.generateCSR('example.com', ec)
  })

  it('from a new ec_pem keypair', done => {
    const ec_ca = ec_pem.generate('prime256v1')
    const ec_ca_cert = ec_cert.createSelfSignedCertificate('example.com', ec_ca)

    ec_cert.createSignedCertificate(csr, ec_ca, ec_ca_cert)
      .then(()=>done(), done)
  })

  it('from a new crypto.createECDH keypair', done => {
    const ec_ca = crypto.createECDH('prime256v1')
    ec_ca.curve = 'prime256v1'
    ec_ca.generateKeys()
    const ec_ca_cert = ec_cert.createSelfSignedCertificate('example.com', ec_ca)

    ec_cert.createSignedCertificate(csr, ec_ca, ec_ca_cert)
      .then(()=>done(), done)
  })

  it('should work from a known EC Private Key in PEM format', done => {
    const ec_ca = ec_pem.loadPrivateKey(test_data.priv)
    const ec_ca_cert = test_data.cert.join('\n')

    ec_cert.createSignedCertificate(csr, ec_ca, ec_ca_cert)
      .then(()=>done(), done)
  })
})

describe('test using EC actual signed certificate', () => {
  const altNames = ['localhost', '127.0.0.1']
  let ec, csr, ec_ca_cert, cert, cert_options
  before(() => {
    ec = ec_pem.generate('prime256v1')
    csr = ec_cert.generateCSR('localhost',
      {ec, altNames})

    ec_ca_cert = test_data.cert.join('\n')
    cert = ec_cert.createSignedCertificate(csr, test_data.priv, ec_ca_cert,
      {altNames})

    cert_options = ec_cert.asTLSOptions(cert, ec)
  })

  it('with tls over localhost', done => do_tls_server_test('localhost', cert_options, [ec_ca_cert], done))
  it('with tls over 127.0.0.1', done => do_tls_server_test('127.0.0.1', cert_options, [ec_ca_cert], done))
  it('with https over localhost', done => do_https_server_test('localhost', cert_options, [ec_ca_cert], done))
  it('with https over 127.0.0.1', done => do_https_server_test('127.0.0.1', cert_options, [ec_ca_cert], done))
})

function signCertWithTip(tip, options={}, subjects='localhost') {
  const ec = options.ec || ec_pem.generate('prime256v1')
  const csr = options.csr || ec_cert.generateCSR(subjects, Object.assign({ec}, options))

  return Promise.resolve(tip).then(tip =>
    ec_cert.createSignedCertificate(csr, tip.ec, [tip.cert, tip.ca||''].join(''), options))
}

describe('test using EC chain of signed certificates', () => {
  const altNames = ['localhost', '127.0.0.1']
  let tip, cert_options, ec_ca_cert
  before(() => {
    tip = {ec: ec_pem.loadPrivateKey(test_data.priv), cert: test_data.cert.join('\n')}
    ec_ca_cert = tip.cert

    tip = signCertWithTip(tip, {CA:true}, 'one.local')
    tip = signCertWithTip(tip, {CA:true}, 'two.local')
    tip = signCertWithTip(tip, {CA:true}, 'three.local')

    tip = signCertWithTip(tip, {altNames}, 'last.local')

    cert_options = tip.then(tip => ec_cert.asTLSOptions(tip.cert, tip.ec))
  })

  it('with tls over localhost', done => do_tls_server_test('localhost', cert_options, [ec_ca_cert], done))
  it('with tls over 127.0.0.1', done => do_tls_server_test('127.0.0.1', cert_options, [ec_ca_cert], done))
  it('with https over localhost', done => do_https_server_test('localhost', cert_options, [ec_ca_cert], done))
  it('with https over 127.0.0.1', done => do_https_server_test('127.0.0.1', cert_options, [ec_ca_cert], done))
})

function do_tls_server_test(resolveName, cert_options, ca_list, done) {
  assert(ca_list.length > 0)
  cert_options
    .then(options => tls.createServer(options) )
    .then(svr => {
      svr.on('secureConnection', sock => done())
      svr.on('error', err => done(err))
      svr.listen(0, resolveName, () => {
        Promise.all(ca_list).then(ca => {
          let sock = tls.connect(svr.address().port,
            {requestCert:true, rejectUnauthorized: true, ca},
            () => {
              let pc = sock.getPeerCertificate(true)
              //console.log({pc})
            })})
      }) })
    .catch(done) }

function do_https_server_test(resolveName, cert_options, ca_list, done) {
  assert(ca_list.length > 0)
  cert_options
    .then(options => https.createServer(options) )
    .then(svr => {
      svr.on('request', (req,res) => {
        res.writeHead(211)
        res.end('hello world\n')
      })
      svr.on('error', err => done(err))
      svr.listen(0, resolveName, () => {
        Promise.all(ca_list).then(ca =>
          https.get({hostname: resolveName, port:svr.address().port, pathname:'/', rejectUnauthorized: true, ca},
            res => { done(211 == res.statusCode ? null : new Error(`Wrong status code: ${res.statusCode}`)) }))
      }) })
    .catch(done) }

