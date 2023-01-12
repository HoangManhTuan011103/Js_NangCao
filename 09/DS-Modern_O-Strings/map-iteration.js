// map - iteration (lặp)
const openingHourse = {
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

}
const question = new Map([
    ['question', 'What is the best programing language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Congratulations!'],
    [false, 'Try again'],

]);


// Convert object to map
console.log(Object.entries(openingHourse));
const hoursMap = new Map(Object.entries(openingHourse));
console.log(hoursMap);


// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
// const answer = Number(prompt('Your answer'));
// console.log(question.get(question.get('correct') === answer));


// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// Which Data Structure To Use?

// Sources of data
// From the program it self
// From the UI
// From external sources:
// external: bên ngoài

// Collection of data
//        <>
// Data structure
// Arrays or Sets: Simple List
// Object or Maps: Key/Value Pairs ( Key allow us to describe values )

// ------------------ Arrays vs Sets ----------------------
// => Arrays: - Use when you need ORDERED list of values (might contain duplicates)
//            - Use when you need to manipulate data
//            - manipulate: thao tác

// => Sets: - Use when you need to work with unique values
//          - Use when high-performance is really important
//          - high-performance: Hiệu suất cao
//          - Use to remove duplicates from arrays
// ------------------ Arrays vs Sets ----------------------


// ------------------ Objects vs Maps ----------------------
// => Objects: - More "traditional" key/value store ("abused" object)
//             - Easier to write and access value with . and []
//             - abused: lạm dụng
//             - Use when you need to include (thêm) function (methods)
//             - Use when working with JSON (can convert to map)
// 

// => Maps: - Better performance
//          - Keys can have any data type
//          - Easy to iterate // iterate: lặp
//          - Easy to compute size // compute: tính toán
//          - Use when you simply need to map key to values
//          - Use when you need keys that are not strings
// ------------------ Objects vs Maps ----------------------






// ---------------- Data structure ----------------
// OTHER BULT-IN
// - WeakMap
// - WeakSet

// NON-BUILT IN
// - Stacks
// - Queues
// - Linked lists
// - Trees
// - Hash tables
// ---------------- Data structure ----------------