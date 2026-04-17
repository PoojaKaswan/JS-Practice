/*//const tinderUser = new Object/() // Singleton object
const tinderUser = {} // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Samy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmsil.com",
    fullname: {
        userfullname: { 
            fname: "Pooja",
            lname: "kaswan"
        }
    }
}

//console.log(regularUser.fullname.userfullname.fname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj4 = Object.assign({}, obj1, obj2)// {}: target object, obj1 and obj2: source objects. If we don't provide target object, then obj1 will be target object and obj2 will be source object. So, obj1 will be mutated. To avoid that, we can provide empty object as target object. 

const obj3 = {...obj1, ...obj2}

//console.log(obj3)
//console.log(obj1)
console.log(obj3)

const objsInArr = [
    {
        id: 1,
        name: "Pooja"
    },
    {
        id: 2,
        name: "Samy"
    },
    {
        id: 3,
        name: "John"
    }
]

console.log(objsInArr[0].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //to find if object has particular property

*/

//Object de-structure

const course = {
    coursName: "js in hindi",
    price: "999",
    courseIntructor: "hitesh"
}

//course.courseIntructor

const {courseIntructor: instructor} = course //Changed courseIntructor long name into small instructor name

console.log(instructor);


const navbar = () => {

}

navbar(company = "Pooja")