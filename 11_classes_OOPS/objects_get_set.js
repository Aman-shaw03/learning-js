// rarely used syntax of get and set with object like this

const User= {
    _email: "h@hc.com",
    _password: "1234",
// while using "_" it makes the property a private one which cant be access outside of object, and it will not create Race scenario in call stack


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }


}

// if constructor uses private properties and get+set use private properties (_email, _password) , it will not maximise the call stack size

// const chai = new => constructor function
// const chai = Objejct.create() => factory function, either take a Object and create its instance , or also take Null and create a empty Object

const tea = Object.create(User)

console.log(tea.email);

//  in the above log we are accessing tea.email not tea._email as it is accessing the get method which is behind the scene treated as a property in this Object , so get took the value from memory => overwrite/perform actions and returnig it and with set also acts as a property not a method behind the scene so , it take a value from user and set it

// get took the value from here "_email: "h@hc.com",
    // _password: "1234"," in memory 

    //in arrays we use "length" => behind the scene getter and setter are actually taking the arrays and performing actions(loop) and set the length as per it 

    // we are actually interacting with getter and setter only and not _email which is a private property 

    // so with variable (property name _email/_password) name and getter setter method (email, password) are always same so the org prop stays private and all the getting from memory and storing it done by methods from get set which are overtaking them , but we can also access private property with tea._email ..=> that is the reason call stack size has been maximised 