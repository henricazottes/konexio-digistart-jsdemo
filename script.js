function sayHello() {
  var nameElement = document.getElementById("name");
  var name = nameElement.value;

  var helloText;

  if (name === "") {
    helloText = "Hello World !";
  } else {
    helloText = "Hello " + name + " !";
  }

  var answerElement = document.getElementById("reponse");
  answerElement.textContent = helloText;
}
