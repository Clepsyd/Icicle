function Expect(subject) {
  this.subject = subject;
}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean ? "Pass" : "Fail";
}

Expect.prototype.not = function(a) {
  return a;
};

Expect.prototype.toEqual = function(matcher) {
  return matcher === this.subject;
};

Expect.prototype.notToEqual = function(matcher) {
  return !this.toEqual(matcher);
};

Expect.prototype.toContain = function(element) {
  return this.subject.includes(element);
};

Expect.prototype.notToContain = function(element) {
  return !this.toContain(element);
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
