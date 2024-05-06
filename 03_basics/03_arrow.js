const user={
    username: "Aman",
    price: 679,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

/* inside a object if we use "this" it will take context of the variables of object, but what if we use this outside of any object */

console.log(this);

// when we use this outside a object in node => showing empty object{}
//but when we use this in windows console => its show a globalObject named "window"

/* but can we use "this" in a function?  */

function test(){
    let name = "Aman"
    // console.log(this.name);
    console.log(this);
}
// test()

/* we find that inside a function if we use this => its shows us the all Global objects,


but if want to take context of variable inside a function => result is Undefined*/

const test2 = function(){
    let name = "Aman"
    console.log(this.name);
    console.log(this);

}
// test2()

// result will be same , if we declare function like this 

const test3 = () => {
    let name = "Aman"
    // console.log(this.name);
    // console.log(this); // result is empty string for both and it didnt give context and didnt even show global object

}

/* This is now a arrow function "const myFunc = ()=>{}"  */

/* basic arrow function */

// const add2sums = (nums1,nums2)=>{
//     return nums1 + nums2
// }


// this is explicitly using return

// console.log(add2sums(3,5))


/* different way of writing arrow function */
// const add2sums = (nums1,nums2)=> nums1 + nums2 // implicit return
// const add2sums = (nums1,nums2)=> (nums1 + nums2) // implicit return with parenthesis
const add2nums = (nums1,nums2)=> ({username: "Aman"}) // implicit return with parenthesis specially only for Objects

