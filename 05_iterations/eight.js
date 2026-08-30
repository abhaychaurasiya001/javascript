const myNum=[1,2,3,4]

// const mytotal=mynum.reduce(function(acc,carrval){
//     console.log(`acc:${acc} and carrval:${carrval}`);
    
//     return acc + carrval
// },0)

const mytotal=myNum.reduce((acc,curr)=>acc+curr,0)


// console.log(mytotal)


const shoppingcart=[
    {
        itemName:"js course",
        price : 999
    },
    {
        itemName:"py course",
        price : 799
    },
    {
        itemName:"mobile dev course",
        price : 7999
    },
    {
        itemName:"data science course",
        price : 13999
    },
    {
        itemName:"node course",
        price : 2999
    },
    {
        itemName:"cpp course",
        price : 1999
    },
]

const pricetopay=shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)