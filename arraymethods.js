//ARRAY METHODS

const colorArray =[
    "red",
    "yellow",
    "green",
    "brown",
    "orange",
    "purple",
    "gold",
    "red"
]

//splice
console.log(colorArray,colorArray.splice(colorArray.length - 1))

//slice
console.log(colorArray.slice(1,3)) //fille te 1 dhe mbaro te 3

//concat
console.log(colorArray.concat(["black","pink" ,"white"]))

//indexof
console.log(colorArray.indexOf("red",1))

//lastindexof
console.log(colorArray.lastIndexOf("red",6))

//includes
console.log(colorArray.includes("red",2))

//reverse
console.log(colorArray.reverse("red",))

//join
console.log(`my favorite colors are ${colorArray.join("and")}.`)

//split
console.log("how i love to eat pizza".split(""))



//assingment
let originalPoem = `This little piggy went to market this little piggy stayed home this little piggy had roast beef and this little piggy had none and this little piggy cried "Wee! Wee! Wee!" all the way home!`;

let arrayedPoem = originalPoem.split(" ");

console.log(arrayedPoem.indexOf("piggy"));

console.log(arrayedPoem.lastIndexOf("cried"));

console.log(arrayedPoem.indexOf("cried"));

console.log(arrayedPoem.lastIndexOf("all"));

let poemQuote = arrayedPoem.slice(28, 31)

console.log(poemQuote);

console.log(arrayedPoem.indexOf("and"));

console.log(arrayedPoem.splice(17, 1));
console.log(arrayedPoem.join(" "));

console.log(arrayedPoem.concat("The", "End"));

let MaxOrders = 6
for(let i = 5;MaxOrders < i;MaxOrders++){
  console.log(`mundesi per me marr ${MaxOrders} orders`)
}


let porosit = 11

if(porosit > 10){
    console.log("max porosit")
}else if (porosit < 10){
    console.log("ka vend")
}