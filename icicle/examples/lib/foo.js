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