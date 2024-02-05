import { GumballMachine } from "./State";

// Client code using the state pattern

const gumballMachine = new GumballMachine(1);
gumballMachine.insertQuarter();
gumballMachine.ejectQuarter();
gumballMachine.turnCrank();

console.log();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log();
gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log();
gumballMachine.refill(2);