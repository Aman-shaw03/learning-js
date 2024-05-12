// "ForEach Loops"

const coding = ["java","python","javascript","php","Ruby"]

// coding.forEach(function(){}) => basic syntax to use for each loops , which is inside every arrays

coding.forEach(function (items){
    // console.log(items);
})

// coding.forEach(greet() => {})  using arrow function instead of a normal function

coding.forEach((vals)=>{
    // console.log(vals);
})

function printme(item){
    console.log(item);
}
// coding.forEach(printme)


/* we learned that => we can also declare a function and passed it as a reference to "foreach" loop 
note=> dont execute printme(), just give reference printme */

coding.forEach( (items,index,arra) => {
    // console.log(items,index, arra);
} )

// with "forEach" we can iterate values , index , whole of arrays 

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

//usually when handling data from Api's and databases we get data in array which hold arrays and objects => a quick way to iterate over those values with forEach Loop

myCoding.forEach( (items)=>{
    console.log(items.languageName);
} )