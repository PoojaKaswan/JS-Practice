function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        }, 
        set: function (value){
            this.email = value
        }
    })
}
const chai = new User("chai@chai.com", "6521")
console.log(chai.email)