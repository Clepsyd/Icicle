//write tests here
var saySomthing = describe("#saySomthing", function() {
  return it("Should say hello", function() {
    return expect(saySomthing("Hello")).toEqual("You said: Hello");
  });
});

let lines = [
  //test variable names goes here
  saySomthing
];

for (line of lines) {
  let para = document.createElement("P");
  para.innerHTML = line;
  document.body.appendChild(para);
}
