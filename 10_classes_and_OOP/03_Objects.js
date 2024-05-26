function multiplyby5(num){
    return num * 5
}
multiplyby5.power = 8

console.log(multiplyby5(10))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

// as we see Arrays and string are Objects in JS , but functions are also the Objects in JS , it works like a functions but also has the methods and functions of a Object

// Arrays => object => null
// strings => object => null
// functions => object => null

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.printme = function (){
    console.log(`Price of ${this.username} is ${this.score}`);
}

createUser.prototype.increment = function (){
    this.score++ 
}

const chai = new createUser("chai", 50)

const latte = new createUser("Latte", 250)

chai.printme()
latte.printme()
// expected:- Cannot read properties of undefined Since we didnt use "New" so it didnt create a new instance rather it uses createUser (old one which didnot have the new functions) When you call a function without new, JavaScript creates a temporary object context (often the global object) and executes the function's code within that context. However, this temporary context doesn't have the printme or increment methods defined on it.

// this => Jis


/* some Info */
/*

Here's what happens behind the scenes when the "new" keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

{this Binding: Inside the createUser function (when called without new), the this keyword refers to this temporary object context. Since the function itself doesn't create any properties or methods directly on this, this remains empty.}

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/