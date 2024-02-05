import { ChicagoPizzaStore, NYPizzaStore } from "./FactoryMethod";
import { NYPizzaStoreV2 } from "./AbstractFactory";

// Factory method pattern example
const nyPizza = new NYPizzaStore();
const chicagoPizza = new ChicagoPizzaStore();

let pizza = nyPizza.order("cheese");
console.log("Ethan ordered a " + pizza.name + "\n");

pizza = chicagoPizza.order("veggie");
console.log("Ethan ordered a " + pizza.name + "\n");



// Abstract Factory pattern example
const nyPizzaStore = new NYPizzaStoreV2();
nyPizzaStore.order("pepperoni");