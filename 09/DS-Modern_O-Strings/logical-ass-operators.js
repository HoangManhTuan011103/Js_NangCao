// Toán tử gán logic
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
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }

};
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
};
const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// 1) OR assignment operator
// rest1.numGuests = rest1.numGuests || 10; // return truthy value
// rest2.numGuests = rest2.numGuests || 10; // return truthy value

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// 2) nullish assignment operator  (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>'; // return falsy value
// => Nếu thuộc tính không có và không tồn tại nó sẽ khởi tạo giá trị là undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; // return falsy value

// 3) AND assignment operator
// rest1.owner &&= '<ANONYMOUS>';
// => Trong trường hợp dùng cách này thì
// => Nếu thuộc tính không có và không tồn tại nó sẽ bị ẩn đi
// rest2.owner &&= '<ANONYMOUS>';


console.log(rest1);
console.log(rest2);