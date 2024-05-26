const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);


function User (username, logInCount, isLoggedin){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedin = isLoggedin

    return this
}

const userOne = new User("AMan", 24 , true)
const userTwo = new User("Brahman", 4 , false)
console.log(userOne instanceof User);
console.log(userOne.constructor); // expected [Function: User]
// console.log(userTwo);

// working of "new" => first create a empty instance => put all the parameters => put all the "this" and assign it => creates a bundle and give it to us