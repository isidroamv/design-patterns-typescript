import { PancakeHouseMenu, DinnerMenu } from "./1.0-Iterator";
import { DinnerMenuIterator, CafeMenuIterator, MenuItem2, WaitreesMenu } from "./1.1-Iterator";
import { Waitress, Menu, MenuItem3 } from "./1.2-Composite";


// Incorrect implementation of the iterator pattern
const launchMenu = new PancakeHouseMenu();
const breakFastItem = launchMenu.menuItems;

const dinnerMenu = new DinnerMenu();
const dinnerItem = dinnerMenu.menuItems;

for (let i = 0; i < breakFastItem.length; i++) {
    console.log(breakFastItem[i].name);
}

for (let i = 0; i < dinnerItem.length; i++) {
    console.log(dinnerItem[i].name);
    console.log(dinnerItem[i].name);
}

console.log(" ");
console.log("========================================== ");
console.log(" ");

// Correct implementation of the iterator pattern
const menu1 = new DinnerMenuIterator([
    new MenuItem2("Vegetarian BLT", "(Fakin') Bacon with lettuce & tomato", true, 2.99),
    new MenuItem2("BLT", "Bacon with lettuce & tomato", false, 2.99),
]);

const menu2 = new CafeMenuIterator({
    breakfast: new MenuItem2("Pancakes", "Pancakes with scrambled eggs, and toast", true, 2.99),
    lunch: new MenuItem2("Soup of the day", "Soup of the day, with a side of potato salad", false, 3.29),
});

const menu = new WaitreesMenu(menu1, menu2);
menu.printMenu();


console.log(" ");
console.log("========================================== ");
console.log(" ");

// Client code, using the composite design pattern with submenus

const pancakeHouseMenu = new Menu("PANCAKE HOUSE MENU", "Breakfast");
const dinerMenu = new Menu("DINER MENU", "Lunch");
const cafeMenu = new Menu("CAFE MENU", "Dinner");
const dessertMenu = new Menu("DESSERT MENU", "Dessert of course!");

const allMenus = new Menu("ALL MENUS", "All menus combined");
allMenus.add(pancakeHouseMenu);
allMenus.add(dinerMenu);
allMenus.add(cafeMenu);


dinerMenu.add(new MenuItem3("Pasta", "Spaghetti with Marinara Sauce, and a slice of sourdough bread", true, 3.89));
dessertMenu.add(new MenuItem3("Apple Pie", "Apple pie with a flakey crust, topped with vanilla ice cream", true, 1.59));
dinerMenu.add(dessertMenu);

const waitress = new Waitress(allMenus);
waitress.printMenu();
