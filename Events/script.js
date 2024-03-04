let btn = document.querySelector(".btn");
let body = document.querySelector("body")
let color = "light"

btn.addEventListener("click", ()=>{
    if (color === "light"){
        console.log("Changing to dark");
        color = "dark"
        body.style.backgroundColor="black"
    }else{
        console.log("Changing to light");
        color ="light"
        body.style.backgroundColor="white"
    }
})