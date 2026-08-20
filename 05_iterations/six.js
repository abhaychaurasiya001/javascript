// const coding=["js","ruby","python","java"]


// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,9]

// const newnums= myNums.filter((num)=>{
//     return num>4
// })

// const  newnums =[]

// myNums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);

const books =[

  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Sixxxxxxxxxxxxxxx', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Boooooooook Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }

];

const userbooks=books.filter((book) => book.genre==="Fiction");

let Userbooks=books.filter((book)=>book.publish>=1985 && book.genre==="Fiction")
// console.log(userbooks);
console.log(Userbooks);
