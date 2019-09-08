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
    } catch (errorMessage) {
      if (!expectedError) {
        return true;
      } else if (errorMessage === expectedError) {
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

//

let itBlocks = []

function it(description, func) {
  itBlocks.push([description, func]);
}

function describe(description, func) {
  describeBlocks.push([description, func]);
}

function toEqual(matcher) {
  if (matcher != this.subject) {
    throw "Expected matcher to equal thi.subject"
  }
}

function testOutput(arrayOfTests){

  for (itBlock of arrayOfTests){

    try{
      itBlock();
    }
    catch (err) {
      return "F"
    }
     return "."
    }

}