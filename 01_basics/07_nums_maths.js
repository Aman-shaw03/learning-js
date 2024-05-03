const score = 400
// console.log(score);

const balance = new Number(500)
// console.log(balance);
// console.log(balance.toFixed(2));
// console.log(balance.toString().length);

const avg_price = 1223.59793
// console.log(avg_price.toPrecision(4));


const income = 10000000
// console.log(income.toLocaleString('en-IN'));


// *******************Maths************************ //
// console.log(Math.abs(-346.34));
// console.log(Math.round(346.34616));
// console.log(Math.ceil(346.34616));
// console.log(Math.floor(346.34616));
// console.log(Math.round(346.34616));
// console.log(Math.min(6,87,7,1,3,5,0.2));
// console.log(Math.max(6,87,7,1,3,5,0.2));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1));

// sometimes we have to generate random num in some range, so one leetcode/stackoverflow way of doing it is

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
    first we need random so Math.random()
    then we need to ensure its not 0-1 so we did max - min also + 1 so we ensure there is no 0
    third we add  +min so to keep it in expected range
    lastly floor to to get single digit
*/