
function sayMyName(){
    console.log("P");
    console.log("o");
    console.log("o");
    console.log("j");
    console.log("a");
}

// sayMyName: reference
// sayMyName(): execution
// sayMyName()

/*function addTwoNumbers(num1, num2){
    //num1 & num2: parameters
    console.log(num1 + num2);
}*/
function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
    //nothing can be printed after return
}

const result = addTwoNumbers(3, 4)
//3 & 4: arguments

//console.log(result); 

function loginUserMessage(username = "sam"){//sam default value when no value passed
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())

const obj1 = {
    name: "bittu",
    id: 753759
}

function callObjs(anyObj){
    console.log(`user name is ${obj1.name} and id is ${obj1.id}`)
}

//callObjs(obj1)

//another way to pass object values from function:

callObjs({
    username: "sam",
    price: 623
})

const myNewArray = [200, 800, 400, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200, 300]))