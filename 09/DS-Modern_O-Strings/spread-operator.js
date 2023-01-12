const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHourse: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        }

    },
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelevery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', addess }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addess} at ${time}`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};
// The spread operator - toán tử trải rộng
// kí hiệu là: dấu ba chấm (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // => trả về một mảng [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
const newArr2 = [1, 2, arr];
// console.log(newArr); // => trả về một mảng [1, 2, 7, 8, 9]
// console.log(newArr2); // => trả về một mảng [1, 2, Array(3)]
// console.log(...newArr); // => trả về một chuỗi 1, 2, 7, 8, 9

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Thêm một phần tử vào mảng
console.log(newMenu);

// => spread operator giúp chúng ta lấy phần tử khỏi mảng

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = "Jonas";
const letters = [...str];
console.log(letters);
console.log(...str);
console.log('j', 'o');
// console.log(`${...str}`); ERROR

// Real-world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, fouder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant };
restaurantCopy.name = "Hoàng Mạnh Tuấn";
console.log(restaurant.name);
console.log(restaurantCopy.name);