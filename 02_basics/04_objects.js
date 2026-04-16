//const tinderUser = new Object() // Singleton object
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
const obj4 = Object.assign({}, obj1, obj2)// {}: optional 

//console.log(obj3)
console.log(obj1)