// This is a comment

const variable = "Hello!";

/*
This is also a comment 
*/
console.log("hello world")

console.log("My Name is Andi Zogaj")


//DATA TYPES NE JAVASCRIPT


//Strings
console.log("Ky esht string".length)
console.log('ky eshte string'.toUpperCase())
console.log(`ky eshte nje stringn`.toLowerCase())
console.log("Ku eshte shkronja e par A ne kete string".indexOf("u"))
console.log("String me slice".slice("5")) 
console.log("String me split".split(""))

//numbers
console.log(155)

console.log(1+2 + "KaterString") //mbledhje numrave + 1 string 

//boolean

console.log(1 > 2)
console.log(155 == 155)

//null and undefined
console.log(undefined)
console.log(null)
//null pa vler
//undefined e pa definuar

//symbols


//typeof
console.log(typeof "qka eshte kjo")


//type coercion (try to avoid them)
console.log("1" + 1)
console.log("12" == 12) //numri 12 string eshte i barabart == me numrin 12 

let a = "1"
console.log(a + 1)
console.log(++a)