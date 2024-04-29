let x = 3
const y = x++ // postfix increment 
// return the operand before incrementing
console.log(`x:${x},y:${y}`);
// x is incremented so its 4 , y = 3 since its postfix increment

let a =7
const b = ++a // prefix increment
// return the operand after incrementing
console.log(`a:${a},b:${b}`);
// a is incremented so its 8 , b = 8 since its also prefix
