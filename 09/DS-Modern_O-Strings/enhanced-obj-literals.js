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

    // openingHours: openingHours,

    // ES6 enhanced object literals
    openingHours,

    // ES6 enhanced object literals
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelevery({ starterIndex = 1, mainIndex = 0, time = '20:00', addess }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addess} at ${time}`);
    },

    // Cách viết cũ
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};

// OPTIONAL CHAINING (?.) - Chuỗi tùy chọn

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);
// => nếu cái trước dấu ? khác undefined hoặc null thì nó sẽ log ra open
// Ngược lại nó sẽ return về undefined

// EXAMPLE 
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     => Nó check kiểu như nếu restaurant.openingHourse[day] tồn tại
//     => Thì in ra restaurant.openingHourse[day].open còn không thì closed
//     console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// => Nếu restaurant.order tồn tại thì gọi restaurant.order(0,1)
// => Ngược lại thì in ra thằng 'Method does not exist'


// Arrays: Kiểm tra xem một mảng có rỗng hay không
const users = [{
    name: 'jonas',
    email: 'hello@gmail.com'
}];
// console.log(users[0]?.name ?? 'User array empty');
// => Check xem cái users[0] có tồn tại hay không
// => Nếu nó tồn tịa thì log ra thằng users[0].name
// => Ngược lại thì nó in ra thằng chuỗi 'User array empty'
// => Nó hoạt động như thằng if else bên dưới

if (users.length > 0) {
    console.log(users[0].name);
} else {
    console.log('User array empty');
}