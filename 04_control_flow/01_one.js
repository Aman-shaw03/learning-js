// if
const isUserLoggedIn = true
const temperature = 41

if (2 === "2"){
    // console.log("Executed");
}
/* <, > , !=, <=, >=, == its only check the value
=== checks value and its type */

// if (temperature == 39){
//     console.log("Temperature is below 40");
// } if (temperature == 41){
//     console.log("Temperature is 41 degress");
// } else{
//     console.log("Temperature is above 40");
// }

// const score = 200

// if (score > 100){
//     let power = "Fly"
//     console.log(`Users power is ${power}`);
// }

// console.log(`Users power is ${power}`) // error due to scope of "power"

// if(true) console.log("Test"), console.log("Test2");
// implicit scope

/* multiple true conditions, use "&&" */

const isUserLoggedInacc = true
const debitCard = true

if (isUserLoggedInacc && debitCard && 2 === 2){
    // console.log("Multiple conditions checked");
}

/* multiple conditions "or" = "||" */

const userLoggedIngoogle = true
const userLoggedInemail = true
const userLoggedInx = true

if (userLoggedIngoogle || userLoggedInemail || userLoggedInx|| false){
    console.log('User Has Logged In');
}