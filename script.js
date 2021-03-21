// Assignment Code
 var generateBtn = document.querySelector("#generate");
 var newPasskey = document.querySelector("#password");

function generatePssword () {

 

  // Window prompts that set criteria for password
  
  var length = parseInt(window.prompt("Password length? (from 8 to 128)"));
  
  if (isNaN(length)){
  
    alert("Password length must be a number.");
  
    return("Bad input. Password not generated. ");}
  
   
  
  var lower= window.confirm("Do you want lower case letters letters?");
  
  var upper= window.confirm("Do you want upper case letters letters?");
  
  var numeric= window.confirm("Do you want numbers?");
  
  var symbol= window.confirm("Do you want special characters?");

  // Check to see if the user chose at least one character type to be included into the password.

if ((lower === false) &&

   (upper === false) &&

   (numeric === false) &&

   (symbol === false)){

       alert("At least one character type must be chosen for password!");

       return ("Bad input. Password not generated.")}

       let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"

       let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
       
       let numericalCharacters = "0123456789"
       
       let spacialCharacters= "~!@#$%^&*_’?><*-/"
       
       let availableCharacters = "";
       
       let countofPswshar= 0;
       
       let password= "";


if (lower === true){

  availableCharacters += lowerCaseCharacters;
  
  password += lowerCaseCharacters[ Math.floor (Math.random() * lowerCaseCharacters.length)];
  
  countofPswchar ++};

if (upper === true){

    availableCharacters += upperCaseCharacters;
    
    password += upperCaseCharacters[ Math.floor (Math.random() * upperCaseCharacters.length)];
    
    countofPswchar ++
  };

if (numeric === true){

      availableCharacters += numericalCharacters;
      
      password += numericalCharacters[ Math.floor (Math.random() * numericalCharacters.length)];
      
      countofPswchar ++
};
      
if (symbol === true){
      
      availableCharacters += specialCaseCharacters;
      
      password += specialCharacters[ Math.floor (Math.random() * specialCharacters.length)];
      
      countofPswchar ++
};

// Generate the rest of the word

for (var countofPswchar; countofPswchar < length; countofPswchar++) {

  password += availableCharacters [ Math.floor(Math.random() * availableCharacters.length)]
};

return password

};

//write password to the #password input 

function writePassword() {

  var password = generatePssword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password

};

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);