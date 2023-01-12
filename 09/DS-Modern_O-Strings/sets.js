// A JavaScript Set is a collection of unique values
// => Là tập hợp các giá trị duy nhất

// Each value can only occur once in a Set.
// => Mỗi giá trị chỉ có thể xảy ra một lần trong Tập hợp

// A Set can hold any value of any data type
// => Có thể chứa bất kì giá trị của bất kì kiểu dữ liệu nào

// => So sánh với mảng ARRAY

// METHOD
// new Set (): creates a new Set
// add(): Adds a new element from the Set
// delete(): Removes an element from a Set
// has(): Returns true if a value exists
// clear(): Removes all elements from a Set
// forEach(): Invokes a callback for each element => Invokes: gọi
// values(): Returns an Iterator with all the values in a Set => Iterator: trình lặp
// keys(): Same as values()
// entries(): Returns an Iterator with the [value,value] pairs from a Set 
// => pairs: cặp

// PROPERTY
// size: Returns the number elements in a Set

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}
// Là tập hợp các giá trị duy nhất: Tức là những giá trị nào lặp lại giống nhau có trong Set() đều bị xóa bỏ và chỉ để một cái duy nhất như Ví Dụ trên ( Mỗi giá trị chỉ có thể xảy ra một lần trong Tập hợp ).

console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) {
    console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// spread operator hoạt động trên tất cả các tệp lặp
// ở đây spread operator có thể dùng để đưa set() trở thành một mảng cơ bản
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// Đếm có bao nhiêu chữ cái trong một chuỗi (không tính chữ lặp lại)
console.log(new Set('JJonasss').size);