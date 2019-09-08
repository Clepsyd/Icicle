let foo = new Foo();

describe('foo', () => {
  
  let foo = new Foo();

  it("has a bar attribute that returns baz", () => {
    expect(foo.bar).toEqual("baz");
  });

  it("has a bar attribute that doesn't return 'loool'", () => {
    expect(foo.bar).notToEqual("loool");
  });
  
  it("has a thing attribute that returns thingy", () => {
    expect(foo.thing).notToEqual("blurp");
    expect(foo.thing).toEqual("thingy");
  });
  
  it("has a string 'My string'", () => {
    expect(foo.string).toEqual("My string");
  });
  
  plop
});

window.onload = () => {
runTests(descBlocks);
}