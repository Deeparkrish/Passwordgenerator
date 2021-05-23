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
var charArray ="";
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
  pwdLength =parseInt(pwdLength);
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
    
    if(checkUcaseAlphabet){
      console.log(charArray.length);
       var ucaseStartIndex = charArray.length;
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

    var checkedUcase =false;
    var checkedLcase =false;
    var checkedNum =false;
    var checkedSpecial =false;

    for(var i=0; i<(pwdLength-numberOfSelections);i++ ){
      var index =parseInt( Math.ceil(Math.random() * (charArray.length-1)));
      if ((index>=ucaseStartIndex) && (index<=ucaseEndIndex) && (checkedUcase===false) && checkUcaseAlphabet)
      {
          numberOfSelections-=1;
          checkedUcase =true;
          
      }
      else if((index >=lcaseStartIndex) && (index <=lcaseEndIndex) && (checkedLcase===false) && checkLcaseAlphabet){
        numberOfSelections -=1;
        checkedLcase =true;


        }
      else if((index >=numStartIndex) && (index <=numEndIndex) && (checkedNum===false) && checkNumeric){
          numberOfSelections -=1;
          checkedNum =true;

        }
      else if((index >=specialStartIndex)&& (index <=specialEndIndex) && (checkedSpecial===false) &&checkSpecial){
          numberOfSelections -=1;
          checkedSpecial =true;

        }
      var alpha = charArray.charAt(index);         
      passwordEl += alpha;
    }
    if ((checkedUcase===false) && checkUcaseAlphabet)
    {
       index= parseInt( Math.ceil(Math.random() * (alphabetArrayUpper.length-1)));
       alpha = alphabetArrayUpper.charAt(index);
       passwordEl+= alpha;
    }
    if ((checkedLcase===false) && checkLcaseAlphabet)
    {
       index= parseInt( Math.ceil(Math.random() * (alphabetArrayLower.length-1)));
       alpha = alphabetArrayLower.charAt(index);
       passwordEl+= alpha;
    }
    if ((checkedSpecial===false) && checkSpecial)
    {
       index= parseInt( Math.ceil(Math.random() * (specialCharArray.length-1)));
       alpha = specialCharArray.charAt(index);
       passwordEl+= alpha;
    }
    if ((checkedNum===false) && checkNumeric)
    {
       index= parseInt( Math.ceil(Math.random() * (numericArray.length-1)));
       alpha = numericArray.charAt(index);
       passwordEl+= alpha;
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
