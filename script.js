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
//Not only that, but 'parseInt' will make sure to help recognize the user's input information as numbers, not strings (i.e. text)
var passLength=parseInt(window.prompt ("Enter desired password length"))
console.log (passLength)
//defines the boundaries of the password
if (passLength<8 || passLength>128 || isNaN(passLength)) {
//If the password is less than 8, more than 128 and isn't a number at all, you will be greeted with the alert text
  alert("Please enter a valid password length")
//At this point, the function stops and you'll see this text inside of the box that should've been a generated password
return "Please try again";
}


//If what is entered passes the if/else statement above (the user enters a number between 8 and 128), you'll begin to get prompts 
//Each prompt will be a pop up with text that was created within the 'confirm()' line.
var characterString=""
if (confirm("Would you like lowercase letters?")){
characterString+="abcdefghijklmnopqrstuvwxyz" //Adds the letters to the variable characterString 
}
if (confirm("Would you like uppercase letters?")){
  characterString+="abcdefghijklmnopqrstuvwxyz".toUpperCase () //while this is the same alphabet, the .toUpperCase make sure they are added as upper case letters
  }
  if (confirm("Would you like numbers?")){
    characterString+="0123456789" //Adds numbers to characterString
    }
    if (confirm("Would you like special characters?")){
      characterString+="!@#$%&" //Adds this specific string of special characters to characterString
      }
  if (characterString.length===0){ //this indicates that if you cancel each time (give zero answers to each prompt), you will see this prompt
    alert("Please select at least one character type")
    //which will then generate this message 
    return "Please try again"
  }
  else {
    var results=""
    var characterArray=characterString.split ("")
    console.log(characterArray)
    for (var i=0; i<passLength; i++) {
      var index=Math.floor(Math.random()*characterArray.length) // will output a randomly selected character from characterArray 
      console.log(index)
      var digit=characterArray[index]
      results+=digit
    }
    return results
  }


}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
