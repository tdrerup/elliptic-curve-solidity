# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.4"></a>
## [2.0.4](https://github.com/tunnckocore/detect-installed/compare/v2.0.3...v2.0.4) (2016-12-12)


### Bug Fixes

* **appveyor:** force install npm globally ([63aaa29](https://github.com/tunnckocore/detect-installed/commit/63aaa29))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/tunnckocore/detect-installed/compare/v2.0.2...v2.0.3) (2016-12-11)


### Bug Fixes

* **package:** fix engines field - npm should be >=2, not >=3 ([e0781d8](https://github.com/tunnckocore/detect-installed/commit/e0781d8))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/tunnckocore/detect-installed/compare/v2.0.1...v2.0.2) (2016-12-11)


### Bug Fixes

* **appveyor:** debugging appveyor shits ([7b107e1](https://github.com/tunnckocore/detect-installed/commit/7b107e1))
* **deps:** switch to use get-installed-path v2 ([3cd6f34](https://github.com/tunnckocore/detect-installed/commit/3cd6f34))
* **package:** all nyc coverage to 100 ([35ba763](https://github.com/tunnckocore/detect-installed/commit/35ba763))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/tunnckocore/detect-installed/compare/v2.0.0...v2.0.1) (2016-12-11)


### Bug Fixes

* **package:** update keywords ([da71404](https://github.com/tunnckocore/detect-installed/commit/da71404))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/tunnckocore/detect-installed/compare/v1.0.4...v2.0.0) (2016-12-11)


### Bug Fixes

* **appveyor:** clean builds ([0a8fd7f](https://github.com/tunnckocore/detect-installed/commit/0a8fd7f))
* **misc:** update changelog and package version ([8c55d06](https://github.com/tunnckocore/detect-installed/commit/8c55d06))


### Code Refactoring

* use ES2015, allow custom cwd to be passed through options ([a9586e7](https://github.com/tunnckocore/detect-installed/commit/a9586e7))


### BREAKING CHANGES

* default export is async and returns a promise; allow custom cwd to be passed

through opts.cwd; pass opts.local to check if package exists locally.





## 1.0.4 - 2015-07-17
- Release v1.0.4 / npm@v1.0.4
- remove `debug` and `handle-arguments`, simplify
- update repo

## 1.0.3 - 2015-05-09
- Release v1.0.3 / npm@v1.0.3
- update related
- reorganize tests
- bump dependencies, remove `fn-name`

## 1.0.2 - 2015-05-06
- Release v1.0.2 / npm@v1.0.2
- feross/standard for example usage
- add related section
- run update
- apply feross/standard, close #1

## 1.0.1 - 2015-04-18
- Release v1.0.1 / npm@v1.0.1
- run lint

## 1.0.0 - 2015-04-14
- Release v1.0.0 / npm@v1.0.0
- todo:
  + add cli
  + add docs, run docks(1)

## 0.0.0 - 2015-04-14
- first commits