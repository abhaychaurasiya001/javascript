// for loop

for (let i = 0; i < 10; i ++) {
    const element = i;
    if (element==5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}
 

for (let i = 5; i <= 20; i++) {
    //  console.log(`outer loop value : ${i}`);
     
    for (let j = 5; j < 20; j++) {
    //    console.log(`outer loop value: ${j} and inner loop value ${i}`);
    //    console.log(i+'*'+j+' = '+i*j);
       
        
    }
    
}


MyArray =["flash", "superman" , "Batman"]
// console.log(MyArray.length);

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
}


// // break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i==5){
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i is ${i}`);
    
// }


for (let i = 1; i <= 20; i++) {
    if (i==5){
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is ${i}`);
    
}