//dates

let myDates = new Date();
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toTimeString());
// console.log(myDates.toLocaleString()); 
// // console.log(typeof myDates);

// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate2 = new Date("2023-01-23 05:03:00")
// console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));


let newDate =new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())


newDate.toLocaleString('default',{
    weekday:"long",
    

})