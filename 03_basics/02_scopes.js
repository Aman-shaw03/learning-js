// scope is basically inner env => ghar ki baat

var c = 220
{
    let a = 10
    const b = 20
    var c = 20
}

// console.log(c);
/* even though c should be 220 , but its 20 since Var is accesible outside the scope which is wrong practise .. so we avoid using "var" in code base */

/* scope is different for Node and different for window(inspect => console ) */

function one(){
    const username = "Hitesh"

    function two(){
        const channel = "Chai aur code"
        console.log(username);
    }
    // console.log(channel);
    two()
}

// one()

/* this is called Closure, child function call use parent function or global variable

but parent function cant use/call child function variables => outside its scope*/

if (true){
    const username = "Aman"

    if (username === "Aman"){
        const channel = " Chai Aur Code"
        console.log(username + channel);
    }
    // console.log(channel);
}

// console.log(username);
// its outside scope , since it declare inside if statement 


addone(5)
function addone(num){
    return num + 1
}
/* when declaring func like this , even if we call the function before we execute it , No error  */

addtwo(7)
const addtwo = function(num){
    return num + 2
}

/* but when we are declaring a func and holding it in a variable and we call it before execution => error will be shown Due to "Hoisting"  */