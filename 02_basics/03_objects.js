//singeltion

//objects literals

const mysym = Symbol("key1")

const JsUsers = {
    name: "John",
    "fulll name": "John Doe",
    mysym:"myKey1",
    age: 30,
    email: "john@example.com",      
    loggedIn: true,
    lastLoginDay: ["Monday", "Tuesday", "Wednesday"],   

}

console.log(JsUsers.name);
console.log(JsUsers.age);
console.log(JsUsers["fulll name"]);
console.log(JsUsers.email);

console.log(JsUsers[mysym])

JsUsers.age=35;
// Object.freeze(JsUsers);
JsUsers.age=40;
// // console.log(JsUsers)   ;



JsUsers.greating = function(){
    console.log('Hello Js Users');
}   
JsUsers.greatingTwo = function(){
    console.log(`Hello Js Users, ${this.name}`);
}   


console.log(JsUsers.greating());
console.log(JsUsers.greatingTwo());