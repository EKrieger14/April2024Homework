const pizzaToppings = ["Cheese", "Pepperoni", "Sausage", "Bacon"];

function greetCustomer() {
  console.log("Welcome to the Pizza Parlor, our toppings are:");
  for (let x = 0; x < pizzaToppings.length; x++) {
    if (x === pizzaToppings.length - 1) {
      console.log(pizzaToppings[x]);
    } else {
      console.log(pizzaToppings[x] + ", ");
    }
  }
}
greetCustomer();

function getPizzaOrder(Size, Crust, ...Toppings) {
  console.log(
    `One ${Size} ${Crust} crust pizza with ${Toppings}... coming up!`
  );
  return ["Size", "Crust", "Toppings"];
}

function preparePizza([Size, Crust, Toppings]) {
  console.log("...Cooking Pizza...");
  const pizza = {
    Size: "Medium",
    Crust: "Thin",
    Toppings: "Bacon"
  };
  return pizza;
}

function servePizza(pizza) {
  console.log(
    `Order up! Here's your ${pizza.Size} ${pizza.Crust} crust pizza with ${pizza.Toppings}. Enjoy!`
  );
  return pizza;
}

servePizza(preparePizza(getPizzaOrder("Medium", "Thin", "Bacon")));
