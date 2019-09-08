htmlFormatter = () => {

  let descriptions = document.getElementById("descriptions");
  let testOutputs = document.getElementById("testOutputs");
  let summary = document.getElementById("summary");
  let errors = document.getElementById("errors");

  function htmlDescribe(string){
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "describe")
    h2.innerText = string;
    descriptions.appendChild(h2);
  }

  function failingHtmlIt(string){
    let h3 = document.createElement("h3")
    h3.setAttribute("class", "it fail")
    h3.innerText = string;
    descriptions.appendChild(h3);
  }

  function passingHtmlIt(string){
    let h3 = document.createElement("h3")
    h3.setAttribute("class", "it pass")
    h3.innerText = string;
    descriptions.appendChild(h3);
  }

  function htmlExample(string) {
    let example = document.createElement("ins", );
    example.innerHTML = `<strong>${string}</strong>`;
    string == "F" ?
      example.setAttribute("class", "fail example") :
      example.setAttribute("class", "pass example");
    testOutputs.appendChild(example);
  }

  function htmlError(errorMessage) {
    let error = document.createElement("p");
    error.innerHTML = errorMessage;
    errors.appendChild(error);
  }

  function htmlSummary(arr){
    let passed = arr[0];
    let failed = arr[1];
    let results = document.createElement("h3");
    let passedHtml = document.createElement("ins");
    passedHtml.setAttribute("class", "pass");
    let failedHtml = document.createElement("ins");
    failedHtml.setAttribute("class", "fail");
    passedHtml.innerText = passed + " passed, ";
    failedHtml.innerText = failed + " failed.";
    results.append(passedHtml, failedHtml);
    summary.appendChild(results);
  }
  

  outputDescDescription = htmlDescribe;
  outputPassingItDescription = passingHtmlIt;
  outputFailingItDescription = failingHtmlIt;
  outputExample = htmlExample;
  outputSummary = htmlSummary;
  outputError = htmlError;

}




