// Assignment Code
var generateBtn = document.querySelector("#generate");

var low = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]

var cap = ["A" , "B" , "C" , "D" , "E" , "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var char = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

 var value = [];

 var newPass = [];

// Write password to the #password input
function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

passwordText.value = password;

function generatePassword(){
  var lengths = prompt("How long do you want your password?");
  if(isNaN(lengths)){
    alert("Please enter a number");
  } else {
    if(lengths < 8 || lengths > 128){
    alert("Please select a number between 8-128");
    console.log(lengths)
  } else { 
    var capLet = confirm("Use capitat letters?");
    if(capLet){
      value = value.concat(cap);
      console.log(capLet)
    }  var lowLet = confirm("Use lower case letters?");
    if(lowLet){
      value = value.concat(low);
      console.log(low)
      console.log(lowLet)
    } var spChar = confirm("Use special characters?");
    if(spChar){
      value = value.concat(char);
      console.log(char)
      console.log(spChar)
    }var numbers = confirm("Use numbers?");
    if(numbers){
      value = value.concat(num);
    }
     for (var i = 0; i < lengths; i++) {

      var index = Math.floor(Math.random() * value.length)
      newPass += value[index]
    } console.log("this is index" + index)
    console.log("this is newPass" + newPass)
    
  } return newPass
}
}
} 
generateBtn.addEventListener("click", writePassword)
console.log("this is low,cap, char, num" + cap + low + char + num)







