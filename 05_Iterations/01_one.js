// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 7) {
        // console.log("Thala for a Reason");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Most outer loop value is ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Outer loop value is ${j} and inner loop value is ${i}`);
        // console.log( i + "*" + j + "=" + i*j);
        
    }
    
}
let myArr = ["Dhoni","Rohit","Kohli"]
// console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}

// Break and Continue

for (let i = 1; i <= 11; i++) {
    if (i == 7) {
        console.log("Thala for a Reason");
        break
        
    }
    console.log(`Player Number ${i}`);
    
}

for (let i = 1; i <= 11; i++) {
    if (i == 7) {
        console.log("Thala Is here");
        continue
        
    }
    console.log(`Player Number ${i}`);
    
}