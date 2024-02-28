let a = 67  // a can be used multipe time as it will not through error
console.log(a)
a = "Rohan"
console.log(a)


// diffrence between let var const

let b = 67
{
    let b = 98
    console.log(b) // 98
}
console.log(b) 


const c = 67
//const c ="Carxy"

console.log(c) // error