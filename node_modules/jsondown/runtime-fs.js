var runtime = require('runtimejs')
var fatfs = require('fatfs')
var disk = runtime.block.devices[0];

var blockInterface = {
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
}

module.exports = fatfs.createFileSystem(blockInterface);
