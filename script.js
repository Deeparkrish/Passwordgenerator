// Assignment code here
// lower case 
var alphabetArrayLower ="abcdefghijklmnopqrstuvwxyz";
//Upper case 
var alphabetArrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//Numbers 
var numericArray= '0123456789';
//Special characters as specified in README 
var specialCharArray = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//set password element to empy string 
var passwordEl ="";
//password length 
var pwdLength=0;
//Variables to  verifywhat options user has chosen
var checkUcaseAlphabet=false;
var checkSpecial =false;
var checkLcaseAlphabet= false;
var checkNumeric =false;
// Number of character type  choices 
var numberOfSelections =0;

//A  temp string to store the character strings that user has selected
var charArray ="";

//Function to get the length of password from user  
var getPasswordLength= function(){
  //Ask for user input
  pwdLength=window.prompt("Please enter a password length greater than 7 and less than 129");

  // Check if its a number
  if ((isNaN(pwdLength)))
  {
      alert("Please input numbers only ");
      getPasswordLength();
      return;
  }
  // Check for negative values and null 
  else if (pwdLength=== null || pwdLength<=0 ) {
    alert("Please enter a valid length");
    getPasswordLength();
    return;
  }
  // Check if  length is in the range of 8-128
  else if (pwdLength < 8 ||  pwdLength >128)
  {
    alert(" Password length must be between 7-129 characters");
    getPasswordLength();
    return;
  }
  // Check if the user input a float value 
  else if (((pwdLength*10)%(Math.floor(pwdLength)*10))!== 0)
  {
    alert("Password length cannot be a float, Please enter a whole number");
      getPasswordLength();
      return;
  }
  
  pwdLength =parseInt(pwdLength);

};

//Function to get user input for  what character types to be included , validate them and generate a pwd.
var charactersToInclude =function(){
  
  // Prompt the sue to check which character type to choose 
  checkUcaseAlphabet = window.confirm("Would you like to include upper case alphabets in your password?");
  checkLcaseAlphabet = window.confirm("Would you like to include lower case alphabets in your password?");
  checkNumeric = window.confirm("Would you like to include numbers in your password ?");
  checkSpecial =window.confirm("Would you like to include special characters in your password?");

  // If the usedr did npot choose any of the types then alert the user 
  if (checkLcaseAlphabet === false && checkUcaseAlphabet===false && checkNumeric===false && checkSpecial ===false){
    alert("The password must include at least one character type");
    charactersToInclude();
    return;
  }
    
  //Check what character types the user has chosen
  //Get the corresponding starting and ending index location in that string.
  // Merge the corresponding strings to a single CharArray . 
  //Increment  Number of selections  value if the user has chosen that character type.
  if(checkUcaseAlphabet){
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

  //Set data types incuded in the password is false 
  var checkedUcase =false;
  var checkedLcase =false;
  var checkedNum =false;
  var checkedSpecial =false;

  // Generate password using for loop from the selecled CharArray 
  //pwdlength-numberofSelections- to reserve the space for  characters type chosen to be included atleast once.
  for(var i=0; i<(pwdLength-numberOfSelections);i++ )
  {
    // Use Math.random() to get the index value 
    var index =parseInt( Math.ceil(Math.random() * (charArray.length-1)));
      // If the selected index is in the range of uppercase alphabets & if it has not been added to password string 
      //and if the user chose this option 
      if ((index>=ucaseStartIndex) && (index<=ucaseEndIndex) && (checkedUcase===false) && checkUcaseAlphabet)
      {
          numberOfSelections-=1; 
          checkedUcase =true;
          //mark it as included 
          
      }
      //Check if index is  in the lower case letters range and user chose the option
      else if((index >=lcaseStartIndex) && (index <=lcaseEndIndex) && (checkedLcase===false) && checkLcaseAlphabet){
        numberOfSelections -=1;
        checkedLcase =true;
        }
      //Check if index is  in the  numeric elemetns range and user chose the option
      else if((index >=numStartIndex) && (index <=numEndIndex) && (checkedNum===false) && checkNumeric){
          numberOfSelections -=1;
          checkedNum =true;

        }
      
      //Check if index is  in the special charcters range and user chose the option
      else if((index >=specialStartIndex)&& (index <=specialEndIndex) && (checkedSpecial===false) &&checkSpecial){
          numberOfSelections -=1;
          checkedSpecial =true;

        }
    // add the character at the corresponding index to a temp variable 
    var alpha = charArray.charAt(index);         
    //Append that to the password string 
    passwordEl += alpha;
  }

  // For the remaining length make sure  a character is included atleast once.
  if ((checkedUcase===false) && checkUcaseAlphabet)
    {
      //Fetch from the uppercase Alphabet  string 
      index= parseInt( Math.ceil(Math.random() * (alphabetArrayUpper.length-1)));
      alpha = alphabetArrayUpper.charAt(index);
      //Append it to password string
      passwordEl+= alpha;
    }
    if ((checkedLcase===false) && checkLcaseAlphabet)
    {
      //Fetch from the lowercase  Alphabet  string 
      index= parseInt( Math.ceil(Math.random() * (alphabetArrayLower.length-1)));
      alpha = alphabetArrayLower.charAt(index);
      //Append it to password string
      passwordEl+= alpha;
    }
    if ((checkedSpecial===false) && checkSpecial)
    {
      //Fetch from the Special Character string  
      index= parseInt( Math.ceil(Math.random() * (specialCharArray.length-1)));
      alpha = specialCharArray.charAt(index);
      //Append it to password string
      passwordEl+= alpha;
    }
    if ((checkedNum===false) && checkNumeric)
    {
      //Fetch from the Numeric  string  
      index= parseInt( Math.ceil(Math.random() * (numericArray.length-1)));
      alpha = numericArray.charAt(index);
      //Append it to password string
      passwordEl+= alpha;
    }

};
 
// Initialize global variables 
var initializeValues =function()
{
  passwordEl="";
  charArray="";
  numberOfSelections =0;
  pwdLength =0;
  checkUcaseAlphabet=false;
  checkSpecial =false;
  checkLcaseAlphabet= false;
  checkNumeric =false;


}
//Generate password function
var generatePassword =function(){
   //Initialize variables 
   initializeValues();
    // Get the password length from user and validate 
    getPasswordLength();
    //Get the characters to be included ,validate and create a string of pwd
    charactersToInclude();
    //return the password string to the calling function.
    return passwordEl;
  
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value="";
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

