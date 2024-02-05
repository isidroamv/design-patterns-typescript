abstract class  Menucomponent {
    add(menucomponent: Menucomponent): void {
        throw new Error("Unimplemented");
    }
    remove(menucomponent: Menucomponent): void {
        throw new Error("Unimplemented");
    }
    getChild(i: number): Menucomponent {
        throw new Error("Unimplemented");
    }
    getName(): string {
        throw new Error("Unimplemented");
    }
    getDescription(): string {
        throw new Error("Unimplemented");
    }
    getPrice(): number {
        throw new Error("Unimplemented");
    }
    isVegetarian(): boolean {
        throw new Error("Unimplemented");
    }

    print(): void {
        throw new Error("Unimplemented");
    }
}

export class MenuItem3 extends Menucomponent {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        super();
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }

    print(): void {
        console.log(` ${this.name}, ${this.price}, ${this.vegetarian} -- ${this.description}`);
        console.log(" ");
    }
}

export class Menu extends Menucomponent {
    menuComponents: Menucomponent[];
    name: string;
    description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
        this.menuComponents = [];
    }

    add(menucomponent: Menucomponent): void {
        this.menuComponents.push(menucomponent);
    }

    remove(menucomponent: Menucomponent): void {
        this.menuComponents.splice(this.menuComponents.indexOf(menucomponent), 1);
    }

    getChild(i: number): Menucomponent {
        return this.menuComponents[i];
    }

    print(): void {
        console.log(`${this.name} - (${this.description})`);
        for (let i = 0; i < this.menuComponents.length; i++) {
            this.menuComponents[i].print();
        }
        console.log(" ");
    }
}

export class Waitress {
    allMenus: Menu;

    constructor(allMenus: Menu) {
        this.allMenus = allMenus;
    }

    printMenu(): void {
        this.allMenus.print();
    }
}

