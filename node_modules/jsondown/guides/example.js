'use strict';

const runtime = require('runtimejs');
const fs = require('./fake-fs')
const levelup = require('levelup');
const db = levelup('/wOOt.json', {db: require('jsondown')});

fs.on('ready', () => {
	fs.writeFile('/wOOt.json', JSON.stringify({}), (err) => {
		if (err) console.log(err)

		db.put('poo', 'par');
		db.put('zaz', 'zoo');

		db.get('poo', (err, val) => {
			if (err) console.log(err)
			console.log(val)
		});
		db.get('zaz', (err, val) => {
			if (err) console.log(err)
			console.log(val)
		});

		db.createReadStream()
	    .on('data', function (kv) {
				console.log('%s: %s', kv.key, kv.value)
			})
	    .on('end', function () {
				console.log('done')
			})

		fs.readFile('/wOOt.json', {encoding: 'utf8'}, (e, d) => {
			if (e) {
				console.log(e);
			}
			console.log(d);
		});
	})
});

fs.on('error', err => console.log(err));
