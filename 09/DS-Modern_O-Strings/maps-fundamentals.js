// Maps - cơ bản

// A Map holds key-value pairs where the keys can be any datatype
// Chứa các cặp key-value trong đó các key có thể là bất kỳ kiểu dữ liệu nào

// A Map remembers the original insertion order of the keys
// Ghi nhớ thứ tự chèn ban đầu của các phím

// A Map has a property that represents the size of the map
// Bản đồ có một thuộc tính đại diện cho kích thước của bản đồ

// => So sánh với Object

// METHOD
// new Map(): Creates a new Map object
// set(): Sets the value for a key in a Map
// get(): Gets the value for a key in a Map
// clear(): Removes all the elements from a Map
// delete(): Removes a Map element specified by a key
// has(): Returns true if a key exists in a Map
// forEach(): Invokes a callback for each key/value pair in a Map
// entries(): Return an iterator object with the [key,value] pairs in a Map
// keys(): Returns an iterator object with the keys an a Map
// values(): Returns an iteator object of the values an a Map

// PROPERTY
// size: Returns the number of Map elements
const rest = new Map([
    ["apples1", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get('1')); // Lúc lấy phải lấy đúng luôn cả kiểu của dữ liệu

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2]
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'), 'Headling');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr)); // returns undefined

// Các object có một thuộc tính hasOwnProperty để check obj

const apples = { name: 'Apples' };
const bananas = { name: 'Bananas' };
const oranges = { name: 'Oranges' };

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);
console.log(fruits);
console.log(fruits.get(apples));

// Remember: The key is an object (apples), not a string ("apples"):