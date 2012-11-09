
/**
 * dependencies.
 */

var Emitter = require('events').EventEmitter;

/**
 * expsoe `mixin`
 *
 * @param {Object} obj
 */

module.exports = function (obj) {
  for (var k in Emitter.prototype) {
    obj[k] = Emitter.prototype[k];
  }

  // events getter.

  obj.__defineGetter__('_events', function () {
    return this.__events || (this.__events = {});
  });

  // events setter.

  obj.__defineSetter__('_events', function () {
    this.__events = {};
  });

};
