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
  // alert user of what criteria to input into password generator
  window.alert("In the next few prompts, please select a password length (between 8 and 128 characters) and at least 1 additional criteria.");

  var userLength = window.prompt("Enter password length (number between 8 and 128):");

    // If user presses cancel, immediately end function
  if (!userLength) {
    return;
  }

  // insure input length is between 8 and 128 characters
  if ((userLength >= 8) && (userLength <= 128)) {
  console.log("good input")
  } else {
  // rerun program if input length criteria not met
    window.alert("Length input not acceptable. Restarting program!");
  }

return userLength;
  
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



console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSpecial());
// console.log(typeof Number(gdrgd));
console.log(+("bob"));
console.log("8" <= 8);
