// for of loops

let myArr = [1,2,3,4,5,6,47,8,9]

for (const val of myArr) {
    // console.log(val);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`The word of the day is ${greet}`);
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")
map.set('FR', "France")

for (const [key , value] of map) {
    // console.log(key , ":-", value);
}
//importand syntax [key , value]

// can we iterate like map on a normal object

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {
    // console.log(key , ":-", value);
}
//TypeError: myObject is not iterable => hmm, we will learn it later