// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // return "bob";
}

// function that gets a random lowercase letter
function getRandomLower () {
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  return lowercaseLetters[Math.floor((Math.random() * lowercaseLetters.length))];
}

// function that gets a random uppercase letter
function getRandomUpper () {
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercaseLetters[Math.floor((Math.random() * uppercaseLetters.length))];
}

// function that gets a random number
function getRandomNumber () {
  var numCharacters = "0123456789";
  return numCharacters[Math.floor((Math.random() * numCharacters.length))];
}

// function that gets a random special character
function getRandomSpecial () {
  var specialCharacters = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  return specialCharacters[Math.floor((Math.random() * specialCharacters.length))];
}



// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSpecial());