// Assignment Code
var generateBtn = document.querySelector("#generate"); //reutrns the first element that matches a specified CSS selector in document

var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n,","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var num = ["1","2","3","4","5","6","7","8","9","0"];
var spec = [" ","!", '"',"#","$","%","&","'", "(", ")","*","+",",",".","/",":",";","<","=",">","?","@","[", '\'',"]","^","_","`","{","|","}","~"];

var chooseLength = "";
var chooseCap = "";
var chooseLow = "";
var chooseNum = "";
var chooseSpec = "";

// Write password to the #password input
function passOptions () {
  chooseLength = parseInt(window.prompt("Choose password length. Length should be between 8 and 128 character."));
  if (Number.isNaN(chooseLength)) { //Check if length is a number
    alert("Password length must be a number.");
    passOptions();
  }
  else if (chooseLength < 8 || chooseLength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    passOptions();
  } else {

    chooseCap = confirm("Do you want capital letters?");
    chooseLow = confirm("Do you want lowercase letters?");
    chooseNum = confirm("Do you want numbers?");
    chooseSpec = confirm("Do you want special characters?");

    if ((chooseCap == false) && (chooseLow == false) && (chooseNum == false) && (chooseSpec == false)) {
      alert("You must select from at least one of the criteria.") //Makes sure at least one option is checked
      passOptions();
    }
  }
};
  

function generatePassword() {
  
  passOptions();
  var possible = []; // might be in final result
  var actual = []; //garauntee to be in final result
  if (chooseCap) {
    var capRando = upper[Math.floor(Math.random()*(upper.length-1))];
    actual.push(capRando);
    possible = possible.concat(upper);
  }
  if (chooseLow) {
    var lowRando = lower[Math.floor(Math.random()*(lower.length-1))];
    actual.push(lowRando);
    possible = possible.concat(lower);
  }
  if(chooseNum) {
    var numRando = num[Math.floor(Math.random()*(num.length-1))];
    actual.push(numRando);
    possible = possible.concat(num);
  }
  if(chooseSpec) {
    var specRando = num[Math.floor(Math.random()*(num.length-1))];
    actual.push(specRando);
    possible = possible.concat(spec);
  }


  var result = chooseLength - actual.length; //account for remaining characters

  for (var i = 0; i < result; i++) { //loops through all randomly selected criteria
    var loopRando = Math.floor(Math.random()*(possible.length - 1))
    var choosenOne = possible[loopRando];
    actual.push(choosenOne);
  }

  return actual.join(""); //Returns as string
};  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
