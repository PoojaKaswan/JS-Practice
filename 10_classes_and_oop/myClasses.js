// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("Chai", "chai@exa,ple.com", "123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername())

// Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const chai = new User("Chai", "chai@exa,ple.com", "123")
console.log(chai.encryptPassword());