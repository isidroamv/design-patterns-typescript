import { ChocolateBoiler } from "./Singleton";

// Singleton Pattern example
const boiler = ChocolateBoiler.getInstance();
boiler.fill();
boiler.boil();
boiler.drain();

if (boiler === ChocolateBoiler.getInstance()) {
    console.log("Singleton works, both variables contain the same instance.");
}