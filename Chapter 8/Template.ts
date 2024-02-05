abstract class CaffeineBeverage {
    prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    boilWater(): void {
        console.log("Boiling water");
    }

    pourInCup(): void {
        console.log("Pouring into cup");
    }

    hook(): void {}
}

export class Tea extends CaffeineBeverage {
    brew(): void {
        console.log("Steeping the tea");
    }
    addCondiments(): void {
        console.log("Adding Lemon");
    }

    hook(): void {
        console.log("Serving with Sugar");
    }
}

export class Coffee extends CaffeineBeverage {
    brew(): void {
        console.log("Dripping Coffee through filter");
    }
    addCondiments(): void {
        console.log("Adding Sugar and Milk");
    }
}