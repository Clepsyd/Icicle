let foo = new Foo();

describe('foo', () => {
  
  let foo = new Foo();

  it("has a bar attribute that returns baz", () => {
    expect(foo.bar).toEqual("baz");
  });

  it("has a bar attribute that doesn't return 'Hello'", () => {
    expect(foo.bar).notToEqual("Hello");
  });
  
  it("has a thing attribute that returns thingy", () => {
    expect(foo.thing).notToEqual("baz");
    expect(foo.thing).toEqual("thingy");
  });
  
  it("has a string 'My string'", () => {
    // FAILING TEST!
    expect(foo.string).toEqual("My string");
  });

  it('has a sequence attribute [1, 2, 3]', () => {
    expect(foo.sequence).toContain(1);
    expect(foo.sequence).notToContain(5);
  });

  it('has an error method that throws an error', () => {
    expect(foo.error).toRaiseError();
    expect(foo.error).toRaiseError("This is an error");
  })
  
  it('has a notAnError method that does not throw an error', () => {
    expect(foo.notAnError).notToRaiseError();
    expect(foo.notAnError).toRaiseError(); // THIS TEST SHOULD FAIL.
  });

  plop // This will raise an error shown in the test outputs.

});

