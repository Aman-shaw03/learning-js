const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num)=> {return num+10} )


// const newNums = myNums.filter( (num)=> num + 10 )=> this didnt work coz with "Filter" it check for True condition and return only those True conditions.....but Map doesnt check for true conditions , it just perform operations and return them

const newNums = myNums
                    .map( (num)=>num * 10 )
                    .map( (num)=> num+7 )
                    .filter( (num)=> num> 50 )

/* Now this is called "Chaining" => input "num" for the 2nd map() is the value after performing operation of 1st Map()..same for filter */

console.log(newNums);
