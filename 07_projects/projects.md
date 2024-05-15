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
    if (e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "purple"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "orange"){
      body.style.backgroundColor = e.target.id
    }
  })
})
```