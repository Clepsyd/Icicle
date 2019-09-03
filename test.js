function Expect(subject) {
  this.subject = subject;
}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean
    ? console.log("%cPass", "background: green; color: white;")
    : console.error("%cFail", "background: red; color: white;");
}

function describe(description, func) {
  console.log(description);
  func();
}

function it(description, func) {
  console.log(description);
  func();
}

function double(func, message, response) {
  return (this.message = response);
}

Expect.prototype.not = function(a) {
  return a;
};

Expect.prototype.toEqual = function(matcher) {
  matcher === this.subject;
};

Expect.prototype.notToEqual = function(matcher) {
  this.toEqual !== matcher;
};

Expect.prototype.toContain = function(element) {
  this.subject.includes(element);
};

Expect.prototype.notToContain = function(element) {
  !this.toContain(element);
};

Expect.prototype.toRaiseError = function(expectedError) {
  try {
    this.subject();
  } catch (errorMessage) {
    if (!expectedError) {
      return true;
    } else if (errorMessage === expectedError) {
      return true;
    }
  }
  return false;
};

Expect.prototype.notToRaiseError = function(expectedError) {
  return !this.toRaiseError(expectedError);
};

Expect.prototype.toBeEmpty = function() {
  this.subject === undefined || this.subject.length == 0;
};
