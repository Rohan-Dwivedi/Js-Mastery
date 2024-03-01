/*
Create a new element button using JS only
bgcolor of red and text color of white 
give it a text of "Click Me"
Add it to the body
*/

let btn = document.createElement("button");
btn.innerHTML = "<i>Click me!</i>";
btn.style.backgroundColor = "red";
btn.style.fontSize = "20px";
btn.style.color = "white";
let script = document.querySelector("script");
script.before(btn);

/*
create a para in html and give it some style in css 

solve using classList not using setAttribute()
*/

let paraClass = document.querySelector(".para")
paraClass.classList.add("newpara")
