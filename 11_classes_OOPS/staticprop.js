class User {
    constructor(username){
        this.username = username

    }

    logme(){
        console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const chai = new User("chai")

// console.log(chai.createId());

// many times we dont want to give access to our function (createId) to everyobject that instanciate from this class => so we Use STATIC

class Teacher extends User{
    constructor (username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("Iphone", "i@phone.com")

iphone.logme()

// console.log(iphone.createId());

// so with STATIC => iphone.createId is not a function , so it dont give access to child also and also parent 