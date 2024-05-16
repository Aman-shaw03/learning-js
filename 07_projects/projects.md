# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-cuohhw?file=index.html,.vscode%2Fsettings.json,1-colorChanger%2Fstyle.css)

# solution

## project 1 :- Color Switcher

```javascript
const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)
    // if (e.target.id === "grey"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "white"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "blue"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "yellow"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "purple"){
    //   body.style.backgroundColor = e.target.id
    // }
    // if (e.target.id === "orange"){
    //   body.style.backgroundColor = e.target.id
    // }

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id
        break;
      case "white":
        body.style.backgroundColor = e.target.id
        break;
      case "blue":
        body.style.backgroundColor = e.target.id
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id
        break;
      case "purple":
        body.style.backgroundColor = e.target.id
        break;
      case "orange":
        body.style.backgroundColor = e.target.id
        break;
      
  }})
})
```

## project 2 solution code

```javascript
const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  // prevents the submit operation from executing

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height ===""|| height < 0 || isNaN(height)){
    results.innerHTML = "Please provide a valid height"
  } else if(weight ===""|| weight < 0 || isNaN(weight)){
    results.innerHTML = "Please provide a valid weight"
  }else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
    
    if(bmi < 18.6){
      const text = document.createElement("p");
      text.innerHTML = `Your BMI ${bmi} indicates: You are Underweight`;
      results.appendChild(text);
    } else if(bmi >18.6 && bmi < 24.9) {
      const text = document.createElement("p");
      text.innerHTML = `Your BMI ${bmi} indicates: You are Under Normal Range`;
      results.appendChild(text);
    } else{
      const text = document.createElement("p");
      text.innerHTML = `Your BMI ${bmi} indicates: You are Overweight`;
      results.appendChild(text);
    }

    // if (bmi < 18.6) {
    //   // addMessage.innerHTML = `<span>Under Weight</span>`;
    //   const text = document.createElement("p");
    //   text.innerHTML = `<span>Under Weight</span>`;
    //   results.appendChild(text);
    // } else if (bmi > 18.6 && bmi < 24.9) {
    //   const text = document.createElement("p");
    //   text.innerHTML = `<span>Normal Weight</span>`;
    //   results.appendChild(text);
    // } else {
    //   const text = document.createElement("p");
    //   text.innerHTML = `<span>OverWeight</span>`;
    //   results.appendChild(text);
    // }
  }

})
```

## Project - 3 solution code

```javascript
// document.querySelector("#clock")
const clock = document.getElementById("clock");

// let date = new Date();
// console.log(date.toLocaleTimeString())

const time = document.createElement("p")
clock.appendChild(time)

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  time.innerHTML = date.toLocaleTimeString()


},5000)

// setInterval :- set the time interval for which the function of code will execute . 5000=> 5 seconds (in milliseconds)


// hear my explanation:- so if we create the element time (as per my code) outside the loop and append child it ..so only variable is actually append to it ..so with setInterval it will overwrtite tje code and not every time create the same variable again and again ..which cause them to stacked
```