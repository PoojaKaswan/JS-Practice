/* 

----------Parts of OOP -----------
Object literal

- Consutructor function
- Prototypes
- Classes
- Instances (new, this)

4 Pillars
Abstraction
Excaspulation
Inheritance
Polomorphism

*/

// Object literal"

const user = {
    username: "Pooja",
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log(`${this.username}`)
        console.log(this)
    }

}
// console.log(user.username)
// console.log(user[username]) <= another way
// console.log(user.getUserDetails())
// console.log(this)

// Constructor function:

// const promiseOne = new Promise() // new here is a contructor function: it allows multiples instances with a object
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this // optional
}

const userOne = new User('Pooja', 12, true)
const userTwo = new User("ChaiAurCode", 78, false )
console.log(userOne.constructor)
// output: 
// {
//   username: 'ChaiAurCode',
//   loginCount: 78,
//   isLoggedIn: false
// }
// Value is override without using new keyword
// const userOne = User('Pooja', 12, true)
// const userTwo = User("ChaiAurCode", 78, false )
// with using "new" keyword it wouldn't happen
// console.log(userOne)
//

// new: 
// 1. 1st empty object created called instance
// 2. constructor function called(packs arguments)
// 3. all the arguments inject in this keyword
// 4. Gives output

//instanceof