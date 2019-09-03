class Expect {

  constructor(subject) {
    this.subject = subject;
  }

  toEqual(matcher) {
    return matcher === this.subject;
  }
  notToEqual(matcher) {
    return !this.toEqual(matcher);
  }
  toContain(element) {
    return this.subject.includes(element);
  }
  notToContain(element) {
    return !this.toContain(element);
  }
  toRaiseError(expectedError) {
    try {
      this.subject();
    }
    catch (errorMessage) {
      if (!expectedError) {
        return true;
      }
      else if (errorMessage === expectedError) {
        return true;
      }
    }
    return false;
  }
  notToRaiseError(expectedError) {
    return !this.toRaiseError(expectedError);
  }

}

function expect(subject) {
  return new Expect(subject);
}

function formatResult(boolean) {
  return boolean ? "Pass" : "Fail";
}

function describe(description, func) {
  return description + "\n" + func()
}

function it(description, func) {
  return description + "\n" + func()
}

// const it = (msg, fn) => describe("  " + msg, fn);

function double(func, message, response) {
  return (this.message = response);
}








