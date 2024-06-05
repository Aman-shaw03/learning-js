// Interview Question- we know that Math.pi holds the pi value which is something 3.1415.. but can we change it to 4 and why we cant?

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// value remains the same

// every object has its own property , we can access it with 

const descriptors =  Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptors);

// result is
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// so the "writable" stops us from editing the value and this object property is so deep rooted hard code with many "checks" and since we have implementation of core js engine in our node enviroment / window browser , so we can overwrite it but it will still result in false due to hard wired coding checks.

// so can we use these property for our own object through framework/library

// we can set our Objects property using property flags and overwrite them like we can make our objects not enumerable

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderchai: function(){
        console.log("Chai na ba");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// how to set our own Object properties

Object.defineProperty(chai,"name",{
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        
        console.log(`${key} : ${value}`);
    }
}

// result => TypeError: chai is not iterable. to tackle this use Object.entries=> it will fail if we have like a function inside our Object (which is very common in real life cases)

// result would be => orderchai : function(){
    //     console.log("Chai na ba");
    // }
    // to tackle this use checks like "if" statement => if (typeof value !== "function")

        // there is so much to Objects in js that alone a dropdown in browser wont provide much