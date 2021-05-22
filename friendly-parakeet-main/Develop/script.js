// Assignment code here
var alphabetArrayLower ="abcdefghijklmnopqrstuvwxyz";
var alphabetArrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericArray= '0123456789';
var specialCharArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var passwordEl ="";
var pwdLength=0;
var checkUcaseAlphabet=false;
var checkSpecial =false;
var checkLcaseAlphabet= false;
var checkNumeric =false;
var charArray =" ";
var numberOfSelections =0;

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
  else if (pwdLength < 8 ||  pwdLength >128)
  {
    alert(" Password length must be between 8-128 characters");
    getPasswordLength();
  }
  

  console.log(pwdLength);
};

var charactersToInclude =function(){

    checkUcaseAlphabet =window.confirm("Would you like to include upper case alphabets in your password?");
    checkLcaseAlphabet =window.confirm("Would you like to include lower case alphabets in your password?");
    checkNumeric =window.confirm("Would you like to include numbers in your password ?");
    checkSpecial =window.confirm("Would you like to include special characters in your password?");
    
    if (checkLcaseAlphabet === false && checkUcaseAlphabet===false && checkNumeric===false && checkSpecial ===false){
      alert("The password must include at least one character type");
      charactersToInclude();
    }

    console.log(checkUcaseAlphabet);
    console.log(checkNumeric);
    console.log(checkSpecial);
    console.log(checkLcaseAlphabet);
    
    if(checkUcaseAlphabet){
       var ucaseStartIndex =charArray.length;
      charArray =charArray.concat(alphabetArrayUpper);  
      var ucaseEndIndex=charArray.length-1;
      numberOfSelections +=1;
    }
    if(checkLcaseAlphabet){
      var lcaseStartIndex =charArray.length;

      charArray =charArray.concat(alphabetArrayLower);  
      var lcaseEndIndex=charArray.length-1;

      numberOfSelections+=1;
    }
    if(checkNumeric){
      var numStartIndex =charArray.length;
      charArray= charArray.concat(numericArray);
      var numEndIndex=charArray.length-1;
      numberOfSelections+=1;

    }
    if(checkSpecial)
    {
      var specialStartIndex =charArray.length;
      charArray =charArray.concat(specialCharArray);
      var specialEndIndex=charArray.length-1;
      numberOfSelections+=1;

    }
  
    console.log(charArray);
    var checkedUcase =false;
    var checkedLcase =false;
    var checkednum =false;
    var checkedSpecial =false;

    for(var i=0; i<pwdLength-numberOfSelections;i++ ){
      var index = Math.floor(Math.random() * charArray.length);
      if (index>=ucaseStartIndex && index<=ucaseEndIndex && (!checkedUcase) && checkUcaseAlphabet)
      {
          numberOfSelections-=1;
          checkedUcase =true;
          
      }
      if(index >=lcaseStartIndex && index <=lcaseEndIndex && (!checkedLcase) && checkLcaseAlphabet){
        numberOfSelections -=1;
        checkedLcase =true;

        }
      if(index >=lcaseStartIndex && index <=lcaseEndIndex && (!checkednum) && checkNumeric){
          numberOfSelections -=1;
          checkednum =true;

        }
        if(index >=lcaseStartIndex && index <=lcaseEndIndex && (!checkedSpecial) &&checkSpecial){
          numberOfSelections -=1;
          checkedSpecial =true;

        }


      var alpha = charArray.charAt(index);    
     
      passwordEl += alpha;
    }


};
 

var generatePassword =function(){
    // get the password length from user
    getPasswordLength();
    charactersToInclude();
    //numberOfSelections =numberOfSelections-1;
  
  return passwordEl;
  
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector("#password");
    var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
