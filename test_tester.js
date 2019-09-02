function Foo() {
  this.bar = "baz";
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
console.log("toEqual");
console.log("-------------------");

console.log("Should pass: " + expect(foo.bar).toEqual("baz"));
console.log("Should fail: " + expect(foo.bar).toEqual("plop"));

console.log("-------------------");
console.log("toContain - Arrays");
console.log("-------------------");

console.log("Should pass: " + expect(foo.sequence).toContain(2));
console.log("Should fail: " + expect(foo.sequence).toContain(4));

console.log("-------------------");
console.log("toContain - Strings");
console.log("-------------------");

console.log("Should pass: " + expect(foo.string).toContain("Mystring"));
console.log("Should fail: " + expect(foo.string).toContain("SNOT"));

console.log("-------------------");
console.log("notToContain");
console.log("-------------------");

console.log("Should pass: " + expect(foo.sequence).notToContain(4));
console.log("Should fail: " + expect(foo.sequence).notToContain(3));

console.log("-------------------");
console.log("toRaiseError");
console.log("-------------------");

console.log("Should pass: " + expect(foo.error).toRaiseError());
console.log("Should fail: " + expect(foo.notAnError).toRaiseError());

console.log("-------------------");
console.log("notToRaiseError");
console.log("-------------------");

console.log("Should pass: " + expect(foo.notAnError).notToRaiseError());
console.log("Should fail: " + expect(foo.error).notToRaiseError());

console.log("-------------------");
console.log("toRaiseError - with expected message");
console.log("-------------------");

console.log(
  "Should pass: " + expect(foo.error).toRaiseError("This is an error")
);
console.log(
  "Should fail: " + expect(foo.error).toRaiseError("Another error message")
);
console.log(
  "Should pass: " + expect(foo.notAnError).notToRaiseError("This is an error")
);
console.log(
  "Should fail: " + expect(foo.error).notToRaiseError("This is an error")
);
