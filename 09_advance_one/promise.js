// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// it represent the results of asynchronous operation like : accessing file through kernel , database in different continent , access to camera devices/ sound devices incase of mobile development.

// Three state of Promises : pending , fulfilled , rejected

const promiseOne = new Promise(function(resolve, reject){
    // Do async Tasks
    //DB calls , cryptography , Network
    setTimeout(() => {
        console.log("Async task is complete");
        resolve() // connects to ".then" function
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise consumed");
})

//creating Promise without holding it in a Variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYNC Task 2 incoming");
        resolve()
    },1000)
}).then(function(){
    console.log("ASYNC task 2 Resolved");
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        // usually we pass some Object {} in resolve
        resolve({username:"AMAN", interest : "WEB-DEV" })
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : "ChaiaurCode", Quality: "High-Grade"})
        }else{
            reject("ERROR- SOMETHING went WRONG");
        }
    },2000)
})



promiseFour
.then(function(users){
    console.log(users);
    return users.username
})
.then(function(username){
    // this is called "Chaining"
    console.log(`Name of the channel is: ${username}`);
})
.catch(function(error){
    //catch connect reject
    console.log(error);
})
.finally(()=>{
    console.log("THE PROMISE IS EITHER RESOLVED OR REJECT");
})


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "JavaScript", Quality: "Top-Grade"})
        }else{
            reject("ERROR- SOMETHING went WRONG");
        }
    },2000)    
})

// another way to get data is to use { ASYNC await } but it dont handle ERROR well

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    // this works if there is no chance of ERROR and we can also use try-catch to handle error

    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(`E: ${error}`);
    }

}
consumePromiseFive()


async function getAllUser(){
    // const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    // const data = await response.json()
    // console.log(data);
    // since some tasks require time to execute so fetch and json parse take some time to execute so it show "Promise { <pending> }" and to avoid it we use "await"

    // now do the same thing with try catch

    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
// getAllUser()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
// when we use fetch with "then and catch" we dont have to use "await" since "then" will only execute if it execute otherwise catch will execute

// a fetch only " reject" when they face a error on network=> not "Reject" when they face a HTTP error like "404" ..they are consider as response 