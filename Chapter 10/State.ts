abstract class State {
    protected gumballMachine: GumballMachine;

    insertQuarter(): void {};
    ejectQuarter(): void {};
    turnCrank(): void {};
    dispense(): void {};
    refill(): void {};

    constructor(gumballMachine: GumballMachine) {
        this.gumballMachine = gumballMachine;
    }
}

export class GumballMachine {
    public soldOutState: State;
    public noQuarterState: State;
    public hasQuarterState: State;
    public soldState: State;
    public winnerState: State;
    public count: number;


    private _state: State;

    constructor(count: number) {
        this.soldOutState = new SoldOutState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.hasQuarterState = new HasQuarterState(this);
        this.soldState = new SoldState(this);

        this.count = count;
        if (count > 0) {
            this._state = this.noQuarterState;
        } else {
            this._state = this.soldOutState;
        }
    }

    setState(state: State) {
        this._state = state;
    }

    insertQuarter() {
        this._state.insertQuarter();
    }

    ejectQuarter() {
        this._state.ejectQuarter();
    }

    turnCrank() {
        this._state.turnCrank();
        this._state.dispense();
    }

    releaseBall() {
        console.log("A gumball comes rolling out the slot...");
        if (this.count > 0) {
            this.count = this.count - 1;
        }
    }

    refill(count: number) {
        this.count += count;
        this._state.refill();
    }
}

class NoQuarterState extends State {
    insertQuarter(): void {
        console.log("You inserted a quarter");
        this.gumballMachine.setState(this.gumballMachine.hasQuarterState);
    }
}

class HasQuarterState extends State {
    insertQuarter(): void {
        console.log("You can't insert another quarter");
    }
    ejectQuarter(): void {
        console.log("Quarter returned");
        this.gumballMachine.setState(this.gumballMachine.noQuarterState);
    }
    turnCrank(): void {
        console.log("You turned...");
        const winner = Math.floor(Math.random() * 10);
        if (winner == 0 && this.gumballMachine.count > 1) {
            this.gumballMachine.setState(this.gumballMachine.winnerState);
        } else {
            this.gumballMachine.setState(this.gumballMachine.soldState);
        }
    }
}
class SoldState extends State {
    insertQuarter(): void {
        console.log("Please wait, we're already giving you a gumball");
    }
    ejectQuarter(): void {
        console.log("Sorry, you already turned the crank");
    }
    turnCrank(): void {
        console.log("Turning twice doesn't get you another gumball!");
    }
    dispense(): void {
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.count > 0) {
            this.gumballMachine.setState(this.gumballMachine.noQuarterState);
        } else {
            console.log("Oops, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.soldOutState);
        }
    }
}
class SoldOutState extends State {
    insertQuarter(): void {
        console.log("You can't insert a quarter, the machine is sold out");
    }
    ejectQuarter(): void {
        console.log("You can't eject, you haven't inserted a quarter yet");
    }
    turnCrank(): void {
        console.log("You turned, but there are no gumballs");
    }
    dispense(): void {
        console.log("No gumball dispensed");
    }

    refill() {
        console.log("The machine is now refill");
        this.gumballMachine.setState(this.gumballMachine.noQuarterState);
    }
}

class WinnerState extends State {
    dispense(): void {
        console.log("YOU'RE A WINNER! You get two gumballs for your quarter");
        this.gumballMachine.releaseBall();
        if (this.gumballMachine.count > 0) {
            this.gumballMachine.setState(this.gumballMachine.noQuarterState);
        } else {
            console.log("Oops, out of gumballs!");
            this.gumballMachine.setState(this.gumballMachine.soldOutState);
        }
    }
}
