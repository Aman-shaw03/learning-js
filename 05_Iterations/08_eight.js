// Reduce => takes a callbck function which take a accumulater which adds up the current value of array but it also needs a initializer , so it start with that

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const myTotals = myNums.reduce( function (acc,currval) {
//     console.log(`accumulater value is: ${acc} and current value is: ${currval}`);
//     return acc + currval
// },0 )

const myTotals = myNums.reduce( (acc,currval)=> acc + currval,0 )

console.log(myTotals);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cartTotal = shoppingCart.reduce( (acc,currval)=> acc + currval.price,0 )

console.log(cartTotal);