// Tìm hiểu sâu hơn về function - A closer look at Functions

//-----------------------------------------------------------------
// Default parametters
// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers){
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking('LH123');
// createBooking('LH123',2,800);
// createBooking('LH123',3);

// createBooking('LH123',undefined,3);
//------------------------------------------------------------------------------

// How passing arguments works: value vs reference

// const flight = 'PH234';
// const jonas = {
//     name: 'Jonas',
//     passport: 291398238424
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 291398238424){
//         alert('Checked in');
//     } else {
//         alert('Wrong passport');
//     }
// };
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// NOTE:
// Giá trị flight không thay đổi là bởi vì khi chúng ta truyền một đối số cho function thì tức là nó đang sao chép ra một biến, một bộ nhớ khác và giá trị này hoàn toàn tách biệt với giá trị flight ban đầu (là 2 vùng nhớ riêng biệt)

// Nhưng với object jonas thì nó lại thay đổi giá trị vì khi chúng ta truyền cho nó một đối số là object vào function (tức là chúng ta truyền một tham chiếu) thì nó tạo ra 2 tên biến cùng tham chiếu đến 1 vùng nhớ và khi dúng tên biến tham chiếu đến để thay đổi giá trị thì object cũng thay đổi theo

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 1000000000);
// }
// newPassport(jonas);
// checkIn(flight, jonas);

// -------------------------------------------------------------------------

// First-class and higher-order function
// Function là một kiểu của object nên cũng được hiểu nó là 1 kiểu dữ liệu
// Receives: nhận được

// First-class function: các function trong ngôn ngữ đó được đối xử như bất kỳ biến nào khác. (Có thể truyền vào làm đối số cho các hàm khác - Có thể được trả về bởi một hàm khác - Có thể được gán như một giá trị cho một biến)

// Higher-order function: là một function chấp nhận các function là tham số và/hoặc trả về một function

// ------------------------------------------------------------------------------

// // Functions accepting callback functions

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [fisrt, ...others] = str.split(' ');
//     return [fisrt.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
//     // fn.name là gọi đển tên của function thực hiện chức năng đó
// }
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);


// // JS uses callbacks all the time
// const high5 = function() {
//     console.log('1111');
// }

// document.querySelector('button').addEventListener('click', high5);

// -----------------------------------------------------------------------

// Functions returning functions

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// Challenge
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// -----------------------------------------------------------------------------

// Immediately invoked function expressions - các biểu thức hàm được gọi ngay lập tức

// const runOnce = function () {
//     console.log('This will never run again');
// }
// runOnce();

// // Được gọi là IIFE - hàm gọi ngay lập tức
// (function(){
//     console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// ----------------------------------------------

(function() {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();



