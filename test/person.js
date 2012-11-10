
var emitter = require('../')
  , Person = function () {}
  , person = new Person;

emitter(Person.prototype);

describe('Person', function () {
  it('should mixin emitter', function () {
    person._events.should.equal(person._events);
    Person.prototype._events.should.not.equal(person._events);
  });

  it('should emit properly', function () {
    person.on('foo', function (a) {
      a.should.eql('bar');
    }).emit('foo', 'bar');
  });

  it('should register events properly', function () {
    person.on('say', console.log)._events.say.should.equal(console.log);
  })
});

describe('Person constructor', function () {
  it('should eql `Person`', function () {
    person.constructor.should.equal(Person);
  })
})

describe('emitter()', function () {
  it('should return the given `obj`', function () {
    var obj = new Person();
    emitter(obj).should.be.instanceOf(Person);
  })
})
