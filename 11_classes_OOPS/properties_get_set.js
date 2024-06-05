// learning other syntax of getter and setter (functional syntax)

function User (email, password){
    this._email = email;
    this._password = password
    
    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, "password", {
        get: function(){
            return this._password
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@tea.com", 1234)

console.log(chai.email);
console.log(chai.password);

// this is mostly used in older code base
// currently 95% preferred class based syntax of get , set