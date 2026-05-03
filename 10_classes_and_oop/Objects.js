// javascript's default behaviour is prototypel behaviour(it doesn't give up, it tries to reach parent, grandparent or more until it gets null value )
// Protoype gave us acces of new keyword working, classes, this keyword, protoypel inheritance or inheritance


function multipleBy5(num){
    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

// Thats how you know that in Javascript everything is a object at the end

function createUser(username, score){
    this.username = username // currect context set using this
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`${this.score}`)
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()