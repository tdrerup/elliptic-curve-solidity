## Using JsonDOWN on RuntimeJS

JsonDOWN can be used to add database functionality to the [RuntimeJS][]
Javascript unikernel.

#### Install dependencies

RuntimeJS runs on top of QEMU, in addition o QEMU, the `runtime-cli`
should be installed.

```
$ npm install runtime-cli -g
```

#### Create a RuntimeJS project

Create a new directory and `cd` into it. Start a new project with `npm
init` and add `runtimejs` and `fatfs` as a dependency. `fatfs` provides
the interface with the disk image created in the next step.

```
$ mkdir new-proj && cd new-proj
$ npm init
$ npm install --save runtimejs fatfs
```

#### Prepare a disk image

RuntimeJS runs in a VM and cannot write to the host filesystem. To use
tools like JsonDOWN, `runtime-cli` can be used to create disk image for
peristent data storage. By default the command will create a new disk
image named `disk.img` in the current directory

```
$ runtime mkimg --size 33792K
```

#### Using JsonDOWN on RuntimeJS

Using JsonDOWN on RuntimeJS requires some initial setup with the new `disk.img`.

```
//./example.js
const runtime = require('runtimejs');
// Use fatfs to provide the filesystem interface
// see ./fake-fs.js for details
const fs = require('./fake-fs')
const levelup = require('levelup');
const db = levelup('/wOOt.json', {db: require('jsondown')});

// Make sure the filesystem is ready before writing to it
fs.on('ready', () => {
  // create the initial .json file for the DB
	fs.writeFile('/wOOt.json', JSON.stringify({}), (err) => {
		if (err) console.log(err)

    // interact with JsonDOWN/LevelDB like normal
		db.put('foo', 'bar');
		db.put('baz', 'boo');

		db.get('foo', (err, val) => {
			if (err) console.log(err)
			console.log(val)
		});
		db.get('baz', (err, val) => {
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

    // Check to see if our data is really written to disk
		fs.readFile('/wOOt.json', {encoding: 'utf8'}, (e, d) => {
			if (e) {
				console.log(e);
			}
			console.log(d);
		});
	})
});

fs.on('error', err => console.log(err));
```

#### Boot the System

```
$ runtime start --drive disk.img --nographic
```
