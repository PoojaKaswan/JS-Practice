// let a = 10
// const b = 20
// var c = 30

// {} is considered as scope of function, objects etc
/*
if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// true: JavaScript always enters the block — no evaluation needed. It's 100% guaranteed to run every time.

var c = 40

// console.log(a);
// console.log(b);

console.log(c);

// global scope: acceble from anywhere, eg. var
// block scope: let and const scope that is why programmers doesn't prefer using var

//Nested scope and closures

function one(){
    const username = "Pooja"

    function two(){
        const website = "YouTube"
        console.log(username)
    }
    // console.log(website)

    two()
}

one()

// child function(two) can access parent function(one)

if (true) {
    const username = "hitesh"
    of (username === "hitesh") {
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website): out of scope
}
// console.log(username): out of scope
*/

// +++++++++++++++++++++ interesting +++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5))h

//another way of creating function:
const addTwo = function(num){
    return num + 2
}//variables are strong in js when holding values

console.log(addTwo(5))

/* 

console.log(addone(5)) // here it can used before declaring function

function addone(num){
    return num + 1
}

// console.log(addTwo(5)) // but here it can not be accessed before declaring cuntion

//another way of creating function:
const addTwo = function(num){
    return num + 2
}//variables are strong in js when holding values

*/