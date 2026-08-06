const marvelHeros = ["iron man ","spider Man","captan America"]

const dc =["batman ", "super man","flash"]

// marvelHeros.push(dc)

// console.log(marvelHeros);

// console.log(marvelHeros[3][1]);


// const allHeros = marvelHeros.concat(dc);
// console.log(allHeros);

const all_new_heros = [...marvelHeros,...dc]
console.log(all_new_heros);

// const anotherarray=[1,2,3,4,5,6,7,[8,9,10,[11,12,13]]]
// const real_anotherarray=anotherarray.flat(infinity)

// console.log(real_anotherarray);

console.log(Array.isArray("hitesh"));

console.log(Array.from("hitesh"));
console.log(Array.from({name: "hitesh"}));

let Score1=100;
let Score2=200;
let Score3=300;

const Scores=Array.of(Score1,Score2,Score3)
console.log(Scores);