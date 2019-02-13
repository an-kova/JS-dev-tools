let btn = document.querySelector('button'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;
    
    let timer = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(timer);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// Event Delegation: parent to children

let btnBlock = document.querySelector('.btn-block'),
    btns = document.querySelectorAll('button');

btnBlock.addEventListener('click', function(event) {
    // if (event.target && event.target.tagName == 'BUTTON') {
    // if (event.target && event.target.classList.contains('first')) {
    if (event.target && event.target.matches('button.first')) {
        myAnimation();
    } else if (event.target && event.target.tagName == 'BUTTON') {
        console.log('Try again');
    }
});


// DOCUMENT
// client (text + padding)

let box = document.querySelector('.text');

let width = box.clientWidth,
    height = box.clientHeight;

console.log("Client " + width);
console.log(height);

// offset (text + padding + scrollBar + border)

let widthOff = box.clientWidth,
    heightOff = box.clientHeight;

console.log("Offset " + widthOff);
console.log(heightOff);

// scroll (text + padding + scrollBar + border)

let widthScr = box.scrollWidth,
    heightScr = box.scrollHeight;

console.log("scroll " + widthScr);
console.log(heightScr);

let button = document.querySelector('.textButton'),
    buttonLeft = document.querySelector('.textLeft'),
    buttonTop = document.querySelector('.textTopText');

button.addEventListener('click', function() {
    box.style.height = box.scrollHeight + 'px';
});

buttonLeft.addEventListener('click', function() {
    console.log(box.scrollTop);
});

buttonTop.addEventListener('click', function() {
    box.scrollTop = 0;
});

// Get position of the element:
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().bottom);

// for the document itself:
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
// scrollTop NOW works in all browsers:
console.log(document.documentElement.scrollTop);

let buttonTopPage = document.querySelector('.textTopPage');

buttonTopPage.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});

// navigation:
// relative from x to y
scrollBy(0, 200);
// absolute of (x,y)
scrollTo(0, 200);


//// Constructor Functions:

//// in ES5f:
// function User (name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hi, ' + this.name);
//     }
// }

// User.prototype.exit = function(name) {
//     console.log('User ' + this.name + ' left website');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.exit();


// in ES6+:
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hi, ${this.name}!`);
    }
    exit() {
        console.log(`User ${this.name} left chat`);
    }
}

let ivan = new User('Ivan', 125),
    alex = new User('Alex', 120);

console.log(ivan);
console.log(alex);

alex.hello();
ivan.exit();

// 4th way:

let user = {
    name: 'John'
};

function sayName(lastName) {
    console.log(this);
    console.log(this.name + lastName);
}

//// 4.1 .call (for a string)
console.log(sayName.call(user, 'Smith'));
//// 4.2 .apply (for anything, incl. an array)
console.log(sayName.apply(user, ['Snow', 'Targarien']));

//// 4.3 .bind (hard method of assignment of context)

function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));

let btnClicked = document.querySelector('button');

btnClicked.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'lightpink';
    // but func inside func - this=window:
    function showThis() {
        console.log(this);
    };
    showThis();
});

