// Same as file functionEx4.js but have to write using arrow function;

let countVowels = () => {
  let str = prompt("Enter a string:");
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
};

console.log("The no of vowels are in string are:", countVowels());
