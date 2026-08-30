const useremail = []
if (useremail){
    console.log("Got user email");
    
} else {
    console.log("don't get user email");
    
}


// if (useremail.length===0){
//     console.log("array is empty");
    
// }


const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}

// Nullish coalescing Operator(??):null undefined

let val1;
// val1=5 ?? 10
// val1= null ??10

// val1= undefined??15

val1= null??10??20



console.log(val1);


// ternary operator

// condition ? true:false

const iceTeaPrice=100;
iceTeaPrice<=80? console.log("less than 80"):console.log("more than 80");
