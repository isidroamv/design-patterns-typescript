import { HouseBlend, Mocha, Soy, Size, Whip, Beverage } from "./Decorator";

// Decorator Pattern example

let beverage1: Beverage = new HouseBlend(); // Make a HouseBlend object
beverage1.size = Size.TALL;

beverage1 = new Soy(beverage1); // Decorate it Wraping it with Soy
beverage1 = new Soy(beverage1); // Decorate it Wraping it in a second Soy
beverage1 = new Mocha(beverage1); // Decorate it Wraping it with Mocha
beverage1 = new Whip(beverage1); // Decorate it Wraping it with whip

console.log(beverage1.description + " $" + beverage1.cost.toFixed(2));