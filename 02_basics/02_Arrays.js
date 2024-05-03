const marvel_heros = ["Spiderman","Ant-Man","Black-Widow"]
const hungama_heros = ["Hattori","Perman","Ann-Pann-Man","Lucky-Man"]

// marvel_heros.push(hungama_heros) push actually performed the action in existing var and return the same 
// console.log(marvel_heros[3][2]);
// const new_heros = marvel_heros.concat(hungama_heros)

// console.log(new_heros);
//concat actually perform the actions but return a new var , so we store it in a New variable

/* Another way to add all elemnts in a array is to spread it  */

const all_heros = [...marvel_heros,...hungama_heros]
// through spreading we add two array into one
// console.log(all_heros);

const myArr1 = [1,2,[3,4],5,[6,7,[8,[9,10]]]]
const myArr2 = myArr1.flat(Infinity)
// console.log(myArr2);

/* converting into Array*/

// console.log(Array.isArray("Aman is here"))
// console.log(Array.from("Aman is here"));

console.log(Array.from({name:"Aman"}));//intersting
// it provide a empty array , since we didnt specify whether we want to change to key or value into arrays

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));