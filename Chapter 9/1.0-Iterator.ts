class MenuItem {
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

export class PancakeHouseMenu {
    menuItems: MenuItem[];
    constructor() {
        this.menuItems = [
            new MenuItem("K&B's Pancake Breakfast", "Pancakes with scrambled eggs, and toast", true, 2.99),
            new MenuItem("Regular Pancake Breakfast", "Pancakes with fried eggs, sausage", false, 2.99),
            new MenuItem("Blueberry Pancakes", "Pancakes made with fresh blueberries", true, 3.49),
            new MenuItem("Waffles", "Waffles, with your choice of blueberries or strawberries", true, 3.59)
        ];
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        this.menuItems.push(new MenuItem(name, description, vegetarian, price));
    }
}

export class DinnerMenu {
    readonly MAX_ITEMS: number = 6;
    private numberOfItems: number = 0;
    menuItems: MenuItem[];

    constructor() {
        this.menuItems = [];
        this.addItem("Vegetarian BLT", "(Fakin') Bacon with lettuce & tomato", true, 2.99);
        this.addItem("BLT", "Bacon with lettuce & tomato", false, 2.99);
        this.addItem("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29);
        this.addItem("Hotdog", "A hot dog, with saurkraut, relish, onions, topped with cheese", false, 3.05);
    }

    addItem(name: string, description: string, vegetarian: boolean, price: number) {
        if (this.numberOfItems >= this.MAX_ITEMS) {
            console.log("Sorry, menu is full!  Can't add item to menu");
        } else {
            this.menuItems[this.numberOfItems++] = new MenuItem(name, description, vegetarian, price);
        }
    }
}
