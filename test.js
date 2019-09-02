function toEqual(a, b) {
  return a === b;
}

function toContain(sequence, element) {
  return sequence.includes(element);
}

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

function not(a) {
  return !a;
}

function expect(boolean) {
  return boolean ? "Pass" : "Fail";
}

function toRaiseError(a) {
  try {
    a();
  } catch (errorMessage) {
    return true;
  }
  return false;
}

let foo = new Foo();

console.log("Should pass: " + expect(toEqual(foo.bar, "baz")));
console.log("Should fail: " + expect(toEqual(foo.bar, "plop")));

console.log("Should pass: " + expect(toContain(foo.sequence, 2)));
console.log("Should fail: " + expect(toContain(foo.sequence, 4)));

console.log("Should pass: " + expect(toContain(foo.string, "Mystring")));
console.log("Should fail: " + expect(toContain(foo.string, "SNOT")));
console.log("Should be false: " + not(true));
console.log("Should be true: " + not(false));
console.log("Should fail: " + expect(not(toContain(foo.sequence, 3))));
console.log("Should pass: " + expect(not(toContain(foo.sequence, 4))));
console.log("Should pass: " + expect(toRaiseError(foo.error)));
console.log("Should fail: " + expect(toRaiseError(foo.notAnError)));
