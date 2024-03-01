/*
Create 3 div with same class name = box and then access them and add some
unique text into each box using javascript only. 
*/
let acc = document.querySelectorAll(".box");
//console.dir(acc);

//acc[0].innerHTML = "This is first box";
//acc[1].innerHTML = "This is second box";
//acc[2].innerHTML = "This is third box";

//another way using loops 

ind=0
for (i of acc){
    i.innerText = `This is ${ind} box`
    ind++;
}