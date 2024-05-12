// learning for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); // return only the index of a array
    // console.log(programming[key]);
}

// can we use for-In loop on map

const map = new Map()

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('UK', "United Kingdom")
map.set('FR', "France")

for (const key in map) {
    console.log(key);
}
// so , i found that it wont work...have u learn more about MAP through Mdn