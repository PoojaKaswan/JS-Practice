// Declaring Objects: 2 Types:
//  1. Literals: not singleton
//  2. Constructor: singleton object

//Object Literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Pooja Kaswan",
    [mySymbol]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])//Better way

//console.log(JsUser."full name")
console.log(JsUser["full name"])
console.log(typeof JsUser[mySymbol])

JsUser.email = "hitesh@chatgpt.com"

//Object.freeze(JsUser); //Value can't be changed in object now

JsUser.email = "hitesh@myntra.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Greetings!")
}
JsUser.greetingTwo = function(){
    console.log(`Greetings!, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());