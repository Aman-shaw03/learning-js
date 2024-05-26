// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

// target is to create a Method "truelength"

const myHeros = ["teen-titans", "Lucky-Boy", "Ann-pan-Man"]

const heroPower = {
    teen_titans : "FriendShip",
    lucky_boy : "Lucky Cookie",
    Batman  : "Money",

    getBestPower : function(){
        console.log(`Batman power is ${this.Batman}`);
    }
}

Object.prototype.helloAMan = function(){
    console.log(`Hello AMAN is now in properties`);
}
// heroPower.helloAMan()
// myHeros.helloAMan()

// since every array , string , function is a Object , we create our function (helloAMan) on the base of Object 

// can we create that is specific to Array and not Objects and strings?

Array.prototype.heyAman = function(){
    console.log(`Aman sends his Greetings`);
}

// what is does is => it create a function for arrays level , but this function access i not granted to its superclass or Objects

// myHeros.heyAman()
// heroPower.heyAman()  // expected  heroPower.heyAman is not a function

/*--------Inheritance-------------- old syntax */

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

// console.log(TeachingSupport.fullTime);// so TASUPPORT has connection to TeachingSupport and can access his methods but TeachingSupport dont have access to TASUPPORT

// console.log(User.makeVideo);

// Modern syntax

Object.setPrototypeOf(User, TASupport)
// now user has access to prototype of TASUPPORT

// console.log(User.makeAssignment);

myNewArray = "ASentenceOfText       "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length of the Arrays is: ${this.trim().length}`);
}
myNewArray.truelength()

"RandomText  ".truelength()
"SadaKaru tera ".truelength()
"mai-tera mai-tera mai-tera mai-tera mai-tera".truelength()
