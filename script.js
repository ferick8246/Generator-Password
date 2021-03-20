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
