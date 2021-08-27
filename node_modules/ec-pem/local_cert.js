'use strict'
const fs = require('fs');
const ec_pem = require('./ec_pem')
const ec_cert = require('./cert')


module.exports = exports = local_tls_opts
function local_tls_opts(filename, cb_gen_cert) {
  if (null == cb_gen_cert)
    cb_gen_cert = default_gen_local_cert;

  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, src) => {
      if (!err)
        try { return resolve(JSON.parse(src)); }
        catch (json_err) { return reject(json_err); }

      if ('ENOENT' !== err.code)
        return reject(err);

      Promise
      .resolve(cb_gen_cert({ ec_cert, ec_pem }))
      .then(tls_opts => {
        src = JSON.stringify(tls_opts, null, 2);
        fs.writeFile(filename, src, 'utf-8',
          err => err ? reject(err) : resolve(tls_opts) );
      });
    });
  });
}


function default_gen_local_cert({ ec_cert, ec_pem }) {
  const options = {
    ec: ec_pem.generate('prime256v1'),
    days: 3660, // 10 years
    altNames: ['localhost', '127.0.0.1'],
  }
  return ec_cert.createSelfSignedCertificate('localhost', options);
}

