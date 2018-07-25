# ensure-slash [![Build Status](https://img.shields.io/travis/sonicdoe/ensure-slash.svg)](https://travis-ci.org/sonicdoe/ensure-slash)

> Ensure your string ends with a slash

## Installation

```
$ npm install ensure-slash
```

## Usage

```js
const ensureSlash = require('ensure-slash')

ensureSlash('/home/foo')
// => '/home/foo/'

ensureSlash('/home/bar/')
// => '/home/bar/'
```

## Changelog

This project follows [Semantic Versioning 2](https://semver.org).

- v1.0.0 (2017-08-19): Fully commit to Semantic Versioning
- v0.1.0 (2017-07-13): Initial release
