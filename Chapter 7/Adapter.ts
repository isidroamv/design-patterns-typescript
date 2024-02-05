interface Duck1 {
    fly(): void;
    quack(): void;
}


export class MallardDuck implements Duck1 {
    fly(): void {
        console.log("I'm flying");
    }
    quack(): void {
        console.log("Quack");
    }
}

interface Turkey {
    gobble(): void;
    fly(): void;
}

export class WildTurkey implements Turkey {
    gobble(): void {
        console.log("Gobble gobble");
    }
    fly(): void {
        console.log("I'm flying a short distance");
    }
}

export class TurkeyAdapter implements Duck1 {
    private _turkey: Turkey;
    constructor(turkey: Turkey) {
        this._turkey = turkey;
    }
    fly(): void {
        this._turkey.fly();
    }
    quack(): void {
        this._turkey.gobble();
    }
}