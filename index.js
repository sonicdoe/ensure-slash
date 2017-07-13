'use strict'

module.exports = str => {
  if (typeof str !== 'string') {
    throw new TypeError('input must be a string')
  }

  if (str.indexOf('/', str.length - 1) !== -1) {
    return str
  }

  return str + '/'
}
