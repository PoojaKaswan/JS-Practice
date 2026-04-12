//Two types od Data Types: Primitive and Reference(Non-Primitive)

//Primitive: string, number, boolean, null.], undefined, symbol, BigInt: 7

//JS => Dynamically typed language
//js: let num = 5 => number
//C++: int num = 5 =>

const score = 49
const winningChances = 69.69

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 9007199254740991n

//Reference(Non-Primitve): Array, Object, Function

const heros = ["Iron Man", "Thor", "Hulk", "Captain America"]

let myObj = {
    name: "Bruce Wayne",
    age: 35,
    isBatman: true
} //Data in curly braces is called Object Literal

const myFunction = function(){
    console.log("Hello, World!");
}


console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-Primitive)

let myName = "Pooja"

let MySisName = myName
mySisName = "Vidya"

console.log(myName);
console.log(mySisName);

let user1 = {
    email: "user1@gmail.com",
    upi: "abcd@ybl"
}

let user2 = user1

user2.email = "user2@gmail.com"

console.log(user2);

//Stack Memory = It copied from another variable
//Heap Memory = It took reference from another variable