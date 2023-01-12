const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    }
};
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelevery: function({ starterIndex = 1, mainIndex = 0, time = '20:00', addess }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addess} at ${time}`);
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // Log ra 1 mảng key của object openingHours

let openStr = `We are open ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);


// Property VALUES
const value = Object.values(openingHours);
console.log(value);

// Entrie objetct
const entries = Object.entries(openingHours);
// console.log(entries);
for (const key of entries) {
    console.log(key);
}
for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close} `);
}