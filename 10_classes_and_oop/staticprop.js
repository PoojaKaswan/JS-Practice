class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){ // static keyword stops access
        return `123`
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const school = new Teacher("KV", "mentor@kv.com")
school.logMe()
school.createId()