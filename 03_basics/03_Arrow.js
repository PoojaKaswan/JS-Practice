const user = {
    username: "Pooja",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`) // this: current object's value refer
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam" // sam context channged
// user.welcomeMessage()

// console.log(this); //  no context in node

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this doesn't work in function
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); 
// }
const chai = () => {
    let username = "hitesh"
    console.log(this); 
}
// chai()

// Arrow function: () => {}
// Eplisit return: meaning with return:
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//implisit return:
//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)//when () used: no need to write return but with {} we need to return

const addTwo = (num1, num2) => ({username: "Pooja"})//Object need {}

console.log(addTwo(2, 7))

// const myArray = [2, 3, 4, 5, 6]
// Many ways where function and arrow could be seen used differently 
// myArray.forEach(() => ())
// myArray.forEach(function() {}))
// myArray.forEach(() => {})