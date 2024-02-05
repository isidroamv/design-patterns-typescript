
abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = [];

    prepare(): void {
        console.log("Preparing " + this.name);
        console.log("Tossing dough...");
        console.log("Adding sauce...");
        console.log("Adding toppings: " + this.toppings.join(", "));
    }

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


abstract class PizzaStore {
    abstract createPizza(type: string): Pizza;
    order(type: string): Pizza {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}


class NYStyleCheesePizza extends Pizza {
    name = "NY Style Sauce and Cheese Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";
    toppings = ["Grated Reggiano Cheese"];
}

class NYStylePepperoniPizza extends Pizza {
    name = "NY Style Sauce and Pepperoni Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";
    toppings = ["Grated Reggiano Cheese", "Sliced Pepperoni", "Garlic", "Onion", "Mushrooms", "Red Peppers"];
}

class NYStyleClamPizza extends Pizza {
    name = "NY Style Sauce and Clam Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";
    toppings = ["Grated Reggiano Cheese", "Fresh Clams from Long Island Sound", "Onion", "Mushrooms", "Red Peppers"];
}

class NYStyleVeggiePizza extends Pizza {
    name = "NY Style Sauce and Veggie Pizza";
    dough = "Thin Crust Dough";
    sauce = "Marinara Sauce";
    toppings = ["Grated Reggiano Cheese", "Fresh Clams from Long Island Sound", "Onion", "Mushrooms", "Red Peppers"];
}

class ChicagoStyleCheesePizza extends Pizza {
    name = "Chicago Style Deep Dish Cheese Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";
    toppings = ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant", "Sliced Pepperoni"];
}

class ChicagoStylePeepperoniPizza extends Pizza {
    name = "Chicago Deep Dish Pepperoni Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";
    toppings = ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant", "Sliced Pepperoni"];
}

class ChicagoStyleCalmPizza extends Pizza {
    name = "Chicago Deep Dish Clam Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";
    toppings = ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant", "Sliced Pepperoni"];
}

class ChicagoStyleVeggiePizza extends Pizza {
    name = "Chicago Deep Dish Veggie Pizza";
    dough = "Extra Thick Crust Dough";
    sauce = "Plum Tomato Sauce";
    toppings = ["Shredded Mozzarella Cheese", "Black Olives", "Spinach", "Eggplant", "Sliced Pepperoni"];
}

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        if (type === "cheese") {
            pizza = new NYStyleCheesePizza();
        } else if (type === "pepperoni") {
            pizza = new NYStylePepperoniPizza();
        } else if (type === "clam") {
            pizza = new NYStyleClamPizza();
        } else if (type === "veggie") {
            pizza = new NYStyleVeggiePizza();
        }
        return pizza;
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza;
        if (type === "cheese") {
            pizza = new ChicagoStyleCheesePizza();
        } else if (type === "pepperoni") {
            pizza = new ChicagoStylePeepperoniPizza();
        } else if (type === "clam") {
            pizza = new ChicagoStyleCalmPizza();
        } else if (type === "veggie") {
            pizza = new ChicagoStyleVeggiePizza();
        }
        return pizza;
    }
}


