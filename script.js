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
