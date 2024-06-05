function setUserName (username){
    // DB calls
    this.username = username
    console.log("Called");
}

function createUser (username, email, password){
    // setUserName.call(username)
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Aman", "aman@google.com", "123")

console.log(chai);
// we can see that even though setusername is getting called but still it dont hold the reference(variable , results after execution stored) to the username . rather it getting called and the execution context is remove after that

// email: 'aman@google.com',
// password: '123' => result

// so the thing is ( with this.username = username and setUserName.call(username)) setUserName is currently using his currentContext so after getting called it remove it without holding reference

// solution for this => we have to give the current context of createUser to setUserName by (setUserName.call(this,userName)) by this now setUserName will use the context of setUserName and will hold the reference 

//call=> give the reference of a Object to another Object

// //  username: 'Aman',
// email: 'aman@google.com',
// password: '123' => result