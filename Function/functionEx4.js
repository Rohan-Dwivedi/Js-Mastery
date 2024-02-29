/* Create a function using the "Function" keyword that takes 
a string as an argument and returns the no of vovels in it*/

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

let s = prompt("Enter a string:");
console.log("The no of vowels are in string are:", countVowels(s));
