// function toEqual(a, b) {
//   return a === b;
// }

// function toContain(sequence, element) {
//   return sequence.includes(element);
// }

// function Foo() {
//   this.bar = "baz";
//   this.sequence = [1, 2, 3];
//   this.string = "Mystring";
// }

// Foo.prototype.error = function() {
//   throw "This is an error";
// };

// Foo.prototype.notAnError = function() {
//   return true;
// };

// function not(a) {
//   return !a;
// }

// function expect(boolean) {
//   return boolean ? "Pass" : "Fail";
// }

// function toRaiseError(a) {
//   try {
//     a();
//   } catch (errorMessage) {
//     return true;
//   }
//   return false;
// }

// let foo = new Foo();

// console.log("Should pass: " + expect(toEqual(foo.bar, "baz")));
// console.log("Should fail: " + expect(toEqual(foo.bar, "plop")));

// console.log("Should pass: " + expect(toContain(foo.sequence, 2)));
// console.log("Should fail: " + expect(toContain(foo.sequence, 4)));

// console.log("Should pass: " + expect(toContain(foo.string, "Mystring")));
// console.log("Should fail: " + expect(toContain(foo.string, "SNOT")));
// console.log("Should be false: " + not(true));
// console.log("Should be true: " + not(false));
// console.log("Should fail: " + expect(not(toContain(foo.sequence, 3))));
// console.log("Should pass: " + expect(not(toContain(foo.sequence, 4))));
// console.log("Should pass: " + expect(toRaiseError(foo.error)));
// console.log("Should fail: " + expect(toRaiseError(foo.notAnError)));

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

function Expect (subject) {
  this.subject = subject;
}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean ? "Pass" : "Fail";
}

Expect.prototype.not = function (a) {
  return a;
}

Expect.prototype.toEqual = function(matcher) {
  return matcher === this.subject;
}

Expect.prototype.notToEqual = function(matcher) {
  return !this.toEqual(matcher);
}

Expect.prototype.toContain = function(element) {
  return this.subject.includes(element);
}

Expect.prototype.notToContain = function(element) {
  return !this.toContain(element);
}

Expect.prototype.toRaiseError = function(expectedError) {
  try {
    this.subject();
  } catch (errorMessage) {
    if(!expectedError) {
      return true;
    }
    else if (errorMessage === expectedError) {
      return true;
    }
  }
  return false;
}

Expect.prototype.notToRaiseError = function(expectedError) {
  return !this.toRaiseError(expectedError);
}

console.log(expect(foo.bar).toEqual("baz"));
console.log(expect(foo.bar).toEqual("plop"));

console.log("-------------------");

console.log("Should pass: " + expect(foo.sequence).toContain(2));
console.log("Should fail: " + expect(foo.sequence).toContain(4));

console.log("-------------------");

console.log("Should pass: " + expect(foo.string).toContain("Mystring"));
console.log("Should fail: " + expect(foo.string).toContain("SNOT"));

console.log("-------------------");

console.log("Should pass: " + expect(foo.sequence).notToContain(4));
console.log("Should fail: " + expect(foo.sequence).notToContain(3));

console.log("-------------------");

console.log("Should pass: " + expect(foo.error).toRaiseError());
console.log("Should fail: " + expect(foo.notAnError).toRaiseError());
console.log("Should pass: " + expect(foo.notAnError).notToRaiseError());
console.log("Should fail: " + expect(foo.error).notToRaiseError());

console.log("-------------------");

console.log("Should pass: " + expect(foo.error).toRaiseError("This is an error"));
console.log("Should fail: " + expect(foo.error).toRaiseError("Another error message"));
console.log("Should pass: " + expect(foo.notAnError).notToRaiseError("This is an error"));
console.log("Should fail: " + expect(foo.error).notToRaiseError("This is an error"));