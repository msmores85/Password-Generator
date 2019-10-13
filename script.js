
//This code is to create the background color: 
document.body.style.backgroundColor = "#E8E8E8";
//This code centers the "Password Generator" h1 tag
document.body.children[0].style.textAlign = "center";

//This code is to create the light gray box for the h1 heading section: 
document.getElementById("container").style.backgroundColor = "#F8F8FF";
document.getElementById("container").style.height = "400px";
document.getElementById("container").style.width = "700px";
document.getElementById("container").style.padding = "10px";
document.getElementById("container").style.margin = "50px";
//Code to create rounded edges for the border from: https://www.w3schools.com/css/css3_borders.asp
document.getElementById("container").style.borderRadius = "15px";


//This code is to create the h2 header section (in white):
document.getElementById("container2").style.backgroundColor ="white";
//Code to create rounded edges for the border from: https://www.w3schools.com/css/css3_borders.asp
document.getElementById("container2").style.borderRadius = "15px";



//This code is for the text box for the password generator: 
document.getElementById("password").style.objectFit = "cover";
//Code to not allow user to resize the password box from: https://www.w3schools.com/cssref/css3_pr_resize.asp
document.getElementById("password").style.resize = "none";
document.getElementById("password").style. height = "150px";
document.getElementById("password").style.width = "500px";
document.getElementById("password").style.border = "dashed 1px";


//This code is for the generate password button style
document.getElementById("generate").style.backgroundColor = "#B22222";
document.getElementById("generate").style.color = "white";
document.getElementById("generate").style.borderRadius = "20px";
document.getElementById("generate").style.padding = "15px";
document.getElementById("generate").style.fontSize = "20px";


//This code is for the copy to clipboard button style
document.getElementById("copy").style.backgroundColor = "#BAB5B4";
document.getElementById("copy").style.color = "white";
document.getElementById("copy").style.borderRadius = "20px";
document.getElementById("copy").style.padding = "15px";
document.getElementById("copy").style.fontSize = "20px";


//         END of background & font styling




var passwordArea = document.getElementById("password");
var passwordButton = document.getElementById("generate");


//This code provides the prompts when you click the "generate password" button and writes the responses into the console in the inspector.


//The following function is used to create the password based on the number of characters requested by the user
function passGen(length) {
    //The following are variables for the function:
    var specialChar = "`~!@#$%^&*()_+-=[]\{}|;':\",./<>?";
    var numericChar = "0123456789";
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";
    var emptyArray = [];

    var userInput = parseInt(prompt ("How many characters would you like your password to contain?"));
    console.log(passGenLength);

//The following are conditions for the user input to be confirmed by the user. 
if (!userInput) {
    alert("You must enter a number.");
} else if (userInput < 8) {
    alert("Your password must be at least 8-128 characters long.");
} else {
    var confirmSpecialChar = confirm("Click OK to confirm including special characters.");
    var confirmNumericChar = confirm("Click OK to confirm including numeric characters.");
    var confirmLowercaseChar = confirm("Click OK to confirm including lowercase characters.");
    var confirmUppercaseChar = confirm("Click OK to confirm including uppercase characters.");
}


//The following are conditions to push the variables made up of the special characters, numeric characters, lowercase characters, and uppercase characters into the empty array. 
//The user input will establish which strings get pushed into the empty array to be used for the password-generator. 
if (confirmSpecialChar) { 
    emptyArray.push(specialChar);
}

if(conformNumericChar) {
    emptyArray.push(numericChar);
}

if(confirmLowercaseChar) {
    emptyArray.push(lowercaseChar);
}

if (confirmUppercaseChar) {
    emptyArray.push(uppercaseChar);
}

//The following for loop begins the index at 0, the first placement.
//Then, it threads through that length along the index using the Math.floor and Math.random to pull numbers from the index to put them into a new empty array 
for (var i = 0; i < length; i++) {
    var arrayChar1 = Math.floor(Math.random() * emptyArray.length);
    var arrayChar2 = Math.floor(Math.random() * emptyArray[arrayChar1].length)
    password += emptyArray[arrayChar1].charAt(arrayChar2);
    console.log("for loop forArray: ", emptyArray[i]);
    
function populateForm(passGenLength) {
    document.pgenerate.output.value = generatepass(emptyArrayLength);
}

}

return password

var generateButton = document.getElementById("generate");
generateButton.addEventListener("click", passGen);

}










             
             /*function populateForm(enterLength) {
                 document.pgenerate.output.value = generatepass(enterLength);
             }
             
             
             
             
             function generatePassword() {
                 var length = 0-128;
                 charset = "abcdefghijklmnopqrstuvwxyz123456789";
                 retVal = "";
                 for (var i = 0, n = charset.length; i <= length; i++) {
                     retVal += charset.charAt(Math.floor(Math.random() * n));
                 }
                 return retVal;
             }
             
         }
     }
/*

var keylist = "abcdefghijklmnopqrstuvwxyz";
var temp = " ";

function generatePass (plength) {
    temp = " "
    for (i = 0; i < plength; i++)
        temp += keylist.charAt(Math.floor(Math.random()*keylist.length))
    return temp
}

function populateForm(enterLength) {
    document.pgenerate.output.value = generatepass(enterLength);
}




function generatePassword() {
    var length = 0-128;
    charset = "abcdefghijklmnopqrstuvwxyz123456789"; 
    retVal = "";
    for (var i = 0, n = charset.length; i <= length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
*/






