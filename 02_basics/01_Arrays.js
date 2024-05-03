// Arrays always create shallow copies - shallow copies share the same reference point ; Deep copy dont follow the same reference point

const myArr =[1,2,3,4,5,6]

const newArr = new Array('Hello', 'Aman','how are you',"i'm fine thank you")
// console.log(newArr[3]);

/* Array Methods */

myArr.push(8)
myArr.push(7)
myArr.pop() // simply remove last element
myArr.unshift(0) // Not good practise , put the element in start
myArr.unshift(-1)
myArr.shift()
myArr.shift() // remove starting element

// console.log(myArr);

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));

const strArr = myArr.join()
// console.log(myArr);
// console.log(strArr);
// console.log(typeof strArr);

/* Slice Splice */
const myn1 = myArr.slice(1,4)
console.log("A ", myArr);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,4)
console.log("B ",myArr);
console.log(myn2);

// with slice :- range doesnot include and org array is not changed

// with Splice :- Range does include BUT MOST IMPORTANT THING IS IT ACTUALLY MANIPULATE THE Array by taking out elements

