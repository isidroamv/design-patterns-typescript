import { King, SwordBehavior } from "./Strategy";
import { RuberDuck, FlyNoWay } from "./Strategy-Composition";

// Strategy and Composition Pattern example
const d = new RuberDuck();
// Use Composition Pattern implemented in the Duck class to perform behavior
d.performFly(); // Output: "I'm flying with a rocket!"
d.performQuack(); // Output: "Quack"

// Use Strategy Pattern to change behavior
d.flyBehavior = new FlyNoWay();
d.performFly(); // Output: "I can't fly :("



// Strategy Pattern example
const k = new King();
k.fight(); // Output: "I'm using a knife"

k.weapon = new SwordBehavior();
k.fight(); // Output: "I'm using a sword"