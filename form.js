var objPeople = [
  {
    // Object @ 0 index
    email: "sam",
    pass: "sam",
  },
  {
    // Object @ 1 index
    email: "matt",
    pass: "matt",
  },
  {
    // Object @ 2 index
    email: "chris",
    pass: "chris",
  },
];

function getInfo() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  // prompt(email);
  // prompt(pass);
  for (var i = 0; i < objPeople.length; i++) {
    // check is user input matches Email and password of a current index of the objPeople array
    if (email == objPeople[i].email && pass == objPeople[i].pass) {
      console.log(email + " is logged in!!!");
      // prompt("hello");
      return;
      // stop the function if this is found to be true
    }
  }
  console.log("incorrect email or pass");
  // prompt("nawa o");
}
