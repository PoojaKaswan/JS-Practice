const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "Swift by apple"
}

// Using forin loop we can iterate object

for (const key in myObject) {
    // console.log(`${key} short cut is for myObject[key]`); 
}

const programming = ["js", "ruby", "cpp"]

for (const key in programming) {   
    console.log(key) // Arrays keys are its numbers from 0
    console.log(programming[key]) // Objects keys are defined by programmers
}

const map = new Map()
map.set('IN', "india")

for (const [key, value] in map) {
    console.log(key) // map is not iterable
}