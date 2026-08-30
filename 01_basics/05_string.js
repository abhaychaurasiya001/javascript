const name = "abhay"
const repocount = 50

// console.log(name+repocount+"value")

// console.log(`my name is ${name} and my repo count is ${repocount} and so on`)

const gamename =new String('Call of Duty');

// console.log(gamename[0])
// console.log(gamename.__proto__ )



// console.log(gamename.length)

// console.log(gamename.toUpperCase())

console.log(gamename.charAt('0'))
console.log(gamename.indexOf('t'))



const newString = gamename.substring(0,4)
console.log(newString)



const anotherString = gamename.slice(-9,4)
console.log(anotherString)

console.log(newStringOne = '   abhay    ')
console.log(newStringOne);

console.log(newStringOne.trim())

const url = "https://abhay.com/hello%20world"

console.log(url.replace("%20", "_"))

console.log(url.includes("abhay"))

console.log(gamename.split('-'))