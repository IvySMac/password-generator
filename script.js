// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword=function () {
//Creates a pop up at the top to prompt the user to input information we need 
var passLength=parseInt(window.prompt ("Enter desired password length"))
console.log (passLength)
//defines the boundaries of the password
if (passLength<8 || passLength>128 || isNaN(passLength)) {
//If the password is less than 8, more than 128 and isn't a number at all, you will be greeted with the alert text
  alert("Please enter a valid password length")
//At this point, the function stops and you'll need to start over with valid information
return "Please try again";
}


//If what is entered passes the if/else statement above (a number between 8 and 128)
var characterString=""
if (confirm("Would you like lowercase letters?")){
characterString+="abcdefghijklmnopqrstuvwxyz"
}
if (confirm("Would you like uppercase letters?")){
  characterString+="abcdefghijklmnopqrstuvwxyz".toUpperCase ()
  }
  if (confirm("Would you like numbers?")){
    characterString+="0123456789"
    }
    if (confirm("Would you like special characters?")){
      characterString+="!@#$%&"
      }
  if (characterString.length===0){
    alert("Please select at least one character type")
    return "Please try again"
  }
  else {
    var results=""
    var characterArray=characterString.split ("")
    console.log(characterArray)
    for (var i=0; i<passLength; i++) {
      var index=Math.floor(Math.random()*characterArray.length)
      console.log(index)
      var digit=characterArray[index]
      results+=digit
    }
    return results
  }


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
