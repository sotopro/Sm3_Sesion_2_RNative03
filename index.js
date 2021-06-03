
// declare / initialize greeting function
function greet(name) {
    console.log(`Hello, ${name}`);
}

greet('Luis');

// function add(x,y) {
//     return x + y
// }

// const sum = add(9,5);

// const sum = function (x,y) {
//     return x + y;
// }

// console.log('sum', sum(20,5));

// arrow function 

const sum = (x,y) => ({ result: x + y });

// const sum = (x,y) => { 
//     return {
//         result: x + y 
//     }
// };


console.log('sum', sum(20,5));

const mutiply = (x, y) => x * y;


console.log('mutiply', mutiply(2,2));

// const square = (x) => {
//     return x * x;
// }

// const square = x => x * x;

const square = (x) => {
    if (typeof x === 'number' && x) {
        return x * x;
    } else if(typeof x !== 'number') {
        return 'Parameter is a number'
    } else {
        return 'Parameter is required!'
    }
}

console.log('square', square(0));

const printNumber = {
    phrase: 'The current number value is:',
    numbers: [1,2,3,4],
    loop(){
        // Bind the `this` from printNumber to the inner forEach fuction
        // this.numbers.forEach(function (number) {
        //     console.log(this.phrase, number)
        // })
        // this.numbers.forEach(
        //     function (number) {
        //         console.log(this.phrase, number)
        //     }.bind(this),
        // )
        this.numbers.forEach((number) => {
            console.log(this.phrase, number);
        })
    }
    // loop: () => {
    //     this.numbers.forEach((number) => {
    //         console.log(this.phrase, number)
    //     })
    // }
}

printNumber.loop();

// function myFunction () {
//     this.peer = 5;
// }

// const instance = new myFunction;

// console.log(instance.peer)

// console.log(myFunction.prototype)

// const myArrowFunction = () => {};

// const arrowInstance = new myArrowFunction();

// console.log(arrowInstance)

// console.log(myArrowFunction.prototype)

let x = true;

function hoist() {
    if(3 === 4) {
        let x = false
    }

    console.log(x)
}

hoist();
console.log(this)

// function Country(name, yearFounded) {
//     this.name = name;
//     this.yearFounded = yearFounded

//     this.describe = function() {
//         console.log(`${this.name} was founded in ${this.yearFounded}.`)
//     }
// }

// const america = new Country('The United States of America', 1776);

class Country {
    constructor(name, yearFounded) {
        this.name = name;
        this.yearFounded = yearFounded;
    }

    describe() {
        console.log(`${this.name} was founded in ${this.yearFounded}.`)
    }
}

const america = new Country('The United States of America', 1776);

america.describe();

// A DOM Event handler

// const button = document.createElement('button');

// button.textContent = 'Click me';

// document.body.append(button);

// button.addEventListener('click', function(event) {
//     console.log(event)
// })

const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley'
}

function summary() {
    console.log(`${this.title} was written by ${this.author}`)
}

function printThis() {
    console.log(this);
}

summary.call(book);
summary.apply(book)


printThis.call(book);
printThis.apply(book)

function longerSummary(genre, year) {
    console.log(`${this.title} was writter by ${this.author}. It is a ${genre} novel written in ${year}`)
}

longerSummary.call(book,'dystopian', 1932 )
longerSummary.apply(book,['dystopian', 1932] )


// const button = document.createElement('button');

// button.textContent = 'Click me';

// document.body.append(button);

// class Display {
//     constructor(text) {
//         this.buttonText = text

//         button.addEventListener('click', event => {
//             event.target.textContent =  this.buttonText
//         })
//     }
// }

// new Display('Thanks you!');

// const changeText = () => {
//     const p = document.querySelector('p');

//     p.textContent = 'I changed beacuse of an inline event handler'
// }

// const button = document.querySelector('button');

// button.onclick = changeText;


const changeText = () => {

    const p = document.querySelector('p');
    
    p.textContent = "I changed because of an event listener"
}

// const alertText = () => {
//     alert('Will I alert?')
// }
// const button = document.querySelector('button');

// button.addEventListener('click', changeText)
// // button.onclick = changeText;
// // button.onclick= alertText;

// document.addEventListener('keydown', event => {
//     console.log(event)

//     console.log(`key ${event.keyCode}`)
//     console.log(`key ${event.key}`)
//     console.log(`key ${event.code}`)


// })

document.addEventListener('keydown', event => {
    let element = document.querySelector('div');
    console.log('event', event.code)
    let a = 'KeyA';
    let s = 'KeyS';
    let d = 'KeyD';
    let w = 'KeyW';

    switch(event.code) {
        case a:
            element.textContent = 'Left'
            break;
        case s:
            element.textContent = 'Down';
            break
        case d:
            element.textContent = 'Right'
            break;
        case w:
            element.textContent = 'Up'
            break
        default:
            element.textContent = 'Error'
    }
})