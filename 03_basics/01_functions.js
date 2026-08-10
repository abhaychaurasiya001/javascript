// function sayMyName(){
//     console.log("h")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("h")
// }
// sayMyName()




// function addTwoNumbers(number1,number2){
// console.log(number1+number2);
// }


// =========/// it will gives the undefined value for 

addTwoNumbers(5,7)
addTwoNumbers(5,"7")
addTwoNumbers(5,null)

// const result = addTwoNumbers(5,7)
// console.log("Result: ",result );

function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result    
    // console.log("abhay");
    return number1 + number2
}


const result = addTwoNumbers(5,7)

// console.log("Result: ",result );


function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("plese Enter an username")
        return
    }

    return `${username} just logged in`
}

// console.log( loginUserMessage("abhay")); // abhay just logged in...



// console.log( loginUserMessage(""));    // when no value will passed it will give only remaning output...."just logged in"


// console.log( loginUserMessage());
// when there will no any value type then it will gives undefined .........."UNDEFINED just logged in"


function calculateCartPrice (val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,100,140,500));
const user ={
    username:"abhay",
    price : 299
}
function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
// handleObject({
//     username: "sam",
//     price:399
// }) 


const myNewArray=[200,400,500,800]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,500,800]));
