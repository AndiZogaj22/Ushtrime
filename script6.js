// logical operators




//AND &&
console.log(true && true)  // a eshte true DHE true true po ato jan true 
const test = "this is a test"
console.log(typeof test === "string" && test.length > 50) // true sepse test eshte string


//OR  || 
console.log(true || true)
console.log (false || false )


//NOT !
console.log(test !== "This is a test")


//CONDITIONS

//if 
//else 
let time = 26
if (time < 12){
    console.log("mirmengjes")
}else if (time < 14){
    console.log("miredita")
}else if (time < 25){
    console.log("mirembrema")
}else {
    console.log("gabim")
}

const opendoor = false
if(opendoor){
    console.log("dera hapur")
}else {
    console.log("dera mbyllur")
}

// ternary operator
opendoor
? console.log("dera hapur")
: console.log("dera mbyllur")