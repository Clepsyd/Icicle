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
      throw "0";
    } catch (errorMessage) {
      console.log(errorMessage);
      if (errorMessage === "0"){
        throw new Error(`Expected ${this.subject.name} to throw an error but nothing was raised`);
      }
      else if (expectedError && errorMessage !== expectedError) {
        throw new Error(`Expected ${this.subject.name} to throw ${expectedError}, got ${errorMessage}`);
      }
    }
  }

  notToRaiseError() {
    try {
      this.subject();
    } catch (errorMessage) {
      throw new Error(`Expected ${this.subject.name} not to throw an error, got ${errorMessage}`);
    }
  }

}

function expect(subject) {
  return new Expect(subject);
}


var descBlocks = [];
let itBlocks;

function it(description, func) {
  itBlocks.push({
    "description": description,
    "func": func
  });
}

function describe(description, func) {
  
  itBlocks = [];

  func();

  descBlocks.push({
    "description": description,
    "func": func,
    "examples": itBlocks
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

  for(let block of descBlocks) {
    
    outputDescDescription(block.description);
    // try {
    //   block.func();
    // }
    // catch (error) {
    //   errorMessage = `${error}, in ${error.stack}`;
    // }
    for (let example of block.examples) {
      tests++;
      try {
        example.func();
        outputPassingItDescription(example.description, block.description);
        outputExample(".");
      } catch (error) {
        fails++;
        outputFailingItDescription(example.description, block.description);
        outputExample("F");
        outputError(block.description);
        outputError(example.description +
        ": " +
        `${error}, in ${error.stack}`);
      };
    }
  }
  outputSummary([tests - fails, fails, errorMessage])
  if (errorMessage) {
    outputError(errorMessage);
  }
}

window.onload = () => {
  runTests(descBlocks);
}
