#project releted to DOM
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1 ...{case 1}

```javascript
console.log("hitesh")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    
  })

})
```

## case2... by switch case|{project 1}
```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch (e.target.id) {
      case 'blue':
          body.style.backgroundColor = 'blue';
          break;

      case 'white':
          body.style.backgroundColor = 'white';
          break;

      case 'yellow':
          body.style.backgroundColor = 'yellow';
          break;

      case 'grey':
          body.style.backgroundColor = 'grey';
          break;
      case 'red':
          body.style.backgroundColor = 'red';
          break;
    }
  });
});          

```

## solution project 2 .... soluition sode for bmi indexing
```
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height===''||height<0||isNaN(height)){
    results.innerHTML=`give me valid height${height}`;

  }else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML=`give me valid weight${weight}`;
  }else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)

    // show the result
    results.innerHTML=`<span>${bmi}</span>`;
  }
  const bmi=(weight/((height*height)/10000)).toFixed(2)

  if(bmi<18){
    results.innerHTML=`<span>${bmi}</span><br>underweight`
    
  }else if(bmi>=18&&bmi<=25){
    results.innerHTML=`<span>${bmi}</span><br>normal weight`
    
  }else if (bmi>25){
    results.innerHTML=`<span>${bmi}</span><br>overweight`
  }

});
```

## time project 3 sol^n
```
const clock = document.getElementById('clock');
// document.querySelector('#clock')

let date = new Date ();
console.log(date.toLocaleTimeString());


setInterval(function(){
  let date = new Date ();
// console.log(date.toLocaleTimeString());
clock.innerHTML=date.toLocaleTimeString()

},1000);
```

## sol^n 4
```
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
 
let playGame = true;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert('please enter a valid number');
  }else if(guess<1){
    alert('please enter a number more than 1');

  }else if(guess>100){
    alert('please enter a number less than 100');
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`game over.rendom number was ${randomNumber}`);
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  
  }
}
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`you guessed right`);
    endGame();
  }else if(guess<randomNumber){
    displayMessage(`number is too low`);
  }else if(guess>randomNumber){
    displayMessage(`number is too high`);
  }
}

function displayGuess(guess){
  userInput.value='';
  guessSlot.innerHTML += `${guess};  `;
  numGuess++;
  remaining.innerHTML=`${10-numGuess}`;

}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;


}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  innerHTML=`<h2 id = "newGame">start new game</h2>`
  startOver.append(p)
  playGame=false;
  newGame()

}
function newGame(){
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
  randomNumber=[]
  numGuess=1
  guessSlot.innerHTM=''
  remaining.innerHTML=`${11-numGuess}`
  userInput.removeAttribute('disables')
  startOver.removeChild(p)
  playGame=true;  

  })

}
```