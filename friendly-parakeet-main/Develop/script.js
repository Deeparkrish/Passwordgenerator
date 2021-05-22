// Assignment code here
var alphabetArray ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericArray= '0123456789';
var specialCharArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordEl ="";
var pwdLength=0;
var checkUcaseAlphabet=false;
var checkSpecial =false;
var checkLcaseAlphabet= false;
var checkNumeric =false;

var getPasswordLength= function(){
  pwdLength=window.prompt("Please enter a password length greater than 7 and less than 129");
  console.log(pwdLength);
  if (isNaN(pwdLength)) 
  {
      alert("Must input numbers");
      getPasswordLength();
  }
  else if (pwdLength=== null || pwdLength<=0 ) {
    alert("Please enter a valid length");
    getPasswordLength();
  }
  else if (pwdLength < 8 ||  pwdLength >129)
  {
    alert(" Password length must be between 8-128 characters");
    getPasswordLength();
  }
  else{
    length =Math.round(parseInt(length,10));
  }

  console.log(pwdLength);
};
var charactersToInclude =function(){

  checkUcaseAlphabet =window.confirm("Would you like to include upper case alphabets in your password?")
    checkLcaseAlphabet =window.confirm("Would you like to include lower case alphabets in your password?")
    checkNumeric =window.confirm("Would you like to include numbers in your password ?");
    checkSpecial =window.confirm("Would you like to include special characters in your password?")
    
    console.log(checkUcaseAlphabet);
    console.log(checkNumeric);
    console.log(checkSpecial);
    console.log(checkLcaseAlphabet);
};


var generatePassword =function(){
    // get the password length from user
    getPasswordLength();
    charactersToInclude();
    
  
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
