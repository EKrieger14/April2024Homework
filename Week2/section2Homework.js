let pizzaPlace = "Ethan's Pizza Place";
console.log(pizzaPlace, typeof pizzaPlace);

let numberOfToppings = 8;
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`At Ethan's Pizza Place, we have 8 toppings.`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Bonus Challenge
for (let i = 1; i <= 8; i++) {
  console.log(i);
}
