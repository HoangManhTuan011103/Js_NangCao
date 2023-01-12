// Destructuring ARRAYS - ( Phá hủy mảng )
// The Destructuring Assignment syntax is a JavaScript expession that makes it possible to unpack values from arrays, or properties from objects, into distinct variables
// syntax: cú pháp
// expression: sự diễn đạt (biểu thức)
// unpack: giải nén
// distinct: riêng biệt
// => Cú pháp Destrucuring Assignment là một biểu thức JavaScript cho phép giải nén các giá trị từ Arrays or thuộc tính từ Objects thành các biến riêng

// ---------------------------------EXAMPLE--------------------------------
let a, b, reset;
[a, b] = [10, 20];

// console.log(a);
// expected output: 10

// console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);
// expected ouput: Array [30, 40, 50]

//---------------------------------SYNTAX--------------------------------
// VD: array = [3,4,5,6,7,8]
// const [j, k] = array;  => log output: 3,4
// const [j, , k] = array; => log output: 3,5
// const [j, k, ...rest] = array; = > log output: 3,4,[5,6,7,8]

// let a, b, a1, b1, c, d, rest, pop, push;
// [a, b] = array;
// [a, , b] = array;
// [a = aDefault, b] = array;
// [a, b, ...rest] = array;
// [a, , b, ...rest] = array;
// [a, b, ...{ pop, push }] = array;
// [a, b, ...[c, d]] = array;

// The object and array literal expressions provide an easy way to create ad hoc packages of data. => Các biểu thức object và array cung cấp một cách dễ dàng để tạo các gói dữ liệu đặc biệt.
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what values to unpack from the sourced variable.
const [y, z] = x; // Nhiệm vụ của nó là tái cấu trúc
// không làm thay đổi giá trị của mảng ban đầu
// console.log(y);
// console.log(z);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching varibables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// Thay vì chuyển đổi vị trí như này chúng ta có thể dùng destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

// restaurant.order(2, 0) => trả về một mảng, nhưng khi dùng destructuring sẽ unpack thành từng biến có giá trị tương ứng như bên dưới.
// Cách nhận hai giá trị từ một hàm về hai biến
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested destructuring 
// nested: lồng nhau
const nested = [2, 4, [5, 6]];
// const [m, , n] = nested;
// console.log(m, n);
const [m, , [n, q]] = nested; // thực hiện destructuring bên trong destructuring
console.log(m, n, q);


// Default values
const [i = 1, j = 1, k = 1] = [8];
console.log(i, j, k);