// Immediately Invoked Function Expressions (IIFE)

/* Interview Q. why IIFE? */
/* Global scope ke pollution se problem hoti hai kai baar, ussi pollution(variables) ko hatane ke lia IIFE use krte hai */

(function chai(){
    //Named IIFE , since we give it a name
    console.log(`DB Connected`);
})(); // always remember to explicitly use ";"

((name) => {
    // normal IIFE
    console.log(`DB Connected TWO ${ name}`);
})("Aman");

