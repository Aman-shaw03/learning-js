//interview Q. singleton or not?
/* if we create a Js object literal way => its not a singleton (kinda unique in his way)
but if we create a object using a constructor => its a singleton
*/
// this is using constructor
// Object.create()

// object literals

const mysym = Symbol("key1")

const juser = {
    name: "Aman",
    "full name": "Aman shaw",
    age: 24,
    [mysym]: "My symbol1",
    Below_30: true,
    movies: ["3 Idiots","Tare Zameen par"],
    email: "Aman@google.com"
}
// console.log(juser.email);
// console.log(juser["email"]);
// two ways to call a key value
// but if we declare a key as a string , then only way to call it is using [""] way...try it

//Interview Q. declare a symbol and put it into the Object as a key 

// i have declared the symbol , but couldnt put it into object as a key
// problem is how you declare it:- mysym => wrong , [mysym] => right

// console.log(juser["full name"]);
// console.log(juser);

// to freeze a object from Manipulation , we can freeze it no changes can be made to it 

juser.email="aman@hotmail.com"
// console.log(juser);

// Object.freeze(juser);
juser.email="aman@microsoft.com"
// console.log(juser);

/* now add a function inside a Object , and reference a variable which is already in the same object */

juser.greeting = function(){
    console.log("Hello user , welcome you have created a function inside a Object");
}
juser.greetingtwo = function(){
    console.log(`Hello ${this.name} , this is referencing var inside a Object `);
}

console.log(juser.greeting());
console.log(juser.greetingtwo());
