// primitive type also known as call by value
// when we ask for primitive data type from memory , its gives us a copy of the data , not the reference address into the memory of the data

// types of primitive 
/* 
    string, number , Boolean , null, undefined ,symbol, BigInt
*/
const score = 100
const decscore = 100.5
const isLoggedIn = true
const outsideTemp = null
// let userEmail = undefined
let userEmail;
const id = Symbol('231')
const anotherId = Symbol('231')

// console.log(id === anotherId);
// false as type is different

// non-primitive / call by reference 
/*
    so when we call a Non primitive data type , it will provide to us as a reference to the memory add where it is stored
*/

// types : array/list , objects/dict, Functions

let heros = ["Iron Man", "Captain America","Hulk"]
let Myobj = {
    name: "Aman",
    age: 24,
    alive: false
}

const Myfunc = function(){
    console.log("Hello world!");
}
// Myfunc()
console.log(typeof id);

// non primitive => object
// non primitive functions() => function object