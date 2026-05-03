let myName = "Pooja   "

// console.log(myName.trim().length)
// console.log(myName.trueLength);

let myHeros = ["thor", "ironman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`'Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.pooja = function(){
    console.log(`Pooja is present in all objectss`)
}

Array.prototype.heyPooja = function(){
    console.log(`Pooja says Hey`)
}

// heroPower.pooja()
myHeros.pooja()
myHeros.heyPooja()
console.log(myHeros)

// inheritance

const user = {
    name: "chai"
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Above approach is outdated

// Modern approach
Object.setPrototypeOf(teachingSupport, teacher)
// Prototypel inheritance: teachingSupport has access of teacher properties now

let anotherUsernsme = "chaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}
anotherUsernsme.trueLength()
"hitesh".trueLength()
