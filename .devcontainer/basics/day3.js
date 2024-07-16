// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// // const score = 100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail;

// // const id = Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// // const heros = ["shaktiman", "naagraj", "doga"];
// // let myObj = {
// //     name: "hitesh",
// //     age: 22,
// // }

// // const myFunction = function(){
// //     console.log("Hello world");
// // }

// // console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3


// // ------------------------------------

// const num1 = 2323
// const str = "stdfjj"
// const bool = true
// const score = null
// let email;

// let array1 = ["apple", "banana", "cherry"]

// let obj1 = {
//     name: "salman",
//     age: 19,
//     email: "salman@gmail.com"

// }
// let myFunction1 = function(){
//     console.log("Hello world");
// }
// console.log(typeof num1);
// console.log(typeof str);
// console.log(typeof bool);
// console.log(typeof score);
// console.log(typeof email);
// console.log(typeof myFunction1);
// console.log(typeof obj1);
// console.log(typeof array1);

// If-Else statement: task1

let num1 = 10

if (num1 > 0) {
    console.log("Number is positive");
} else if (num1 == 0) {
    console.log("Number is Zero");
} else {
    console.log("Number is negative");
}
// Task2:

let age = 18

if (age >= 18) {
    console.log("You can Vote");
} else {
    console.log("You cannot Vote");
}

// Nested if-else statement:

let a = 5
let b = 7
let c = 6
if (a >= b) {
    if (a > c) {
        console.log("largest no A ", a);

    } else {
        console.log("largest no C ", c)
    }
} else {
    if (b >= c) {
        console.log("largest no B ", b);
    } else {
        console.log("largest no C ", c);
    }
}

// Switch Statement 

let day = 3
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        day = "Invalid day number";
}


// Task2:

let score = 60
switch (true) {
    case (score >= 80):
        console.log('A');
        break;
    case (score >= 70 && score < 80):
        console.log('B');
        break;
    case (score >= 60 && score < 70):
        console.log('C');
        break;
    case (score >= 40 && score < 50):
        console.log("D");
        break;
    case (score < 40):
        console.log('F');
        break;
    default:
        console.log("Invalid number");
}

// Ternary Operator:

let num2 = 7

let result = (num2 % 2 == 0)? "Number is Even ": ("number is odd")
console.log(result);

// Combining Conditions:

let year = 2024;  

let isLeapYear = false;

if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
