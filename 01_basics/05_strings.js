const name = "Pooja"
const repoCount = 10

//console.log(name + repo + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Pooja-arc')
//String is a Object and it provides key value pair

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);

console.log(newStringOne.trim());

const url = "https://pooja.com/hitesh%2ydgj1";

console.log(url.replace('%2', '-'));

console.log(url.includes('pooja'));

console.log(gameName.split('-'));