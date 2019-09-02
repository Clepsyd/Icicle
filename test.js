function toEqual(a, b){
  return a === b ? "Pass" : "Fail";
}

function toContain(sequence, element) {
  return sequence.includes(element) ? "Pass" : "Fail";
}

function Foo() {
  this.bar = "baz";
  this.sequence = [1, 2, 3];
  this.string = "Mystring"
}

let foo = new Foo();

console.log("Should pass: " + toEqual(foo.bar, "baz"));
console.log("Should fail: " + toEqual(foo.bar, "plop"));

console.log("Should pass: " + toContain(foo.sequence, 2));
console.log("Should fail: " + toContain(foo.sequence, 4));

console.log("Should pass: " + toContain(foo.string, "Mystring"));
console.log("Should fail: " + toContain(foo.string, "SNOT"));

