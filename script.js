
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
document.getElementById("password").style.textDecorationStyle = "dashed";


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




//This code provides the prompt when you click the "generate password" button
var passwordLength = document.getElementById("password");
var passwordChar = document.getElementById("generate");
var userInput = parseInt ("generate");

document.getElementById("generate").addEventListener ("click", function() {
    prompt("How many characters would you like your password to contain?");
    console.log (passwordLength);
})

var confirmSpecialChar = confirm("Click OK to confirm including special characters.");

var confirmNumericChar = confirm("Click OK to confirm including numeric characters.");

var confirmLowerCase = confirm("Click OK to confirm including lowercase characters.");

var confirmUpperCase = confirm("Click OK to confirm including uppercase characters.");











