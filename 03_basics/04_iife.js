//immedietly invoked function expression


(function chai(){   // named IIFE
    console.log(`DB CONNECTED`); 
    
    //global scope ke jo pollutions hai unko kmm m krne k liye hum IFFE   ka use krte hai hjisse hume baad me koyi problem na ho un veriables se

     
})();

(function aurcode(name){

    console.log(`DN CONNECTED TWO ${name}`);
    
})("abhay")