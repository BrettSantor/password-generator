// Assignment Code
var generateBtn = document.querySelector("#generate");

var low = ["a", "b", "c", "d", "e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]

var cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var char = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// var value =[];

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
          alert("Please keep password length between 8-128 characters"); }
        } else {
         var capLet = confirm("Use capital letters?");
         if(capLet) {
           var value = cap
         }
          var lowLet = confirm("Use lower case letters?");
          if(lowLet) {
            var newValue = value.concat(low)
          }
          var spChar = confirm("Use special characters?");
          if(spChar) {
            var allArray = newValue.concat(char)
          }
        }
       
          for(i = 0, i < length, i++) {
           if(i === length) {
             Math.floor(Math.random() * allArray.length);
         }
        } 
      
   }
  } 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);