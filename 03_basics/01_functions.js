// function addTwoNums(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNums(number1,number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2
    /* after passing return in a func , we can execute any other line of code after this */
    console.log("hello");
}


// addTwoNums(55 , 45)
// addTwoNums(55 , "45")
// addTwoNums(55 , null)

/* but if we wish to hold this val in a variable , it will not work */
// let result = addTwoNums(10,5)
// console.log(result);
// reason is : since the function is not returning but printing , Both are different 

let result = addTwoNums(10,5)
// console.log(result);

function loggedInMessage( userName ="Shahrukh"){
    if(!userName){
        console.log("Please enter a UserName");
        return
    }
    return `${userName} has just Logged in.`
}

// console.log(loggedInMessage("AMan"));
// console.log(loggedInMessage("")); 
console.log(loggedInMessage()); //  for this situation , we gave some default value


function calculateCartPrice(val1,val2,...num1){
    // this ... is a Rest operator=> takes asmany vals as args
    return val1,val2,num1
}
console.log(calculateCartPrice(200, 400, 500, 2000,350,451,690))
/* only values with rest operator is returning */

const myObject={
    usersname: "Aman",
    Networth : "350" 
}

function handleObject(aObject){
    console.log(`name of the person is ${aObject.usersname} and his net worth is ${aObject.Networth}`);
}
// handleObject(myObject)
handleObject({
    usersname: "Mohan",
    Networth: 650
})

const myNewArray = [200,450,600,870]

function returnThirdValue (getArray){
    return getArray[2]
}
// console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([600,405,200,870,230]));