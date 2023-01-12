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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

for (const item of menu) {
    // sử dụng được continues cũng như break
    // lỗi lần lặp sẽ lặp qua một phần tử của mảng
    console.log(item);
}
// => Nó không trả về index mà chỉ trả về giá trị của phần tử
// Nếu muốn có cả index và value trong for of thì dùng cách sau:
for (const item of menu.entries()) {
    const [stt, value] = item;
    console.log(`${stt+1}: ${value}`);
    // Lúc này mỗi item sẽ là một mảng riêng với 2 phần tử là index và value
}
// for (const [i, j] of menu.entries()) {
//     console.log(`${i+1}: ${j}`);
// }

// console.log([...menu.entries()]);

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// Pairs: cặp
// For each: cho từng
// Array Iterator: trình lặp mảng