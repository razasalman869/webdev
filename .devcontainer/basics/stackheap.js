// Stack : All Primitive data types are falls in stack and (NON primitive) are falls in heap
// In stack give copy of the data, so when you do change it will change in the copy  
let chanel = "hiteshchoudry"
let anotherchanel = chanel

anotherchanel = "chaiaurcode"

console.log(chanel);
console.log(anotherchanel);

// (NON primitive) In heap give reference to the value, so when you change the value it will change the actuall value
let userOne = {
    email: "raza@gmail.com",
    id: 1334,
}

let userTwo = userOne

userTwo.email = "hassan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);