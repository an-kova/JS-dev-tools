    // Encapsulation:
    console.log('-- Encapsulation:');

function User (name, age) {
    this.name = name;
    let userAge = age;

    this.getAge = () => {
        return userAge;
    };
    this.setAge = (age) => {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.error('Value for age is invalid');
        }
    };
    this.say = () => {
        console.log(`Username is ${this.name}, age: ${this.getAge()}`);
    };
}

let user = new User('Tee', 36);
console.log(user.name);
console.log(user.userAge);
user.say();

console.log(user.getAge());

// test the validitu of value:
user.setAge('37');
console.log(user.getAge());

user.setAge(237);
console.log(user.getAge());

// set & get new value:
user.setAge(37);
console.log(user.getAge());

//// Without encapsulation any data can be easily changed later by user:
// user.age = '-37y';
// user.name = 'T.';
// console.log(user.name); // 'T.'
// console.log(user.age); // '-37'

// user.say();


    // Modules: 
    console.log('-- Modules:');

// 1) Anonymous function expression:
let number = 1;

(function() {
    let number = 2;
    console.log(number);
    
    return console.log(number + 3);
}());

console.log(number);

// 2) Using object interface:
let mod = (function() {
    let private = function() {
        console.log('You shouldn\'t see me! I\'m private.');
    };
    return {
        sayHello: function() {
            console.log('Hello!');
        }
    };
}());

console.log(mod);
console.log(mod.sayHello());

// 2) Creating private (local) methods:
let pod = (function() {
    let private = function() {
        console.log('You shouldn\'t see me! I\'m private.');
    };
    let sayHello = function() {
        console.log('Hello!');
    };
    return {
        sayHello: sayHello
    };
}());

console.log(pod);
console.log(pod.sayHello());