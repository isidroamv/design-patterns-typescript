export class MenuItem2 {
    name: string;
    description: string;
    vegetarian: boolean;
    price: number;

    constructor(name: string, description: string, vegetarian: boolean, price: number) {
        this.name = name;
        this.description = description;
        this.vegetarian = vegetarian;
        this.price = price;
    }
}

export class DinnerMenuIterator implements Iterator<MenuItem2> {
    private items: MenuItem2[];
    private i: number = 0;

    constructor(items: MenuItem2[]) {
        this.items = items;
    }

    next(): IteratorResult<MenuItem2> {
        if (this.i < this.items.length) {
            return { value: this.items[this.i++], done: false };
        } else {
            return { value: undefined as MenuItem2, done: true };
        }
    }
} 


export class CafeMenuIterator implements Iterator<MenuItem2> {
    private menuItems: { [key: string]: MenuItem2 };
    private i: number = 0;
    private keys: string[];
    constructor(menuItems: { [key: string]: MenuItem2 }) {
        this.menuItems = menuItems;
        this.keys = Object.keys(this.menuItems);
    }
    
    next(): IteratorResult<MenuItem2> {
        if (this.i < this.keys.length) {
            return { value: this.menuItems[this.keys[this.i++]], done: false };
        } else {
            return { value: undefined as MenuItem2, done: true };
        }
    }

    addItem(name: string, item: MenuItem2) {
        this.menuItems[name] = item;
    }
}

export class WaitreesMenu {
    dinnerMenu: DinnerMenuIterator;
    cafeMenu: CafeMenuIterator;

    constructor(dinnerMenu: DinnerMenuIterator, cafeMenu: CafeMenuIterator) {
        this.dinnerMenu = dinnerMenu;
        this.cafeMenu = cafeMenu;
    }

    printMenu() {
        console.log("LUNCH MENU");
        this.printMenuItem(this.dinnerMenu);
        console.log("---------");
        console.log("CAFE MENU");
        this.printMenuItem(this.cafeMenu);
    }

    printMenuItem(iterator: Iterator<MenuItem2>) {
        let menuItem: MenuItem2;
        while ((menuItem = iterator.next().value) !== undefined) {
            console.log(menuItem.name, " - ", menuItem.description);
        }
    }
}

