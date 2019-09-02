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

function not(a) {
  return !a;
}

function expect(boolean) {
  return boolean ? "Pass" : "Fail";
}

let foo = new Foo();

console.log("Should pass: " + toEqual(foo.bar, "baz"));
console.log("Should fail: " + toEqual(foo.bar, "plop"));

console.log("Should pass: " + toContain(foo.sequence, 2));
console.log("Should fail: " + toContain(foo.sequence, 4));

console.log("Should pass: " + toContain(foo.string, "Mystring"));
console.log("Should fail: " + toContain(foo.string, "SNOT"));
console.log("Should be false: " + not(true));
console.log("Should be true: " + not(false));
console.log("Should be false: " + expect(not(toContain(foo.sequence, 3))));
console.log("Should be true: " + expect(not(toContain(foo.sequence, 4))));
