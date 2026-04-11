let score1 = "33"
let score2 = "33a"

let valueInNUmber1 = Number(score1)
let valueInNUmber2 = Number(score2)

console.log(typeof valueInNUmber1);
console.log(valueInNUmber1);

console.log(typeof valueInNUmber2);
console.log(valueInNUmber2);


let und = undefined

let undInNumber = Number(und)

console.log(typeof undInNumber);
console.log(undInNumber);


let nul = null

let nulInNumber = Number(nul)

console.log(typeof nulInNumber);
console.log(nulInNumber);


let bol = true

let bolInNumber = Number(bol)

console.log(typeof bolInNumber);
console.log(bolInNumber);

//"33" => 33
//"33abc" => Nan
//true => 1, false => 0
//undefined => Nan

let isLoggedIn = "Pooja"

let booloanIsloggedIn = Boolean(isLoggedIn)

console.log(typeof (booloanIsloggedIn))
console.log(booloanIsloggedIn)

// 1 => true; 0 => false
//"" => false
//"Pooja" => true

let num = 22

let stringNum = String(num)

console.log(typeof stringNum);
console.log(stringNum);