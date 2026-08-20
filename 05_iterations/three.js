// for of loop

// [" "," "," "]

const arr = [ 1,2,3,4,5,6,7]

for(const num of arr){
    // console.log(num);
    
}

const greetings = "hello_world"

for (const greet of greetings){
    if(greet== " "){
        // console.log("space");
        
    }
    // console.log(`each character is ${greet}`);
    
}

//maps

const  map = new Map()
map.set('IN',"INDIA")
map.set('USA',"united state of america")
map.set('FR',"France")
map.set('USA',"united state of america")
map.set('FR',"France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
    
    
}

// const myObject ={
//     'game1':'NFS',
//     'game2':'bgmi'
// }
// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
    
    
// }
