export enum Size {
    TALL = "TALL",
    GRANDE = "GRANDE",
    VENTI = "VENTI",
}

export abstract class Beverage {
    name: string;
    private _size: Size;
    abstract get description(): string;
    abstract get cost(): number;
    get size(): Size {
        return this._size;
    }
    set size(s: Size) {
        this._size = s;
    }
}

export class HouseBlend extends Beverage {
    get description(): string {
        return "House Blend Coffee";
    }
    get cost(): number {
        return 0.89;
    }
}

class DarkRoast extends Beverage {
    get description(): string {
        return "Dark Roast Coffee";
    }
    get cost(): number {
        return 0.99;
    }
}

export class Decaf extends Beverage {
    get description(): string {
        return "Decaf Coffee";
    }
    get cost(): number {
        return 1.05;
    }
}

export class Espresso extends Beverage {
    get description(): string {
        return "Espresso";
    }
    get cost(): number {
        return 1.99;
    }
}

abstract class CondimentDecorator extends Beverage {
    beverage: Beverage;

    get description(): string {
        return this.beverage.description + ", " + this.name;
    }

}

export class Milk extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.name = "Milk";
        this.beverage = beverage;
    }

    get cost(): number {
        let price = 0;
        if (this.beverage.size === Size.TALL) {
            price = 0.10;
        } else if (this.beverage.size === Size.GRANDE) {
            price = 0.15;
        } else if (this.beverage.size === Size.VENTI) {
            price = 0.20;
        }
        return this.beverage.cost + price;
    }
}

export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.name = "Mocha";
        this.beverage = beverage;
    }

    get cost(): number {
        let price = 0;
        if (this.beverage.size === Size.TALL) {
            price = 0.11;
        } else if (this.beverage.size === Size.GRANDE) {
            price = 0.15;
        } else if (this.beverage.size === Size.VENTI) {
            price = 0.20;
        }
        return this.beverage.cost + price;
    }
}

export class Soy extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.name = "Soy";
        this.beverage = beverage;
    }

    get cost(): number {
        let price = 0;
        if (this.beverage.size === Size.TALL) {
            price = 0.12;
        } else if (this.beverage.size === Size.GRANDE) {
            price = 0.15;
        } else if (this.beverage.size === Size.VENTI) {
            price = 0.20;
        }
        return this.beverage.cost + price;
    }
}

export class Whip extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super();
        this.name = "Whip";
        this.beverage = beverage;
    }

    get cost(): number {
        let price = 0;
        if (this.beverage.size === Size.TALL) {
            price = 0.13;
        } else if (this.beverage.size === Size.GRANDE) {
            price = 0.15;
        } else if (this.beverage.size === Size.VENTI) {
            price = 0.20;
        }
        return this.beverage.cost + price;
    }
}