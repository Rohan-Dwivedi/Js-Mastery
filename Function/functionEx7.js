/* take a number n form user as an input and
craete a array of number 1 to n
use reduce method to calculate the sum of the array
use reduce method to calculate the product of all number in the array*/

let n = prompt("Enter the number:");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sumAll = arr.reduce((res, cur) => {
  return res + cur;
});

console.log("The sum of the array is:", sumAll);

let mulAll = arr.reduce((res, cur) => {
  return res * cur;
});

console.log("The product of the array is:", mulAll);
