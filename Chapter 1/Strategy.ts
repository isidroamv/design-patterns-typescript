interface WeaponBehavior {
    useWeapon(): void;
}

class KnifeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("I'm using a knife");
    }
}

export class SwordBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("I'm using a sword");
    }
}

class AxeBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("I'm using an axe");
    }
}

class BowAndArrowBehavior implements WeaponBehavior {
    useWeapon(): void {
        console.log("I'm using a bow and arrow");
    }
}

class Character {
    private _weapon: WeaponBehavior;
    fight(): void {
        this.weapon.useWeapon();
    }
    set weapon(wb: WeaponBehavior) {
        this._weapon = wb;
    }
    get weapon(): WeaponBehavior {
        return this._weapon;
    }
}

export class King extends Character {
    constructor() {
        super();
        this.weapon = new KnifeBehavior();
    }
}

class Queen extends Character {
    constructor () {
        super();
        this.weapon = new BowAndArrowBehavior();
    }
}

class Troll extends Character {
    constructor() {
        super();
        this.weapon = new AxeBehavior();
    }
}

class Knight extends Character {
    constructor() {
        super();
        this.weapon = new SwordBehavior();
    }
}