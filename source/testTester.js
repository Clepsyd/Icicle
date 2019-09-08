class Foo {
  constructor() {
    this.bar = "baz";
    this.thing = "thingy";
    this.sequence = [1, 2, 3];
    this.string = "Mystring";
  }
  error() {
    throw "This is an error";
  }
  notAnError() {
    return true;
  }
}

let foo = new Foo();

describe('foo', () => {
  
  let foo = new Foo();

  it("has a bar attribute that returns baz", () => {
    expect(foo.bar).toEqual("baz");
  });

  it("has a thing attribute that returns thingy", () => {
    expect(foo.thing).notToEqual("blurp");
    expect(foo.thing).toEqual("thingy");
  });

  it("has a string 'My string'", () => {
    expect(foo.string).toEqual("My string");
  });

  it("has a bar attribute that returns baz", () => {
    expect(foo.bar).toEqual("baz");
  });

});

window.onload = () => {
runTests(descBlocks);
}