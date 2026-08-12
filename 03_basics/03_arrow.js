const user ={
    username :"abhay churasiya",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this);


    }


}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function Chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }
// Chai()


// const Chai=function (){
//     let username = "hitesh"
//     console.log(this.username)
// }
// Chai()



// const Chai = ()=>{
//     let username = "hitesh"
//     console.log(this)
// }
// // Chai()

// const AddTwo =(num1 , num2)=>{
//     return num1 + num2
// }


// const AddTwo =(num1 , num2)=> num1 + num2
// const AddTwo =(num1 , num2)=> (num1 + num2)
const AddTwo2 =(num1 , num2)=> ({username:"abhay"})


console.log(AddTwo2(3,5));
