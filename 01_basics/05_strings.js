const Name = "Roushan"
const repoCount = 50

// console.log(Name + repoCount + " value");

// console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);

const gameName = new String('Roushan-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringOne = "   Roushan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://roushan.com/roushan%20kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('beautiful'));

console.log(gameName.split('-'));