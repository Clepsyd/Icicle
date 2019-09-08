htmlFormatter = () => {

  let descriptions = document.getElementById("descriptions");
  let div = document.getElementById("testOutputs");
  let errors = document.getElementById("errors");

  function htmlDescribe(string){
    let h2 = document.createElement("h2");
    h2.setAttribute("class", "describe")
    h2.innerText = string;
    descriptions.appendChild(h2);
  }

  function htmlIt(string){
    let h3 = document.createElement("h3")
    h3.setAttribute("class", "it")
    h3.innerText = string;
    descriptions.appendChild(h3);
  }

  function htmlExample(string) {
    let example = document.createElement("ins", );
    example.innerHTML = `<strong>${string}</strong>`;
    string == "F" ?
      example.setAttribute("class", "fail") :
      example.setAttribute("class", "pass");
    div.appendChild(example);
  }

  function htmlError(errorMessage) {
    let error = document.createElement("p");
    error.innerHTML = errorMessage;
    errors.appendChild(error);
  }
  

  outputDescDescription = htmlDescribe;
  outputItDescription = htmlIt
  outputExample = htmlExample
  outputError = htmlError;

  console.log("hey");

}




