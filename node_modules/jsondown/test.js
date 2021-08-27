var test = require("tape"),
  testCommon = require("abstract-leveldown/testCommon"),
  jsonDOWN = require("./jsondown"),
  testBuffer = require("fs").readFileSync(__filename),
  db;

/*** compatibility with basic LevelDOWN API ***/

require("abstract-leveldown/abstract/leveldown-test").args(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/open-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/del-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/get-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/put-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/put-get-del-test").all(jsonDOWN, test, testCommon, testBuffer);

require("abstract-leveldown/abstract/batch-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/chained-batch-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/close-test").close(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/iterator-test").all(jsonDOWN, test, testCommon);

require("abstract-leveldown/abstract/ranges-test").all(jsonDOWN, test, testCommon);
