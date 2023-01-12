// ------------------------ Lab 2.2 -------------------------

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
/*
    underscore_case
    first_name
    Some_Variable
    calculate_AGE
    delayed_departure
*/

// document.querySelector('button').addEventListener('click', function() {
//     const text = document.querySelector('textarea').value;
//     const textArr = text.split('\n');
//     let flag = 0
//     for (const v of textArr) {
//         flag++;
//         const [first, second] = v.toLowerCase().trim().split('_');
//         const secondUpCase = second.replace(second[0], second[0].toUpperCase());
//         const output = first.concat(secondUpCase);
//         const outputLength = output.padEnd(20, ` `);
//         console.log(outputLength.concat('9'.repeat(flag)));
//     }
// });

// ------------------------ Lab 2.2 -------------------------





// ------------------------ Lab 2.3 -------------------------

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = function(str) {
        return str.slice(0, 3).toUpperCase();
    }
    // <=>
    // const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '1' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(50);
    console.log(output);
}
// ------------------------ Lab 2.3 -------------------------