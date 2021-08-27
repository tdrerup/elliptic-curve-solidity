'use strict'
const fs = require('fs')
const {isIP} = require('net')
const tmp = require('tmp')
const child_process = require('child_process')

const ec_pem = require('./ec_pem')

function _unpackSigningArgs(options, ec) {
  if (ec !== undefined)
    return [options || {}, ec]
  if (options && 'function' === typeof options.generateKeys)
    return [{}, ec=options]
  if (ec == null)
    ec = options.ec || ec_pem.generate('prime256v1')

  return [options || {}, ec] }

function asCertRequestArgs(subjects, options, ec) {
  [options, ec] = _unpackSigningArgs(options, ec)
  if (subjects)
    options.subjects = subjects

  if (!options.altNames)
    options.altNames = [subjects]
  if (!options.config)
    options.config = configForOpenSSLRequest(options)
  return [options, ec] }


function configForOpenSSLRequest(opt) {
  let subjects = opt.subjects
  if ('string' === typeof subjects)
    subjects = [`CN = ${subjects}`]

  else if (!subjects.forEach)
    subjects = Object.keys(subjects)
      .map(k => `${k} = ${subjects[k]}`)

  return `\
[req]
req_extensions = v3_req
distinguished_name = req_subjects
prompt = no

[ req_subjects ]
${subjects.join('\n')}

${extensionConfigForOpenSSL(opt, 'v3_req')} `}


function extensionConfigForOpenSSL(opt, req_extensions='v3_req') {
  // c.f. https://www.openssl.org/docs/man1.0.1/apps/x509v3_config.html
  // c.f. http://wiki.cacert.org/FAQ/subjectAltName
  // c.f. http://apetec.com/support/generatesan-csr.htm

  if (!opt.keyUsage)
    opt.keyUsage = 'digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign'

  let extendedKeyUsage = opt.extendedKeyUsage
    && opt.extendedKeyUsage.join ? opt.extendedKeyUsage.join(', ') : opt.extendedKeyUsage
  extendedKeyUsage = !extendedKeyUsage ? ''
    : `extendedKeyUsage = ${extendedKeyUsage.join ? extendedKeyUsage.join(', ') : extendedKeyUsage}`

  let altNameSource = opt.altNames || []
  if ('string' === typeof altNameSource)
    altNameSource = altNameSource.split(/\s+/)

  let altNames=[], idx_ip=0, idx_dns=0
  for (let n of altNameSource)
    if (isIP(n))
      altNames.push(`IP.${++idx_ip} = ${n}`)
    else
      altNames.push(`DNS.${++idx_dns} = ${n}`)

  if (altNames.length)
    altNames = ['subjectAltName = @san_list', '', '[san_list]'].concat(altNames)

  return `\
[ ${req_extensions} ]
basicConstraints = CA:${opt.CA ? 'TRUE' : 'FALSE'}
keyUsage = ${opt.keyUsage.join ? opt.keyUsage.join(', ') : opt.keyUsage}
subjectKeyIdentifier = hash
${extendedKeyUsage}

${altNames.join('\n')}` }



function generateCertificateSigningRequest(subjects, options, ec) {
  [options, ec] = asCertRequestArgs(subjects, options, ec)
  return openssl_req(options, ec)
    .then(csr => Object.defineProperties({csr}, {ec: {value: ec}}) )}

function createSignedCertificate(csr, ca_key, ca_cert, options) {
  if (!options) options = {}
  if (csr == null)
    throw new Error("Parameter 'csr' is required. (e.g. csr = generateCertificateSigningRequest('example.com', ec))")
  if (ca_key == null)
    throw new Error("Parameter 'ca_key' is required. (e.g. ca_key = ec_pem.generate('prime256v1'))")
  else if ('function' !== typeof ca_key.generateKeys)
    ca_key = ec_pem.load(ca_key)
  if (ca_cert == null)
    throw new Error("Parameter 'ca_cert' is required. (e.g. ca_cert = createSelfSignedCertificate('example.com', ca_key))")

  return Promise.all([csr, ca_key, ca_cert, options])
    .then(([csr, ca_key, ca_cert, options]) =>
      openssl_x509(csr, ca_key, ca_cert, options)
        .then(cert => {
          const ec = csr.ec
          const cert_chain = [cert].concat(ca_cert.cert_chain || [])
          if ('string' === typeof ca_cert)
            cert_chain.push(ca_cert)
          else if (ca_cert && 'string' === typeof ca_cert.cert)
            cert_chain.push(ca_cert.cert)

          cert = cert_chain.join('')
          if ('string' !== typeof csr) csr = csr.csr

          let ans = {cert, cert_chain, ca: ca_cert, csr: csr}
          if (ec) Object.defineProperties(ans, {ec: {value: ec}})
          return ans }))}

function createSelfSignedCertificate(subjects, options, ec) {
  [options, ec] = asCertRequestArgs(subjects, options, ec)
  options.self_sign = true
  return openssl_req(options, ec)
    .then(cert => asTLSOptions(cert, ec)) }

function asTLSOptions(cert, ec) {
  return Promise.resolve(cert).then(cert => {
    if (ec == null)
      ec = cert.ec
    if (ec == null)
      throw new Error("Parameter 'ec' is required and should be used to create cert")

    if ('string' !== typeof cert) cert = cert.cert
    return Object.defineProperties(
      {cert, key: ec_pem.encodePrivateKey(ec)},
      {ec: {value: ec}}) })}


const example_subjects = {
  CN: 'example.com', // common name (required)
  C: 'us', // country
  ST: 'colorado', // state
  L: 'colorado', // location
  O: 'example org', // organization
  OU: 'example org unit', // organizational unit
}

// openssl req -new -key «ec private key» [-x509] -subj "/CN=example.com"
function openssl_req(options, ec) {
  if ('string' === typeof options)
    options = {self_sign: true, subjects: {CN: options}}

  return Promise.all([
      tmpfile(options.config),
      tmpfile(ec_pem.encodePrivateKey(ec)) ])
    .then(tmpList => {
      const [tmp_config, tmp_key] = tmpList
      let args = ['req', '-new', '-sha256', '-key', tmp_key.path]


      if (options.self_sign) {
        args.push('-x509', '-days', options.days || 1)
      }

      if (tmp_config) {
        args.push('-config', tmp_config.path, '-extensions', 'v3_req')
      }

      args = args.filter(e => e)
      return finallyCleanupTmpList(openssl_stdout(args, 5), tmpList) })}


// openssl x509 -req -in «/tmp/.../csr.pem» -CAkey «ec private key»
function openssl_x509(csr, ca_key, ca_cert, options) {
  while (csr && 'string' !== typeof csr) csr = csr.csr
  while (ca_cert && 'string' !== typeof ca_cert) ca_cert = ca_cert.cert

  if (!options) options = {}
  if (!csr) throw new Error("Parameter 'csr' is required")
  if (!ca_key) throw new Error("Parameter 'ca_key' is required")
  if (!ca_cert) throw new Error("Parameter 'ca_cert' is required")

  if (!options.extensions)
    options.extensions = extensionConfigForOpenSSL(options, 'v3_req')

  return Promise.all([
      tmpfile(csr),
      tmpfile(ca_cert),
      tmpfile(options.extensions),
      tmpfile(ec_pem.encodePrivateKey(ca_key)) ])
    .then(tmpList => {
      const [tmp_csr, tmp_ca_cert, tmp_ext, tmp_ca_key] = tmpList

      let args = ['x509', '-req', '-sha256']
      args.push('-days', options.days || 1, '-set_serial', options.serial || Date.now().toString())
      args.push('-extensions', 'v3_req', '-extfile', tmp_ext.path)
      args.push('-in', tmp_csr.path, '-CA', tmp_ca_cert.path, '-CAkey', tmp_ca_key.path)

      return finallyCleanupTmpList(openssl_stdout(args, 5), tmpList) })}



let _openssl_binary = 'openssl'
function use_openssl_binary(pathToOpenSSL) {
  _openssl_binary = pathToOpenSSL }

function _backoff_delay(i, n) {
  if (!n || n==i) return Promise.resolve()
  return new Promise(resolve=>
    setTimeout(resolve, 10 + (n-i)*20*Math.random()))
}

function openssl_stdout(args, retries, backoff) {
  return _backoff_delay(retries, backoff)
    .then(() => openssl_cmd(args))
    .then(
        resp => {
          if (resp.stdout) return resp.stdout
          if (retries > 0) return openssl_stdout(args, retries - 1, retries)
          else throw new Error('Empty openssl response') }
      , err => {
          if (retries > 0) return openssl_stdout(args, retries - 1, retries)
          throw err }) }

function openssl_cmd(args, options) {
  return spawn_cmd(_openssl_binary, args, options) }


// child_process.spawn with {stdout, stderr}, Promises
function spawn_cmd(command, args, options) {
  if (!options) options = {}

  return new Promise((resolve, reject) => {
    let io = {stdout: [], stderr: []}
    let finish = () =>
      ({stdout: io.stdout.join(''), stderr: io.stderr.join('')})

    let child = child_process.spawn(command, args,
      Object.assign({stdio:'pipe'}, options))

    if (options.input) {
      child.stdin.write(options.input)
      child.stdin.end()
    } else if (options.stdin)
      options.stdin.pipe(child.stdin)

    child.on('error', err => reject( Object.assign({err, command, args}, finish()) ))
    child.on('exit', (exitCode,  exitSignal) => exitCode
       ? reject( Object.assign({exitCode, exitSignal, command, args}, finish()) )
       : resolve(finish()))

    child.stdout.on('data', data => io.stdout.push(data) )
    child.stderr.on('data', data => io.stderr.push(data) )
    return child })}


const _fs_writeFile = (...args) =>
  new Promise((resolve, reject) =>
    fs.writeFile(...args,
      (err, ans) => err ? reject(err) : resolve(ans)) )


const tmpfile = (content) =>
  Promise.resolve(content).then(content => {
    if (!content) return null
    if ('string' != typeof content && ! Buffer.isBuffer(content))
      throw new TypeError(`Expected Buffer or string content for tmpfile (${typeof content})`)

    return _tmpfile(content)
      .catch(() => _tmpfile(content))
      .catch(() => _tmpfile(content))
  })

function finallyCleanupTmpList(aPromise, tmpList) {
  return aPromise.then(
      ans => { tmpList.forEach(e => e && e.cleanup()); return ans }
    , err => { tmpList.forEach(e => e && e.cleanup()); throw err } )}

const _tmpfile = (content) =>
  new Promise((resolve, reject) =>
    tmp.file((err, path, fd, cleanup) => {
      if (err) {
        if (cleanup) cleanup()
        return reject(err)
      } else {
        _fs_writeFile(path, content, {encoding: 'ascii'})
          .then(() => resolve({path, cleanup}), reject)
      }}))



Object.assign(exports, {
  generateCertificateSigningRequest, generateCSR: generateCertificateSigningRequest,
  createSignedCertificate, createSelfSignedCertificate, selfCert: createSelfSignedCertificate,
  asTLSOptions,
  asCertRequestArgs, configForOpenSSLRequest,

  openssl_req, openssl_x509, openssl_cmd, use_openssl_binary,
  spawn_cmd,
})

