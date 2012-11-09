
[Node](https://nodejs.org) EventEmitter mixin.

## Example

```javascript

var emitter = require('emitter-mixin');

function Person () {}
emitter(Person.prototype);

var person = new Person();
person.on('foo', function (arg) {
  console.log(arg);
}).emit('foo', 'bar');

// > bar
```

You don't have to do `Emitter.call(this)` in your constructor
anymore, the mixin defines a `_events` getter that does the
magic for you.

## License

(MIT)
