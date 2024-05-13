// const coding = ["java","python","javascript","php","Ruby"]


// const myValues = coding.forEach( (items)=>{
//     // console.log(items);
//     return items
// })

// console.log(myValues);

/* what i gather is => with forEach it never return the values , so we cannot store it in another variable or perform other operations */


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (nums)=>nums> 4)

// console.log(newNums);

// filter => takes a callBack Function and actually returns the values


//myNums.filter( (nums)=>nums> 4) => when we are doing this , we are implicitly returning..infact myNums.filter( (nums)=>(nums> 4)) => this is also implicit return ...But when we do (nums)=>{nums> 4} => not its explicit reurn and we have to mention "return" to return the values..since with using "{}" we are opening scope

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = []

myNums.forEach( (num)=>{
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);

// "forEach" can be used with if and others to assign values to other variable but cannnot return values


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let myBooks = books.filter( (bk)=> bk.genre==="Fiction" );


myBooks = books.filter( (bk)=> {
    return bk.genre==="Fiction" && bk.publish <= 1998
} )
myBooks = books.filter( (bk)=> {
    return bk.genre==="Science" || bk.publish <= 1998
} )

  console.log(myBooks);