function Foo() {
  this.bar = "baz";
  this.thing = "thingy";
  this.sequence = [1, 2, 3];
  this.string = "Mystring";
}

Foo.prototype.error = function() {
  throw "This is an error";
};

Foo.prototype.notAnError = function() {
  return true;
};

let foo = new Foo();

var foobarEqBaz = describe("#toEqual", function() {
  return it("Should return true if foobar equals baz", function() {
    return expect(foo.bar).toEqual("baz");
  });
});

var toEqual = describe("#toEqual", function() {
  return it("Should return true if ALL are true", function() {
    return expect(foo.bar).toEqual("baz");
    return expect(foo.thing).toEqual("thingy");
  });
});

var toRaiseError = describe("#toRaiseError", function() {
  return it("Should return an error", function() {
    return expect(foo.error).toRaiseError();
  });
});

var toRaiseError = describe("#toRaiseError", function() {
  return it("Should return an error", function() {
    return expect(foo.notAnError).toRaiseError();
  });
});

let lines = [
  "toEqual",
  "--------------------------------------",
  "Should pass: " + expect(foo.bar).toEqual("baz"),
  "Should fail: " + expect(foo.bar).toEqual("plop"),
  "--------------------------------------",
  "toContain - Arrays",
  "--------------------------------------",
  "Should pass: " + expect(foo.sequence).toContain(2),
  "Should fail: " + expect(foo.sequence).toContain(4),
  "--------------------------------------",
  "toContain - Strings",
  "--------------------------------------",
  "Should pass: " + expect(foo.string).toContain("Mystring"),
  "Should fail: " + expect(foo.string).toContain("SNOT"),
  "--------------------------------------",
  "notToContain",
  "--------------------------------------",
  "Should pass: " + expect(foo.sequence).notToContain(4),
  "Should fail: " + expect(foo.sequence).notToContain(3),
  "--------------------------------------",
  "toRaiseError",
  "--------------------------------------",
  "Should pass: " + expect(foo.error).toRaiseError(),
  "Should fail: " + expect(foo.notAnError).toRaiseError(),
  "--------------------------------------",
  "notToRaiseError",
  "--------------------------------------",
  "Should pass: " + expect(foo.notAnError).notToRaiseError(),
  "Should fail: " + expect(foo.error).notToRaiseError(),
  "--------------------------------------",
  "toRaiseError - with expected message",
  "--------------------------------------",
  "Should pass: " + expect(foo.error).toRaiseError("This is an error"),
  "Should fail: " + expect(foo.error).toRaiseError("Another error message"),
  "Should pass: " + expect(foo.notAnError).notToRaiseError("This is an error"),
  "Should fail: " + expect(foo.error).notToRaiseError("This is an error"),
  foobarEqBaz,
  toEqual,
  toRaiseError
];

for (line of lines) {
  let para = document.createElement("P");
  para.innerHTML = line;
  document.body.appendChild(para);
}

//testing describe and it blocks

//testing multiple expects
//this needs to return true if ALL are true &&
//this needs to return false if one is false ||
