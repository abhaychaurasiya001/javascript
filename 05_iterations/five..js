const coding=["js","ruby","python","java"]
// coding.forEach( function (item){
//     console.log(item);
    
// })


// coding.forEach( (item)=>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

const myCoading=[
    {
        languageName: "python",
        languagefilename:"py"

    },
    {
        languageName: "java",
        languagefilename:"js"

    },
    {
        languageName: "css",
        languagefilename:"csss"

    },
    {
        languageName: "ruby",
        languagefilename:"rb"

    },
    {
        languageName: "c",
        languagefilename:"cgggg"

    },
]

myCoading.forEach((item)=>{

    console.log(item.languageName);
    console.log(item.languagefilename);
    
})