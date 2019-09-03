function Expect(subject) {
  this.subject = subject;
}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean ? "Pass" : "Fail";
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
  return formatResult(matcher === this.subject);
};

Expect.prototype.notToEqual = function(matcher) {
  return formatResult(!this.toEqual(matcher));
};

Expect.prototype.toContain = function(element) {
  return formatResult(this.subject.includes(element));
};

Expect.prototype.notToContain = function(element) {
  return formatResult(!this.toContain(element));
};

Expect.prototype.toRaiseError = function(expectedError) {
  try {
    this.subject();
  } catch (errorMessage) {
    if (!expectedError) {
      return formatResult(true);
    } else if (errorMessage === expectedError) {
      return formatResult(true);
    }
  }
  return formatResult(false);
};

Expect.prototype.notToRaiseError = function(expectedError) {
  return formatResult(!this.toRaiseError(expectedError));
};
