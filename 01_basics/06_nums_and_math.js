const balance = new Number(100)
// console.log(balance);

const score = 400
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.876535
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++ maths ++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 5, 1));
// console.log(Math.max(4, 5, 1, 9));

console.log(Math.random());
console.log((Math.random()*8) + 1);
console.log(Math.floor(Math.random()*8) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)