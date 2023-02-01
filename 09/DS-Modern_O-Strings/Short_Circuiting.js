// Short_circuiting
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

// Các giá trị được coi là falsy
// => false, 0, '' hay "",null,undefined,NaN

// Các giá trị được coi là truthy
// => Còn lại


// &&
// the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions
// => trong trường hợp AND, biểu thức được đánh giá cho đến khi chúng ta nhận được một kết quả sai vì kết quả sẽ luôn sai, không phụ thuộc vào các điều kiện khác
// => Nếu có một biểu thức với && và chính toán hạng đầu tiên là sai thì sẽ xảy ra hiện tượng short circuiting ( đoản mạch ), biểu thức tiếp theo không được đánh gía và trả về giá trị sai

// Since first operand is false and operator
// is AND, Evaluation stops and false is
// returned.
console.log(false && true && true && false);

// Whole expression will be evaluated.
// Toàn bộ biểu thức sẽ được đánh giá 
console.log(true && true && true);

// Pracrical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');





// ||
// Trong trường hợp OR, biểu thức được đánh giá cho đến khi chúng ta nhận được một kết quả đúng vì kết quả sẽ luôn đúng, không phụ thuộc vào các điều kiện khác.
// Nếu có 1 biểu thức với || và chính toán hạng đầu tiên là true, thì xảy ra đoản mạch, quá trình đánh giá dừng lại và giá trị true được trả về.

// First operand is true and operator is ||,
// evaluation stops and true is returned.
// evaluation: sự đánh giá
console.log(true || false || false);

// Evaluation stops at the second operand(true).
console.log(false || true || true || false);


// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numbGuesrs || 10;
// console.log(guests2);

// EXPLAIN
// Nếu giá trị ban đầu của restaurant.numGuests chưa được khai báo ra
// Thì nó sẽ đang là giá trị falsy
// Nhưng khi khai báo cho nó một giá trị truthy thì nó sẽ in giá trị đó ra màn hình

// The Nullish Coalescing Operator
// Toán tử hợp nhất (liên kết) Nullish

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);


// Nullish: null and undefined (NOT 0 or '');
// const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// => return: guestCorrect = 0