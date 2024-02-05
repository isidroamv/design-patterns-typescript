abstract class Dough { }
abstract class Sauce { }
abstract class Cheese { }
abstract class Veggies { }
abstract class Clam { }
class Pepperoni { }

// Dough
class ThinCrustDough extends Dough { }
class ThickCrustDough extends Dough { }

// Sauce
class MarinaraSauce extends Sauce { }
class PlumTomatoSauce extends Sauce { }

// Cheese
class ReggianoCheese extends Cheese { }
class MozzarellaCheese extends Cheese { }

// Clams
class FreshClams extends Clam { }
class FrozenClams extends Clam { }

// Veggies
class Garlic extends Veggies { }
class Onion extends Veggies { }
class Mushroom extends Veggies { }
class RedPepper extends Veggies { }

abstract class PizzaV2 {
    name: String;
    dough: Dough;
    sauce: Sauce;
    veggies: Veggies[];
    cheese: Cheese;
    pepperoni: Pepperoni;
    clam: Clam;

    abstract prepare(): void;

    bake(): void {
        console.log("Bake for 25 minutes at 350");
    }

    cut(): void {
        console.log("Cutting the pizza into diagonal slices");
    }

    box(): void {
        console.log("Place pizza in official PizzaStore box");
    }
}

abstract class IngredientFactory {
    abstract createDough(): Dough;
    abstract createSauce(): Sauce;
    abstract createCheese(): Cheese;
    abstract createVeggies(): Veggies[];
    abstract createPepperoni(): Pepperoni;
    abstract createClam(): Clam;
}

class NYPizzaIngredientFactory extends IngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }
    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper() ];
    }
    createPepperoni(): Pepperoni {
        return new Pepperoni();
    }
    createClam(): Clam {
        return new FreshClams();
    }
}

class CheesPizza extends PizzaV2 {
    ingredientFactory: IngredientFactory;
    constructor (ingredientFactory: IngredientFactory) {
        super();
        this.name = "Cheese";
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}

class ClamPizza extends PizzaV2 {
    ingredientFactory: IngredientFactory;
    constructor (ingredientFactory: IngredientFactory) {
        super();
        this.name = "Clam";
        this.ingredientFactory = ingredientFactory;
    }

    prepare(): void {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.clam = this.ingredientFactory.createClam();
    }
}

class PepperoniPizza extends PizzaV2 {
    ingredientFactory: IngredientFactory;
    constructor (ingredientFactory: IngredientFactory) {
        super();
        this.name = "Pepperoni";
        this.ingredientFactory = ingredientFactory;
    }
    prepare(): void {
        console.log("Preparing " + this.name);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}

abstract class PizzaStoreV2 {
    abstract createPizza(type: string): PizzaV2;
    order(type: string): PizzaV2 {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}

export class NYPizzaStoreV2 extends PizzaStoreV2 {
    createPizza(type: string): PizzaV2 {
        const ingredientFactory = new NYPizzaIngredientFactory();
        if (type === "cheese") {
            return new CheesPizza(ingredientFactory);
        } else if (type === "veggie") {
            return new ClamPizza(ingredientFactory);
        } else if (type === "pepperoni") {
            return new PepperoniPizza(ingredientFactory);
        }
        throw new Error("Invalid pizza type");
    }
}