// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
 let passwordLength = parseInt(prompt("How long do you want your password to be?"));
 if(passwordLength < 8 || passwordLength > 128){
  alert("Error, invalid password length, the length of the password has to be between 8 characters to 128 characters");
  return " "
 }

 var lowerCase = confirm("Do you want to include lowercase characters in your password");
 var upperCase = confirm("Do you want to include uppercase character in your password");
 var numeric = confirm("Do you want to include numbers in your password");
 var specialCharacter = confirm("Do you want to include special characters to your password");

 if(!lowerCase && !upperCase && !numeric && !specialCharacter){
  alert("Error,invalid selection of character types, at least one character type should be selected");
  return " "
 }















}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
