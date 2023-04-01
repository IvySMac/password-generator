// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword=function () {
var passLength=parseInt(window.prompt ("Enter desired password length"))
console.log (passLength)
if (passLength<8 || passLength>128 || isNaN(passLength)) {
  alert("Please enter a valid password length")
return "Please try again";
}


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
