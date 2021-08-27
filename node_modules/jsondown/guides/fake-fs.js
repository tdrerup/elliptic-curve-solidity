const fatfs = require('fatfs');

const disk = runtime.block.devices[0];
const blockInterface = {
	sectorSize: disk.formatInfo.sectorSize,
	numSectors: disk.formatInfo.totalSectorCount,
	readSectors(i, dest, cb) {
		disk.read(i, dest)
			.then(cb.bind(null, null))
			.catch(cb);
	},
	writeSectors(i, data, cb) {
		disk.write(i, data)
			.then(cb.bind(null, null))
			.catch(cb);
	}
};

const fs = fatfs.createFileSystem(blockInterface);

module.exports = fs;
