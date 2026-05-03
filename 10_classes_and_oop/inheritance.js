class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(this.username) // this has current context of class here
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@tea.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai")
//masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
