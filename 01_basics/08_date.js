// Learning Dates in Js

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());//5/3/2024
// console.log(myDate.toTimeString()); //
// console.log(myDate.toUTCString()); //Fri, 03 May 2024 09:09:29 GMT
// console.log(myDate.toLocaleString()); //5/3/2024, 9:13:03 AM
// console.log(myDate.toLocaleTimeString());//9:13:03 AM
// console.log(myDate.getTimezoneOffset());

// console.log(myDate.toTimeString());

// console.log(typeof myDate);// myDate => object

// let myNewDate = new Date(2023,12,17)

let myNewDate = new Date("03-11-1999")
// console.log(myNewDate.toDateString());
// console.log(myNewDate.toLocaleString());
// in js time is stored in milliseconds from 1st jan 1970

// console.log(myNewDate.getTime());
//921110400000 

let currentDate = Date.now()
// console.log(currentDate);

let newDate = new Date()
console.log(newDate.getMonth());

console.log(newDate.toLocaleString('Default',{
    weekday: 'long',
    minute: 'numeric',
    timeZone: 'GMT',
    timeZoneName: 'long'
}));

