/* for a given array  with the marks of student 
find average marks of entire class*/

let marks = [85, 97, 44, 37, 76, 60]
let sum = 0

for (let i= 0; i<marks.length; i++) {
    sum = sum + marks[i];
}

let avg = sum/marks.length;
console.log("The average of the entire class is :", avg);