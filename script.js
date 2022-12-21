// Assignment Code
var generateBtn = document.querySelector("#generate");
var low = "abcdefghijklmnopqrstuvwxyz"
var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var char = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
     var length = prompt("How long do you want your password");
     if(isNaN(length)) {
      alert("Please enter a number")
     } else {
        if(length < 8 || length > 128) {
          alert("Please keep password length between 8-128 characters");
        } else {
         var capLet = confirm("Use capital letters?");

          var lowLet = confirm("Use lower case letters?");

          var spChar = confirm("Use special characters?")
        }
        var value = ""
        if(capLet) {
          concat(value += cap);
        } if(lowLet)  {
          concat(value += low);
        } if(spChar) {
          concat(value += char);
          

        } for(i = 0, i < length, i++) {
          var newPass = Math.floor(Math.random() * value);
        }
     }
  } //return newPass
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
