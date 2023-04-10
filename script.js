// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Get the length of the password from the user//
 let passwordLength = parseInt(prompt("How long do you want your password to be?"));
 // Send the Alert message and return empty string if the length of the password that the user enters either less than 8 or more than 128//
 if(passwordLength < 8 || passwordLength > 128){
  alert("Error, invalid password length, the length of the password has to be between 8 characters to 128 characters");
  return " ";
 }

 //Ask the user to select which criteria to include in the password//
 var includeLowerCase = confirm("Do you want to include lowercase characters in your password");
 var includeUpperCase = confirm("Do you want to include uppercase character in your password");
 var includeNumeric = confirm("Do you want to include numbers in your password");
 var includeSpecialCharacter = confirm("Do you want to include special characters to your password");

//If the user does not select any of the criteria avaliable, an alert message will be sent and a empty string will be returned//
 if(!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecialCharacter){
  alert("Error,invalid selection of character types, at least one character type should be selected");
  return " ";
 }

 //Creat an array for storing all the possible characters//
let passwordCharacters=[];

//All the special characters
var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// The storing array would be concatenated with all the special characters if the user choose to include special character as one of the criteria//
if(includeSpecialCharacter){
  passwordCharacters = passwordCharacters.concat(specialCharacter.split(""));
}

//All the lowercaseLetters//
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

// The strong array would be concatenated with all the lowercase letters if the user choose to include lowercase letters as one of the criteria//
if(includeLowerCase){
  passwordCharacters = passwordCharacters.concat(lowercaseLetters.split(""));
}

//All the uppercaseLetters//
var uppercaseLetter = lowercaseLetters.toUpperCase();

//The storing array would be concatenated with all the uppercase letters if the user choose to include uppercase letters as one of the criteria//
if(includeUpperCase){
  passwordCharacters = passwordCharacters.concat(uppercaseLetter.split(""));
}

//All the numbers
var numericNumbers = "123456789";

//The storing array would be concatenated with all the numeric numbers if the user choose to include numberic as one of the criteria//
if(includeNumeric){
  passwordCharacters = passwordCharacters.concat(numericNumbers.split(""));
}

//Create an string for the final result//
var result = ""

//Generate the final password
for(var i = 0; i < passwordLength; i++){
  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  let randomCharacter = passwordCharacters[randomIndex];
  result = result + randomCharacter;
}

//Send an alert message for the generated password//
alert(result);

//return the password//
return result;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
