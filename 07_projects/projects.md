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

## Project 4 solution code

```javascript
let randomNumber = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userGuesses = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame = true


if(playGame){
  submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert("Please Enter a Valid Number")
  } else if (guess < 1){
    alert("Please Enter a Valid Number which is Greater then 1")
  } else if (guess > 100){
    alert("Please Enter a Valid Number which is Lower then 100")
  } else {
    prevGuess.push(guess)
    if (numGuess === 11){
      displayGuess(guess)
      displayMsg(`Game Over. The number was ${randomNumber}`)
      endGame()
    } else {
      checkGuess(guess)
      displayGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMsg(`You guess it Right`)
    endGame()
  } else if (guess < randomNumber){
    displayMsg(`Your Guess is too Low`)
  } else if (guess > randomNumber){
    displayMsg(`Your Guess is too High`)
  }
}

function displayGuess(guess){
  userInput.value = ""
  userGuesses.innerHTML += `${guess} | `
  numGuess++
  remainingGuess.innerHTML = `${10 - numGuess}`


}

function displayMsg(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ""
  userInput.setAttribute("disabled","") 
  // usually disbaled used alone but here we have to set it as a key value pair , so we set the value as ""
  p.classList.add = "button";
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
  // first reset all the values 
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function (e) {
    randomNumber = (parseInt(Math.random() * 100 + 1));
    userInput.removeAttribute("disabled");
    prevGuess = [];
    userGuesses.innerHTML = ``;
    remainingGuess.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);
    numGuess = 1;

    playGame = true;

  })
}
// one debug i found :- dont name your id with [space] in between them


// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     prevGuess = [];
//     numGuess = 1;
//     userGuesses.innerHTML = '';
//     remainingGuess.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

```

## Project 5 solution code

```javascript
const insert = document.getElementById("insert")

window.addEventListener("keydown", (e)=>{
  insert.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "spacekey" :e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>`
})

```

## Project 6 solution code

``` Javascript

// generating Random Hex code
const colorchanger = function(){
  const hexCode = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i<6 ; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color
}

// document.querySelector("#start").addEventListener("click", function(){
//   let myColor = document.body.style.backgroundColor = colorchanger()
//   const newcolor = setInterval(myColor,3000)
// })
// console.log(colorchanger())

let intervalId;
const startchangingcolor = function(){  
  const changeBgColor = function(){
    document.body.style.backgroundColor = colorchanger()
  }
  if(!intervalId){
    intervalId = setInterval(changeBgColor,100)
  }
}

const stopchangingcolor = function(){
  clearInterval(intervalId)
  intervalId = null
}

document.querySelector("#start").addEventListener("click", startchangingcolor)

document.querySelector("#stop").addEventListener("click", stopchangingcolor)
```