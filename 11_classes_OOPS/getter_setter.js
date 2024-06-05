// we will learn about Getter and setter

class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toLowerCase()
    }

    get password(){
        return `${this._password}Aman`.toLowerCase()
    }
    
    set password(value){
        this._password = value.toUpperCase()
    }
}

// sometimes we would that some of our property(email,password in this case) values will not be access or some type of encryption to value beforepassing it to user so we use getter and setter

// usually every property has its default get , set (as a method) but if we explicitly set "get" then we have to set "get" also

// if we set only "get" and not "get" => Cannot set property password of #<User> which has only a getter

// a new error has been thrown => RangeError: Maximum call stack size exceeded
// reason for this error is since both "constructor" and "get password " are setting the value of password , so the call stack size has been reached .since both are performing action on same property , to tackle this => just slightly change the name of the variable inside the "set passoword" => "this._password"

// now error => RangeError: Maximum call stack size exceeded
    // at get password , so we hav to change name at "get" same lik "set" , also we can get the value and perform actions at "get" which cant be access outside of class and cant be change by the "set"

    // also get set act as a private property inside a class, and get always return something and set never returns

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);