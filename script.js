


//Exercise 1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let indexOfBanana=fruits.indexOf("Banana");
fruits.splice(indexOfBanana,1);
console.log(fruits);
fruits.sort();
fruits.push("Kiwi") 
fruits.shift();
fruits.reverse();
console.log(fruits);





//Exercise 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);
