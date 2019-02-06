module.exports = {
  networks: {
    'private': {
      host: 'localhost',
      port: 7545,
      network_id: '5777',
      from: '0xE862B6DA08aA5f146b1EE32C3D5dAB4e20BBFfB8',
      gas: 4000000,
    },
  },
  compilers: {
    solc: {
      version: "0.5.1"
      /* ... */
    }

    /* ... */
  },
};