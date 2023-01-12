const airline = 'TAP Air Portugal';
const plan = 'A320';

console.log(plan[0]);
console.log(plan.length);
console.log(airline.indexOf('r'));
// => Trả về index của kí tự tồn tại trong mảng or chuỗi từ trái qua phải
//    Nếu có từ 2 kí tự đó trở lên thì nó trả về cái đầu tiên từ trái qua phải
//    Nếu không tồn tại thì return -1
//    Phân biệt chữ hoa, chữ thường
console.log(airline.lastIndexOf(' '));
// => Trả về index của kí tự tồn tại trong mảng or chuỗi từ phải qua trái
//    Nếu có từ 2 kí tự đó trở lên thì nó trả về cái đầu tiên từ phải qua trái
//    Nếu không tồn tại thì return -1
//    Phân biệt chữ hoa, chữ thường
console.log(airline.slice(4));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-3));
console.log(airline.slice(1, -1)); // Cắt đầu và cắt đít
// => Trả về một mảng mới hoặc một chuỗi được cắt ra từ trái qua phải
//    Nếu có 1 tham số thì nó mặc định cắt từ đầu, và tham số đó trừ đi 1 là ra số ký tự muốn cắt
//    Nếu có 2 tham số thì nó cắt từ tham số 1 đến tham số 2
//    Nếu tham số đầu là tham số âm thì nó sẽ cắt từ phải qua trái đúng bằng đó kí tự: ví dụ như -2 là cắt từ cuối lấy 2 kí tự

const checkMiddleSeat = function(seat) {
    // B and E are middlle seats
    const s = seat.slice(-1)
    if (s === 'B' || s === 'E') {
        console.log("You got the middle seat!");
    } else {
        console.log("You got lucky!");
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

console.log(airline.toLowerCase());
console.log('airline'.toUpperCase());

// Fix capitalizaation in name
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail === email);


// replacing
const priceGB = '288,87£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate')); // Thay thế cái door đầu tiên
console.log(announcement.replaceAll('door', 'gate')); // Thay thế tất cả cái door


console.log(announcement.replace(/door/g, 'gate')); // Thay thế tất cả cái door


// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW airbus family');
}


// Practice exercise
const checkBaggage = function(items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


// split => Phân tách 1 chuỗi thành 1 mảng
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtman'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');
console.log(firstName, lastName);

// join => đưa 1 mảng trở thành một chuỗi
// toString => tương tự join và các phần tử khi giải nén được phân cách bởi dấu phẩy
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


// capitalize: viết hoa
const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

    }
    console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtman');


// Padding: đệm
// => Thêm kí tự hoặc string vào đầu hoặc cuối chuỗi
// => Tham số thứ nhất sẽ mặc định độ dài mà chuỗi hiển thị cũng như tồn tại
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // độ dài của chuỗi này là 25 luôn
console.log(message.padStart(25, '+').padEnd(30, '+')); // độ dài của chuỗi này là 30
console.log('Jonas'.padStart(25, '+').padEnd(30, '+')); // độ dài của chuỗi này là 25 luôn
console.log(message.padEnd(25, '+'));

const maskCreditCard = function(number) {
    // const str = String(numeber);
    const str = number + ''; // => 1 số cộng với 1 chuỗi sẽ thành chuỗi
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(34234232));
console.log(maskCreditCard(23434324234234232));
console.log(maskCreditCard('534323423434234232234'));

// Repeat => Lặp lại theo tham số chỉ định bên trong
const message3 = 'Bad weather... All departures Delayed...! \n';
console.log(message3.repeat(5));

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'plane'.repeat(n)}`);
}
planesInline(5);
planesInline(3);
planesInline(12);

// concat() dùng để nối 2 hay nhiều chuỗi
let text1 = "sea";
let text2 = "food";
let text3 = "good";
let result = text1.concat(text2, " ", text3);
console.log(result);