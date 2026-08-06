// const tinderuser = new Object()
const tinderuser ={}

console.log(tinderuser);
tinderuser.id=  "123abc"
tinderuser.name= "John"
tinderuser.isLoggedIn= false

// console.log(tinderuser);

const regularuser={
    email: "simmu@example.com",
    fullname: {
            userfullname: {
                firstname: "Simran",
                lastname: "Kannaujia"

            } 
        }        
}
// console.log(regularuser.fullname.userfullname.firstname + " " + regularuser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1,obj2,obj3}
// const obj8 = Object.assign({}, obj1, obj2, obj3)

const obj8 = {...obj1, ...obj2, ...obj3}

console.log(obj8);

const users = [
    {
        id : 1,
    name: "John",
    isLoggedIn: false
    },
    {
        id : 1,
    name: "John",
    isLoggedIn: false
    },
    {
        id : 1,
    name: "John",
    isLoggedIn: false
    },
     

]
users[1].name
// console.log(users[1].name);
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("naabhame"));
console.log(tinderuser.isPrototypeOf("name"));
console.log(tinderuser.valueOf("id"));
console.log(tinderuser.toString ("id"));