// Destructuring OBJECTS - ( Phá hủy Object )
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
        // template string 
        // gọi một object ra thì có thể truyền một biến, và giá trị truyền vào phải là một object
        // Thực tế là truyền từng giá trị vào trong dấu {} để hiện rõ thông tin
        // hàm trên là truyền vào một object là một đối số, chứ không phải truyền vào 4 đối số
    }
};

restaurant.orderDelevery({
    time: '22:30',
    addess: 'Nam Định, 21',
    mainIndex: 2,
    starterIndex: 2,
});
// ==> một hàm thực sự phức tạp với nhiều tham số, thì hãy dùng kĩ thuật này, cố định tham số
restaurant.orderDelevery({
    addess: 'Nam Định, 21',
    starterIndex: 1,
});


const { name, openingHourse, categories } = restaurant;
console.log(name, openingHourse, categories);

// thay đổi tên biến khác với tên thuộc tính của object

const { name: restaurantName, openingHourse: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Hữu ích khi xử lí dữ liệu với bên thứ 3

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// EXPLAIN: 
// thuộc tính menu không có trong object trên nên giá trị của nó sẽ là array rổng như phép gán trên
// còn thuộc tính starterMenu đã có trong object nên dù gán cho nó là một mảng rỗng thì giá trị của nó sẽ lấy từ cái object ban đầu
// mặc định nếu một biến không tồn tại mà được gọi ra giá trị của nó sẽ là undefined

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

// { a, b } = obj; // ERROR
// solution => cho cả biểu thức vào trong ngoặc tròn
({ a, b } = obj);
console.log(a, b);

// netsed objects
const { fri: { open: o, close: c } } = openingHourse;
console.log(o, c);