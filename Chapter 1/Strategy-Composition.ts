interface FlyBehavior {
    fly(): void;
}

interface QuackBehavior {
    quack(): void;
}

class FlyWithWings implements FlyBehavior {
    fly(): void {
        console.log("I'm flying!!");
    }
}

export class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("I can't fly :(");
    }
}

class FlyRocketPowered implements FlyBehavior {
    fly(): void {
        console.log("I'm flying with a rocket!");
    }
}

interface QuackBehavior {
    quack(): void;
}

class Quack implements QuackBehavior {
    quack(): void {
        console.log("Quack");
    }
}

class MuteQuack implements QuackBehavior {
    quack(): void {
        console.log("<< Silence >>");
    }
}

class Squeak implements QuackBehavior {
    quack(): void {
        console.log("Squeak");
    }
}

abstract class Duck {
    private _flyBehavior: FlyBehavior;
    private _quackBehavior: QuackBehavior;
    abstract swim(): void;
    abstract display(): void;
    abstract performFly(): void;
    abstract performQuack(): void;
    set flyBehavior(fb: FlyBehavior) {
        this._flyBehavior = fb;
    }
    get flyBehavior(): FlyBehavior {
        return this._flyBehavior;
    }
    set quackBehavior(qb: QuackBehavior) {
        this._quackBehavior = qb;
    }
    get quackBehavior(): QuackBehavior {
        return this._quackBehavior;
    }

}

export class RuberDuck extends Duck {
    constructor() {
        super();
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Squeak();
    }
    swim(): void {
        console.log("Swimming");
    }
    display(): void {
        console.log("I'm a rubber duck!");
    }
    performFly(): void {
        this.flyBehavior.fly();
    }
    performQuack(): void {
        this.quackBehavior.quack();
    }
}