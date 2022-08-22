// LOOPS 


//for loops

for( let i = 99;i > 0 ;  i--) {
    console.log(`${i} bottles of beer avalible 
  i will take one now there are ${i - 1}
    `)
}

//qito duhet shum mi ushtru *_*

//while loops

let counter = 0

while ( counter < 3 ){
  console.log(`im counting and i've got to ${counter}`)
  counter++
}

let lives = 3
while (lives < 3){
  const result = prompt (`you have ${lives} lives left `)
}if (result !== "4"){
  lives--
}
console.log("you are dead")

//dertya me for loop
for (let i = 99; i > 0; i--) {
  console.log(`${i} bottles of brew on the wall
    ${i} bottles of brew!
    Take one down and pass it around -
    ${i - 1} bottles of brew on the wall!`);
}

//detyra me while loop
let live = 3;

while (live > 0) {
  let result = prompt(`You have ${live} lives left. What is 2+2?`);
  if (result !== "4") {
    live--;
    console.log("I'm afraid that's not right - try again");
  } else {
    console.log("Congratulations! That's the correct answer.");
    break;
  }
}
console.log("Game Over!");


//for of loop 

let originalPoem = `This little piggy went to market, this little piggy stayed home, this little piggy had roast beef, and this little piggy had none, and this little piggy cried “Wee! Wee! Wee!” all the way home!`;

for (const element of originalPoem) {
  if (element == ",") {
    spacedPoem += `\n`;
  } else {
    spacedPoem += element;
  }
}
console.log(spacedPoem);
