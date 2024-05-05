// const tinderuser = new Object()
// singleton object
const tinderuser = {}

tinderuser.id ="123abc"
tinderuser.name = "Aman"
tinderuser.isLoggedIn = false
tinderuser.age = 24
// console.log(tinderuser);

const regularUser = {
    email: "aman@shaw.com",
    fullname: {
        username: {
            firstName : "AMan",
            lastName : "Shaw"
        }
    }
}

// console.log(regularUser.fullname.username);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj3 ={5:"a",6:"b"}

// how to assign all 3 Object in 1 object.

const obj4 = Object.assign({},obj1,obj2,obj3)
// Object.assign takes 2 values target and sources , its good practise to give {} as source --so it will assign all obj to that empty {} and then assign it to obj4

// best way to assign is to use SPREAD

const obj5 = {...obj1,...obj2,...obj3}
// console.log(obj4);
// console.log(obj5);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// all the results are in Array

//check whether a object has a specific Key
// console.log(tinderuser.hasOwnProperty("age"));

/* Deconstruct Object */

const course = {
    Name : "Blockchain Fundamentals",
    Price : "349",
    coursePartner : "Edu91"
}
console.log(course.coursePartner); // one way to call a value

const {coursePartner} = course
console.log(coursePartner); 
/* Industry approach to Deconstruct Object, Now another way to shorten the name */

const {coursePartner: Partner} = course

console.log(Partner);

/* All this are json data format */
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]