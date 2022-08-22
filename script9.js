// Arrays

const newArray = ["hello", 123, true,Symbol]
console.log(newArray[0])

//we count things from 0 in arrays 0, 1 , 2, 3 etj

//indexi na tregon cilen sen dojna me accses nese eshte 1 ather eshte 123

console.log(newArray[3])

const arrayTwo = ["blue","red","green"[1,2,3]]

console.log(arrayTwo[1][2])


const queue = ["alex","jane","charlie"]

//Array methods
//push
queue.push("katty") //shton nje vler ne array
//pop
queue.pop() //e hek vleren e fundit ne array
//shift
queue.shift() //hek 1 vler  prej fillimi
//unshift
queue.unshift("alice")//shton 1 vler ne fillim te arrayt

//ITERATING ARRAYS
for(let i = 0;i < queue.length;i++){
   console.log (`hello ${queue[i]} ,what can i do for you`)
}

//for of  qikjo ma e mir eshte
for(let person of queue){
    console.log(person)
}

//forEach

queue.forEach(function(person) {
    console.log(person);
});

//assingment
const friends = ["andi", "olsi"]

friends.push("Darius");

friends.unshift("Elizabetha");

friends.pop("Darius")


//assingment 2
/* Write your code here */

let subscriberAge = [16, 22, 38, 45, 33, 17, 27, 55, 17];
let targetAudience = [];

for (let element of subscriberAge) {
  console.log(element);
}
for (let element of subscriberAge) {
  console.log(`Is ${element} larger than 20? Ans:${element > 20}`);
}
for (let element of subscriberAge) {
  if (element > 20) {
    targetAudience.push(element);
  }
  console.log(`Is ${element} larger than 20? Ans:${element > 20} `);
}
console.log(targetAudience);

for (let index = 0; index < subscriberAge.length; index++) {
  console.log(
    `Is ${subscriberAge[index]} larger than 20? Ans: ${
    subscriberAge[index] > 20
    }`
  );
  if (subscriberAge[index] > 20) {
    targetAudience.push(subscriberAge[index]);
  }
}
console.log(targetAudience);

subscriberAge.forEach((item) => {
  if (item > 20) {
    targetAudience.push(item);
  }
});

console.log(targetAudience);




