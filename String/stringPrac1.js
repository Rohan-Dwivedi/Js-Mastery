// prompt the user to enter their username and write a program to return @+Username+username.length
// eg username= Rohan then return @Rohan5

let userName = prompt("Enter your name for username:")
let len = userName.length
let final =  "@" + userName + len
console.log("Your UserName is :",final);