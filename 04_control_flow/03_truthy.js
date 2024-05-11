// truthy and falsy value 
/* values that are assumed to be True and False  */

// falsy values :- false , 0 , -0 , Bigint 0n , "" (empty string), null , Nan , undefined

// Truthy values :- which are not falsy values
//some shocking truthy values:-
// [], {}, function(){}, "0", "false" || 'false , " " [space diya hai string me]

const userEmail = []

// how to check if a array is empty in coditions 

if (userEmail.length === 0){
    // console.log("found a empty array");
}

// how to check if a object is empty in coditions 
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("Found a Empty Object");
}

//Object.keys(emptyObj) = array of all key values 


/* nullish coalescig operator(??):- especially for null and undefined values  */

let val1;
// val1 = 5 ?? 15
// val1 = null ?? 25
// val1 = undefined ?? 35
// val1 = null ?? undefined ?? 15 ?? 37

console.log(val1);

/* what i understand from nullish coalescing operator:- if my returned values could be any thing or null (i am not sure) then we can assign it using ?? , if the return value is null or undefined ...it will not take it and will took following value (null ?? 25),
but if in case (null ?? undefined ?? 15 ?? 37) = wont take null => wont take undefined => 15 will took and assign it */



/* Terniary Operator(?) */

// condition ? TrueValue : FalseValues
// general syntax

// when we are doing // if(true) console.log("Test"), console.log("Test2");
// implicit scope => its checking only true values , doesnot take into account else if 

const Icedtea = 120

Icedtea <= 80 ? console.log("IcedTea is affordable"): console.log("IcedTea is Expensive , KothiBangla Check");