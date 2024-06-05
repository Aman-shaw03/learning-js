// After ES6 classes are syntactical sugar for developer moving from More OOP based languages like  "JAVA"

// class User {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password} abcsvhd`
//     }

//     capitalizeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("Aman", "Aman@gmail.com", "5234")

// console.log(chai.capitalizeUserName());
// console.log(chai.encryptPassword());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;   
}

User.prototype.encryptPassword = function(){
    return `${this.password} abcsvhd`
}
User.prototype.capitalizeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const latte = new User("latte", "latte@gmail.com", "layeeee")

console.log(latte.capitalizeUserName());
console.log(latte.encryptPassword());
