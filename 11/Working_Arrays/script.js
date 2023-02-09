
const account1 = {
    owner: 'Jonas Schmedtmann',
    movement: [200,450,-400,3000,-650,-130,70,1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movement: [5000,3400,-150,-790,-3210,-1000,8500,-30],
    interestRate: 1.5, // %
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movement: [200,-200,340,-300,-20,50,400,-460],
    interestRate: 0.7, // %
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movement: [430,1000,700,50,90],
    interestRate: 1, // %
    pin: 4444,
};

const accounts = [account1,account2,account3,account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance= document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUserName = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmout = document.querySelector('.form__input--amount');
const inputLoanAmout = document.querySelector('.form__input--loan-amount');
const inputCloseUserName = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



// Creating DOM elements
const displayMovements = function(movements,sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}EURO</div>
        </div>
        `;
        // insertAdjacentHTML chỉ định 1 đoạn HTML or XML và chèn vào trong DOM với vị trí chỉ định
        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
}



const calcPrintBalnce = function(acc){
    acc.balance = acc.movement.reduce((acc, mov) => acc+mov, 0);
    // textContent: Nội dung văn bản của một phần tử
    labelBalance.textContent = `${acc.balance} EUR`;
};


const calcDisplaySummary = function(acc){
    const incomes = acc.movement
    .filter(mov => mov > 0)
    .reduce((acc,mov) => acc+mov,0);
    labelSumIn.textContent = `${incomes}EURO`;

    const outcomes = acc.movement
    .filter(mov => mov < 0)
    .reduce((acc,mov) => acc+mov,0)
    labelSumOut.textContent = `${Math.abs(outcomes)}EURO`;

    const interest = acc.movement
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate/100)
    .filter((int, i, arr) => {
        // console.log(arr);
        return int >= 1
    })
    .reduce((acc,int) => acc+int,0);
    labelSumInterest.textContent = `${interest}EURO`

}

// account1.username = 'hmn'; // Tạo mới 1 property vào object
const createUserNames = function(accounts){
    accounts.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name.at(0)).join('');
    });
}
// Ví dụ trên là tạo một thuộc tính mới cho mỗi accounts từ tên ban đầu
createUserNames(accounts);

const updateUI = function(acc){
    // Display movements
    displayMovements(acc.movement);
    // Display balance
    calcPrintBalnce(acc);
    // Display summary
    calcDisplaySummary(acc);
}
// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e){
    // Prevent form from submitting
    // Prevent: Ngăn chặn
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.username === inputLoginUserName.value);
    // => nếu cái trước dấu ? khác undefined hoặc null thì nó sẽ log ra currentAccount.pin
    if(currentAccount?.pin === Number(inputLoginPin.value)){
       
        // Display UI and message
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ').at(0)}`;
        containerApp.style.opacity = 100;
        // Clear input fields
        inputLoginUserName.value = inputLoginPin.value = "";
        inputLoginUserName.blur();
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);

    }
});

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmout.value);
    const receiverAcc = accounts.find(
        acc => acc.username ===  inputTransferTo.value
    );
    console.log(amount, receiverAcc);
    if( amount > 0 && 
        receiverAcc &&
        currentAccount.balance >= amount && 
        receiverAcc?.username !== currentAccount.username){
        // Doing the transfer
        currentAccount.movement.push(-amount);
        receiverAcc.movement.push(amount);

        // Update UI
        updateUI(currentAccount);

        // Clear input fields
        inputTransferAmout.value = inputTransferTo.value = "";
        inputTransferAmout.blur();
        inputTransferTo.blur();

    }
});

btnLoan.addEventListener('click', function(e){
    e.preventDefault();

    const amount = Number(inputLoanAmout.value);

    if(amount > 0 && currentAccount.movement.some(mov => mov >= amount * 0.1)){
        // Add movement
        currentAccount.movement.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmout.value = '';
});

btnClose.addEventListener('click', function(e){
    e.preventDefault();
    if( inputCloseUserName.value === currentAccount.username && 
        Number(inputClosePin.value) === currentAccount.pin){
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
      
        // Delete account
        accounts.splice(index,1);
         
        // Hide UI
        containerApp.style.opacity = 0;
    }

      // Clear input fields
      inputCloseUserName.value = inputClosePin.value = "";
      inputCloseUserName.blur();
      inputClosePin.blur();
});

let sorted = false;
btnSort.addEventListener('click', function(e){
    e.preventDefault();
    displayMovements(currentAccount.movement, !sorted);
    sorted = !sorted;
});








// -------------------------------------------------------------------



///// LECTURES
// const currencies = new Map([
//     ['USD','United States dollar'],
//     ['EUR','Euro'],
//     ['GBP','Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////////////////////////////////////

// --------------------------------------------------------------------
// // Simple Array Mehthods

// let arr = ['a','b','c','d','e'];

// // SLICE
// console.log(arr.slice(2)); // Trả về 1 mảng mới, không làm thay đổi mảng ban đầu
// // => Trả về mảng mới xóa mất 2 phần tử đầu tiên của mảng ban đầu
// // => Sẽ lấy 2 trừ đi 1 là ra chỉ số index sẽ xóa
// console.log(arr.slice(2,4));
// // => Trả về mảng mới lấy index từ 2 -> 3 ( 4 trừ 2 = 2 phần tử được lấy)
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));
// console.log(arr.slice()); // Trả về 1 mảng mới như mảng ban đầu

// // SPLICE 
// // => Trả về 1 mảng mới được cắt ra từ mảng cũ và làm thay đổi mảng cũ
// // console.log(arr.splice(2)); 
// // arr.splice(-1); // => Xóa đi phần tử cuối cùng trong mảng
// // Tham số 2: Số lượng phần tử muốn xóa
// // Từ tham số thứ 3 trở đi: Phần tử muốn thêm vào
// // console.log(arr); 


// // REVERSE - Đảo ngược mảng và làm thay đổi luôn mảng ban đầu
// const arr2 = ['j','i','h','g','f'];
// const arr3 = ['a','b','c','d','e'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT - Nối 2 mảng thành 1 mảng mới
// const letters = arr3.concat(arr2);
// console.log(letters);
// console.log([...arr3, ...arr2]);

// // JOIN - biến một mảng thành một chuỗi thay đổi mảng ban đầu
// console.log(arr2.join());
// console.log(arr2.join(''));
// console.log(arr2.join(' '));
// console.log(arr2.join(','));
// console.log(arr2.join(', '));

// // PUSH - Thêm 1 phần tử vào cuối mảng
// const arr4 = [1,2,3,4,5,6,7,8];
// arr4.push(10);
// console.log(arr4);
// // console.log(arr4.push('c')); // => Trả về index + 1

// // UNSHIFT - Thêm 1 phần tử vào đầu mảng
// arr4.unshift(4);
// console.log(arr4);

// // POP - Lấy ra phần từ ở cuối mảng và loại bỏ khỏi mảng ban đầu (Mảng cũ thay đổi)
// console.log(arr4.pop()); // Trả về phần tử cuối cùng
// console.log(arr4);


// // SHIFT - Lấy ra phần tử ở đầu mảng và loại bỏ khỏi mảng ban đầu (Mảng cũ thay đổi)
// console.log(arr4.shift());
// console.log(arr4);

// --------------------------------------------------------------------

// // The new at method
// const arr = [23,33,55];
// console.log(arr[0]);
// console.log(arr.at(0));

// // Getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1));
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(-1));

// --------------------------------------------------------------------

// Looping arrays: Foreach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//     if(movement > 0){
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//         // Math.abs: Trả về giá trị tuyệt đối của 1 số
//     }
// }
// console.log('-----------FOREACH------------');
// movements.forEach(function(mov, i, arr) {
    // if(mov > 0){
    //     console.log(`Movement ${i + 1}: You deposited ${mov}`);
    // } else {
    //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
    //     // Math.abs: Trả về giá trị tuyệt đối của 1 số
    // }
// });
// Foreach không hoạt động với continue và break
// -------------------------------------------------------------------

// // Foreach with maps and sets
// // MAP
// const currencies = new Map([
//     ['USD','United States dollar'],
//     ['EUR','Euro'],
//     ['GBP','Pound sterling'],
// ]);
// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD','EUR','GBP','USD','EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map){
//     // Set với foreach thì key chính là value
//     console.log(`${value}: ${value}`);
// });

// -------------------------------------------------------------------

// Project: "Bankist" App

// -------------------------------------------------------------------

// // Coding Challenge #1

// const checkDog = function(dogsJulia, dogsKate){
//     const dogsCorreted = [...dogsJulia];
//     dogsCorreted.splice(0,2);
//     dogsCorreted.splice(-2);
//     const dogs = dogsCorreted.concat(dogsKate);
//     dogs.forEach(function(item, index){
//        if(item >= 3){
//             console.log(`Chó số ${index + 1} là người lớn và ${item} tuổi`);
//        } else {
//             console.log(`Chó số ${index + 1} vẫn là chó con`);
//        }
//     });
// };
// checkDog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDog([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// -------------------------------------------------------------------

// Data Transfomations: Map, filter, reduce

// ----------- Map method:
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const uerToUsd = 1.1;
// const movementUSD = movements.map(function(mov){
//     return mov * uerToUsd;
// });

// const movementUSD = movements.map(mov => mov * uerToUsd);
// console.log(movements);
// console.log(movementUSD);

// const movementUSDfor = [];
// for(const mov of movements){
//     movementUSDfor.push(mov*uerToUsd);
// }
// console.log(movementUSDfor);

// const movementsDescription = movements.map((mov, i) => 
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
// );
// console.log(movementsDescription);

// -------- Filter method:

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function(mov){
//     return mov > 0;
// });
// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// -------- Reduce method:
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // Tham số 1: Bộ tích lũy (accumulator -> SNOWBALL)
// // Hàm reduce nhận 2 tham số: 1 tham số là callback, 1 tham số là giá trị bắt đầu
// const balance = movements.reduce((acc, cur, i, arr) => acc + cur,0);
// console.log(balance);

// // Maximum value
// // Trong lần lặp callback đầu tiên thì acc luôn là giá trị tham số thứ 2 truyền vào
// const maximumValue = movements.reduce((acc, mov, i) => {
//     console.log(`${i}: ${acc}`);
//     if(acc > mov){
//         return acc;
//     } else { 
//         return mov;
//     }
// },movements.at(0));
// console.log(maximumValue);


// -------------------------------------------------------------------

// // Coding challenge #2
// const calcAverageHumanAge = function(ages) {
//     const humanAges = ages.map(age => age<=2 ? age*2 : 16+age*4);
//     const humanAgesBiger = humanAges.filter(age => age>18);
//     // const avgAgeDogHuman = humanAgesBiger.reduce((acc, cur) => acc+cur,0)/humanAgesBiger.length;
//     const avgAgeDogHuman = humanAgesBiger.reduce((acc, cur, i, arr) => acc+cur / arr.length,0);
//     return avgAgeDogHuman;
// }
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1,avg2);

// -------------------------------------------------------------------
// // The magic of chaining methods
// const uerToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // PIPELINE
// const totalDespositsUSD = movements
//     .filter((mov) => mov > 0)
//     .map((mov, i, arr) => {
//         return mov*uerToUsd;
//     })
//     // .map(mov => mov*uerToUsd)
//     .reduce((acc,mov) => acc + mov,0);
// console.log(totalDespositsUSD);

// -------------------------------------------------------------------

// // Coding challenge #3
// const calcAverageHumanAge = ages => 
//     ages.map(age => age<=2 ? age*2 : 16+age*4)
//     .filter(age => age>18)
//     .reduce((acc, cur, i, arr) => acc+cur / arr.length,0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1,avg2);

// -------------------------------------------------------------------
// // The find method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const firstWithdrawal =  movements.find(mov => mov < 0);
// // Trả về 1 phần tử đầu tiên thỏa mãn điều kiện
// console.log(firstWithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === "Jessica Davis" );
// console.log(account);

// -------------------------------------------------------------------
// // Some and every

// // => SOME METHOD
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // EQUALLITY
// console.log(movements.includes(-130));
// // CONDITION
// console.log(movements.some(mov => mov === -130));
// const anyDesposits = movements.some(mov => mov > 1500);
// // Bất kì giá trị nào trong mảng thỏa mãn điều kiện thì nó sẽ trả về true
// console.log(anyDesposits);


// // EVERY METHOD
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movement.every(mov => mov > 0));
// // Every trả về true nếu tất cả giá trị đều thỏa mãn điều kiện
// // 1 Điều kiện không thỏa mãn thôi nó cũng trả về false

// // Separate callback
// const deposit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// -------------------------------------------------------------------

// // Flat and flatmap

// // => Flat
// Phá một hay nhiều lớp mảng
// const arr = [[1,2,3],[4,5,6],7,8];
// console.log(arr.flat());

// const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// // Có thể thay đổi độ sâu của flat
// const overalBalanceCopy = accounts.map(acc => acc.movement).flat()
//                                     .reduce((acc,mov) => acc+mov,0);
// console.log(overalBalanceCopy);

// // => Flat Map
// // Chỉ đi sâu 1 cấp không thể thay đổi nó
// const overalBalance = accounts
//                     .flatMap(acc => acc.movement)
//                     .reduce((acc,mov) => acc+mov,0);
// console.log(overalBalance);

// -------------------------------------------------------------------
// // Sorting arrays
// // => Làm thay đổi mảng ban đầu

// // Strings

// const owners = ['Jonas','Zach','Adam','Martha'];
// console.log(owners.sort());
// console.log(owners);

// // Mumbers
// // Return < 0, A trước B (keep order)
// // Return > 0, B trước A (switch order)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // Giảm dần (Descending)
// movements.sort((a, b) => b - a);
// console.log(movements);

// // Tẳng dần (Ascending)
// // movements.sort((a, b) => {
// //     if(a > b) return 1; // switch order
// //     if(b > a) return -1; // keep order
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// -------------------------------------------------------------------
// // More ways of creating and filling arrays
// const arr = [1,2,3,4,5,6,7];
// console.log(new Array(1,2,3,4,5,6,7));

// // Emrty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from()
// console.log("-------------- Array.from() -----------");
// const y = Array.from({length: 7}, () => 1);
// console.log(y);
// const z = Array.from({length: 7}, (_, i) => i+1);
// console.log(z);

// // const m = Array.from({length: 100}, () => Math.ceil(Math.random()*6));
// // console.log(m);

// labelBalance.addEventListener('click', function(){
//     const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('EURO','')));
//     console.log(movementsUI);

//     const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//     console.log(movementsUI2);
// })


// -------------------------------------------------------------------
// Summary:
// Thay đổi mảng ban đầu: push(end),unshift()start(add) - pop(end),shift(start),splice(any)(remove) - reverse-sort-fill
// Tạo 1 mảng mới: map,filter,slice,concat,flat,flatMap
// 1 index: indexOf,findIndex
// Truy xuất 1 phần tử mảng: find
// Know if array includes: includes,some,every
// A new string: join
// Biến đổi mảng thành 1 giá trị mới: map
// Lặp qua mảng: forEach
// -------------------------------------------------------------------
// Array Methods Practice
// 1.
const bankDespositSum = accounts.flatMap(acc => acc.movement)
                            .filter(mov => mov > 0)
                            .reduce((mov, cur) => mov + cur, 0);
console.log(bankDespositSum);
// 2.
// const numDesposits1000 = accounts.flatMap(acc => acc.movement)
//                         .filter(mov => mov >= 1000).length;
const numDesposits1000 = accounts.flatMap(acc => acc.movement)
                        .reduce((count, cur) => (cur >= 1000 ? ++count : count),0);
console.log(numDesposits1000);

// Prefixed ++ operated
let a = 10;
// console.log(a++); 
// Nó vẫn thực sự tăng biến a và biến a sẽ tăng lên 1
// Nhưng a++ sẽ trả về giá trị trước đó
console.log(++a);
// Và ++a sẽ trả về giá trị tăng luôn

// 3.
const {desposits, withdrawals} = accounts.flatMap(acc => acc.movement)
                                .reduce((sums, cur) => {
                                // cur > 0 ? sums.desposits += cur : sums.withdrawals += cur;
                                sums[cur > 0 ? 'desposits' : 'withdrawals'] += cur;
                                return sums;
},{desposits: 0, withdrawals: 0});
console.log(desposits,withdrawals);
// 4.
const convertTitleCase = function(title) {
    const capitzalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a','an','and','the','but','or','on','in','with'];
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => exceptions.includes(word) ? word : capitzalize(word))
    .join(' ');
    return capitzalize(titleCase);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


// -------------------------------------------------------------------
// Coding Challenge #4
    const dogs = [
        { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
        { weight: 8, curFood: 200, owners: ['Matilda'] },
        { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
        { weight: 32, curFood: 340, owners: ['Michael'] }
    ];

    // 1.
    dogs.forEach((dog) => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));   
    console.log(dogs);

    // 2.
    const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
    console.log(dogSarah);
    console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`);

    // 3.
    const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
    const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
    console.log(ownersEatTooMuch);
    console.log(ownersEatTooLittle);

    // 4. 
    console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
    console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

    // 5.
    const dogCheck = dogs.some(dog => dog.curFood === dog.recFood);
    console.log(dogCheck);

    // 6.
    console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1 ));

    // 7.
    console.log(dogs.filter(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));

    // 8.
    const sortDog = dogs.slice().sort((a, b) => a.recFood - b.recFood);
    console.log(sortDog);







// -------------------------------------------------------------------





































