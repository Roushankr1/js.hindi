// primitive 

// 7 types string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

// console.log(id === anotherId);

const bigNumber = 98564165101651603216516n


// Refrence (non-primitive)

// array, object, functions

const heros = ["shaktiman", "naagaraj", "doga"]

let myobj = {
    name: "Roushan",
    age: 18,
}

const myFunction = function(){
    console.log("hrllo world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************** memory ***********************

// stack (primitive), heap (non-primitive)

let myinstaidname = "roushan.official_"

let anothername = myinstaidname
anothername = "bobby.official_"

console.log(myinstaidname);
console.log(anothername);

let userOne = {
    email: "user54r7@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "roushan5478@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
