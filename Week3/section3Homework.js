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

function getPizzaOrder(Size, Crust, ...Toppings) {
  let topping = "";
  for (let y = 0; y < pizzaToppings.length; y++) {
    topping += pizzaToppings[y];
    if (y !== pizzaToppings.length - 1) {
      topping += ", ";
    }
  }
  console.log(`One Medium Thin crust pizza with ${topping}...coming up!`);
  return [Size, Crust, Toppings];
}

function preparePizza([Size, Crust, Toppings]) {
  console.log("...Cooking Pizza...");
  const pizza = {
    Size: "Medium",
    Crust: "Thin",
    Toppings: ["Cheese", "Peperoni", "Sausage", "Bacon"]
  };
  return pizza;
}

function servePizza(pizza) {
  const keys = Object.keys(pizza);
  for (let z = 0; z < keys.length; z++) {
    console.log(
      `Order up! Here's your Medium Thin crust pizza with ${
        pizza[keys[2]]
      }. Enjoy!`
    );
  }
}

servePizza(preparePizza(getPizzaOrder(greetCustomer())));
