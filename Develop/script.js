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

  console.log(userLength);
  console.log(typeof userLength);
  
  // If user presses cancel, immediately end function
  if ((typeof userLength) == "object") {
    // return null object so text inside of password text area doesn't get updated. Otherwise, this function will return "undefined" string text... don't want that to happen
    return userLength;
  }

  // insure input length is between 8 and 128 characters
  if ((userLength >= 8) && (userLength <= 128)) {
    console.log("good input")
  } else {
    // rerun program if input length criteria not met
    window.alert("Length input not acceptable. Restarting program!");
  }

  // keep track of the minimum number of password criteria required
  var numCriteriaRequired = 1;
    // keep track of the number of password criteria selected
  var numCriteriaSelected = 0;
  
  // will prompt user whether they want to include lowercase letters inside of password  
  var isRandomLower = window.prompt('Password criteria selection page 1/4\n\nInclude lowercase letters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomLower) == "object") {
    return isRandomLower;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomLower.toUpperCase() === "Y") {
    numCriteriaSelected++;
  }

  // will prompt user whether they want to include uppercase letters inside of password
  var isRandomUpper = window.prompt('Password criteria selection page 2/4\n\nInclude uppercase letters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomUpper) == "object") {
    return isRandomUpper;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomUpper.toUpperCase() === "Y") {
    numCriteriaSelected++;
  }

  // will prompt user whether they want to include numbers inside of password
  var isRandomNumber = window.prompt('Password criteria selection page 3/4\n\nInclude numbers inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomNumber) == "object") {
    return isRandomNumber;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomNumber.toUpperCase() === "Y") {
    numCriteriaSelected++;
  }
  
  // will prompt user whether they want to include special characters inside of password
  var isRandomSpecial = window.prompt('Password criteria selection page 4/4\n\nInclude special characters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomSpecial) == "object") {
    return isRandomSpecial;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomSpecial.toUpperCase() === "Y") {
    numCriteriaSelected++;
  }
  
  
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
