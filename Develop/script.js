// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // alert user of what criteria to input into password generator
  window.alert("In the next few prompts, please select a password length (between 8 and 128 characters) and at least 1 additional criteria.");

  // prompt user to input password length
  var userLength = window.prompt("Enter password length (number between 8 and 128):");
  
  // If user presses cancel, immediately end function
  if ((typeof userLength) == "object") {
    // return null object so text inside of password text area doesn't get updated. Otherwise, this function will return "undefined" string text... don't want that to happen
    return userLength;
  }

  // ensure password input length is between 8 and 128 characters
  if ((userLength >= 8) && (userLength <= 128)) {
    window.alert("You've inputted a password length of " + userLength + " characters.");
  } else {
    // Let computer choose random password length between 8 and 128 characters if input criteria is not met
    var compRandomNumber = Math.ceil(Math.random() * 120) + 8;
    window.alert("Length input not acceptable. The computer has randomly chosen a password length of " + compRandomNumber + " characters." );
    userLength = compRandomNumber;
  }

  // keep track of the minimum number of password criteria required
  var numCriteriaRequired = 1;
  // keep track of the number of password criteria selected
  var numCriteriaSelected = 0;
  //empty string which concatenates as user selects "Y" on different criteria
  var passwordString = "";

  // list all different type of character selections below
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numCharacters = "0123456789";
  var specialCharacters = " !”#$%&’()*+,-./:;<=>?@[\]^_`{|}~";
  
  // will prompt user whether they want to include lowercase letters inside of password  
  var isRandomLower = window.prompt('Password criteria selection page 1/4\n\nInclude lowercase letters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomLower) == "object") {
    return isRandomLower;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomLower.toUpperCase() === "Y") {
    numCriteriaSelected++;
    passwordString += lowercaseLetters;
  }

  // will prompt user whether they want to include uppercase letters inside of password
  var isRandomUpper = window.prompt('Password criteria selection page 2/4\n\nInclude uppercase letters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomUpper) == "object") {
    return isRandomUpper;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomUpper.toUpperCase() === "Y") {
    numCriteriaSelected++;
    passwordString += uppercaseLetters;
  }

  // will prompt user whether they want to include numbers inside of password
  var isRandomNumber = window.prompt('Password criteria selection page 3/4\n\nInclude numbers inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomNumber) == "object") {
    return isRandomNumber;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomNumber.toUpperCase() === "Y") {
    numCriteriaSelected++;
    passwordString += numCharacters;
  }
  
  // will prompt user whether they want to include special characters inside of password
  var isRandomSpecial = window.prompt('Password criteria selection page 4/4\n\nInclude special characters inside password? (Enter "Y" or "N")\n\nMinimum number of criteria required: ' + numCriteriaRequired + '\nTotal number of criteria included so far: ' + numCriteriaSelected);

  // If user presses cancel, immediately end function
  if ((typeof isRandomSpecial) == "object") {
    return isRandomSpecial;

  // If user enters "Y" for yes, increment numCriteriaSelected by 1
  } else if (isRandomSpecial.toUpperCase() === "Y") {
    numCriteriaSelected++;
    passwordString += specialCharacters;
  }
  
  // ensure criteria minimum requirement of 1 is met. If not, end function
  if (numCriteriaSelected < numCriteriaRequired) {
    window.alert("Sorry, you didn't select a total of at least 1 password criteria as required. Please try generating a new password again.");
    return null;
  }

  // generate random mixed string with all input criteria variables and concatenate it equal to the length of the user input length or computer-generated random input length
  var mixedRandomString = "";
  for (var i = 0; i < userLength; i++) {
    mixedRandomString += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
  }

  window.alert("Congratulations, your new password has been created! Press OK to see your new password!");

  // return string with all password criteria
  return mixedRandomString;
}