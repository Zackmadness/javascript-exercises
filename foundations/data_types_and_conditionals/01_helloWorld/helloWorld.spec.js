const helloWorld = require('./helloWorld.js');

describe('helloWorld', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
