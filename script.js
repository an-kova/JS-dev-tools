'use strict';
// // strict ES6 to avoid bugs of earlier standarts of JS:
// a = 5;
// console.log(a); 

// Primitives:
var number = 5;
var string = "Hello!";
var sym = Symbol(); // just in ES6
var boolean = true;
null;
undefined;
// Objects:
var object = {};
var array = [];

// let userName = prompt("What is your name?"),
//     overAge = confirm("Are you over 18?");

// if (overAge === true) {
//     let answer = +prompt("Are you over 21?", "Yes");
//     // + makes the srting a number
//     console.log(typeof(answer));
// };

// alert("Nice to meet you, " + userName);
// console.log("Also great to meet you, " + userName);

let incr = 10,
    decr = 10;

incr++;
// prefix form of operators
console.log(incr);
console.log(--decr);

// postfix form of the decrement operator - returns the value first, then changes it
console.log(decr--);

// Operator Precedence (grouping -> incr,decr -> multipl,division,modulo -> addition,substraction):
let x = 1 + 2 - 3, // => left to right associativity (in general) 3-3
    y = 1 + 2 * 3, // 1 + 6
    z = (1 + 2) * 3; // 3 * 3
console.log("x,y,z:", x, y, z);

// Operator Associativity
// Assignment (right to left <= )
let a = 1,
    b = 2,
    c = 3;
console.log("a,b,c: before", a, b, c)
a = b = 3;
console.log("a,b,c:", a, b, c)

// Conditions:
let fruit = "Mangoes";

if (fruit === "Mangoes") {
    console.log("Mangoes are $2.79 a pound.");
} else if (fruit === "Papayas") {
    console.log("Papayas are $2.79 a pound.");
} else if (fruit === "Oranges") {
    console.log("Oranges are $0.59 a pound.");
} else {
    console.log("Sorry, we're out of " + fruit + ".");
}

// Ternary (conditional) Operator:
(fruit === "Mangoes") ? console.log("Mangoes are $2.79 a pound.") : console.log("Try again!");

// Switch Statement:
switch (fruit) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      // expected output: "Mangoes and papayas are $2.79 a pound."
      break;
    default:
      console.log('Sorry, we are out of ' + fruit + '.');
  }
  
  //// With Block-Scope Variables (let & const):
  const action = 'say_hello';
switch (action) {
  case 'say_hello': { // added brackets
    let message = 'hello';
    console.log(message);
    break;
  } // added brackets
  case 'say_hi': { // added brackets
    let message = 'hi';
    console.log(message);
    break;
  } // added brackets
  default: { // added brackets
    console.log('Empty action received.');
    break;
  } // added brackets
}

// Algorithms :
let num = 50; 

//// While-Loop:
// while (num < 53) {
//     console.log(num);
//     num++;
// }
//// Do-Loop:
do {
    console.log(num);
    num++;
}
while (num < 53);

//// For-Loop:
for (let i = 0; i < 15; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === 11) {
        break;
    }
    console.log(i);
}

// Arrow Functions (ECMAScript 6):

let calc = (a,b) => a+b;
// let calc = (a,b) => {a+b}; // for long expressions
console.log(calc(3,5));

// Methods:

let str = 'tEsT';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = '12.3';
console.log(Math.round(twelve));

let eleven = '11.7px';
console.log(parseInt(eleven));

// Callback Functions:

function first(){
    // do something
    setTimeout( function(){
        console.log('1) callback func');
    }, 1000 );
}

function second(){
    console.log('2) regular');
}

first();
second();

function learnJS(lang, callback) {
    console.log("I'm learning " + lang);
    callback();
}

// learnJS("JavaScript", function() {
//     console.log("I finished one more lesson!");
// })

function theCallback() {
    console.log("I finished one more lesson!");
}

learnJS("JavaScript", theCallback)


// Objects

//// first way:
let oldSchool = new Object();

//// second way (best practice):

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name + " for Objects");

// add key-value & nest objects:
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};

// delete:
delete options.bool;

console.log(options);

// Iterate data in object using For-In operator:
    // Перебрать данные в объекте с оператором For-In:
for (let key in options) {
    console.log("Key " + key + " has a value " + options[key]);
}
//// Number of keys/свойств within object:
console.log(Object.keys(options).length);
//// functions applied to objects called "methods"


// Arrays / массивы

let arr = [1, "two", 3, "four", 5];

arr.pop(); // delete last element;
arr.push("5"); // add last element (as string)
arr.shift(); // delete 1st element;
arr.unshift("1"); // add 1st element (as string)

// Method for-loop:
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Method forEach:
arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item + " (array: " + mass + ")");
})

console.log(arr);

// Method for-of (ES6 - NOT for objects, works JUST with arrays, strings and some new types of obj from ES6 like maps):
let mass = [1,3,4,6,7];

//// for-in will return keys of items:
for (let key in mass) {
    console.log(key + " is a key returned with for-in");
}

//// for-of will return items themselves:
for (let key of mass) {
    console.log(key + " is an item returned with for-of");
}

// Method split - to return a srting as array with items
let ans = "one two three 1 4 3 15 fifteen",
// let ans = prompt("Write some words with spaces", ""),
    words = [];

words = ans.split(" "); // space as separator to split a line
console.log("Array (.split): ");
console.log(words);

// Method join - to return array as a string
let newString = words.join(", "); // comma as separator for words in a string

console.log("String (.join): ");
console.log(newString);

// Method sort - to sort items in alphabetic order:

// let i = words.sort(); // sorts: "1, 15, 1020, 2, 3, ..., a, b, c, ..., z"
let i = words.sort(); // sorts better with numbers and strings: "1, 2, 3, 15, 1020, ..., a, b, c, ..., z"

function compareNum(a,b) {
    return a-b;
}

console.log("Sorted (.sort): ");
console.log(words);


// Object-Oriented Programming (prototyping)

let soldier = {
    health: 400,
    armor: 200
}

let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john); // just original data of obj => { health: 100 }
console.log(john.armor); // will keep searching in prototypes if none found in original obj => 200