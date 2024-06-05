class User {
    constructor(username){
        this.username = username

    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email , password){
        super(username)
        this.email= email
        this.password = password
    }

    addCourse(){
        console.log(`A New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Hitesh", "hitesh@chaicode.com", "1214")

const masalaChai = new User("masalaChai")

// console.log(chai);
// console.log(chai.addCourse());

// chai.logme()
// chai.addCourse()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

masalaChai.logme()
masalaChai.addCourse()// expected => no access to Teacher