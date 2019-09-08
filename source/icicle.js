formatterInit = htmlFormatter;

class Expect {
  constructor(subject) {
    this.subject = subject;
  }

  toEqual(matcher) {
    if (matcher != this.subject) {
      throw new Error(`Expected ${this.subject} to equal ${matcher}`);
    }
  }

  notToEqual(matcher) {
    if (matcher == this.subject) {
      throw new Error(`Expected ${this.subject} to equal ${matcher}`);
    }
  }

  toContain(element) {
    if (!this.subject.includes(element)) {
      throw new Error(`Expected ${this.subject} to contain ${element}`);
    }
  }

  notToContain(element) {
    if (this.subject.includes(element)) {
      throw new Error(`Expected ${this.subject} not to contain ${element}`);
    }
  }

  toRaiseError(expectedError) {
    try {
      this.subject();
    } catch (errorMessage) {
      if (errorMessage !== expectedError) {
        throw new Error(`Expected ${this.subject} to throw ${expectedError}, got ${errorMessage}`);
      }
    }
    throw new Error(`Expected ${this.subject} to throw ${expectedError} but nothing was raised`);
  }

  notToRaiseError() {
    try {
      this.subject();
    } catch (errorMessage) {
      throw new Error(`Expected ${this.subject} not to throw an error, got ${errorMessage}`);
    }
  }

}

function expect(subject) {
  return new Expect(subject);
}


let descBlocks = [];

function describe(description, func) {
  
  let itBlocks = [];

  ((globalObj) => {
    function it(description, func) {
      itBlocks.push({
        "description": description,
        "func": func
      });
    }
    globalObj.it = it;
  })(globalThis);

  descBlocks.push({
    "description": description,
    "func": func,
    "itBlocks": itBlocks
  });

}

function consoleFormat(string) {
  console.log(string);
}

let outputDescDescription =
    outputPassingItDescription =
    outputFailingItDescription =
    outputExample =
    outputError =
    outputSummary = consoleFormat;

function runTests(){

  formatterInit();
  let errorMessage;
  let tests = 0;
  let fails = 0;

  for(block of descBlocks) {
    
    outputDescDescription(block.description);
    try {
      block.func();
    }
    catch (error) {
      errorMessage = `${error}, in ${error.stack}`;
    }
    for (itBlock of block.itBlocks) {
      tests++;
      try {
        itBlock.func();
        outputPassingItDescription(itBlock.description);
        outputExample(".");
      } catch (error) {
        fails++;
        outputFailingItDescription(itBlock.description);
        outputExample("F");
        outputError(block.description);
        outputError(itBlock.description +
        ": " +
        `${error}, in ${error.stack}`);
      };
    }
  }
  outputSummary([tests - fails, fails, errorMessage])
  outputError(errorMessage);

}
