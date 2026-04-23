// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hellow World!"

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    //console.log(`Each char is ${greet}`);
    
}

// Maps : it is an object, unique value, Same order

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key)
    console.log(value)
}

const myObj = {
    game1: "NFS",
    game2: "Valorant"
}

for (const [key, value] of myObj) {
    // console.log(key)
} 

// In this way object is not iterable like Map