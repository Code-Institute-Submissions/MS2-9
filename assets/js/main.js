
//Declaring card data
const cardsArray = [
  {
    name: 'stormtrooper on sand',
    img: 'assets/images/lego01.jpg',
  },
  {
    name: 'darth vader on abbey road',
    img: 'assets/images/lego02.jpg',
  },
  {
    name: 'darth vader on bike',
    img: 'assets/images/lego03.jpg',
  },
  {
    name: 'yoda',
    img: 'assets/images/lego04.jpg',
  },
  {
    name: 'darth vader coming out of toilet',
    img: 'assets/images/lego05.jpg',
  },
  {
    name: 'r2d2',
    img: 'assets/images/lego06.jpg',
  },
  {
    name: 'stormtrooper on bike',
    img: 'assets/images/lego07.jpg',
  },
  {
    name: 'stormtrooper laughing',
    img: 'assets/images/lego08.jpg',
  },
];

//Declaring global variables 

let firstGuess = '';
let secondGuess = '';
let count = 0; //stores the count
let previousTarget = null;
let delay = 1200;
let timerOn = false;
let matchCount = 0;

//DOM manipulation code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
//Duplicates the cards to make 16 and shuffles cards
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());


//DOM manipulation - creating divs, and displaying card images
let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function(item)  {

    let name = item.name,
    img = item.img;

let card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = name;

let front = document.createElement('div');
    front.classList.add('front');

let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = 'url(' + img + ')';

//Appends divs to the grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

//Match function code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
//Declaring match function
let match = function match() {
    matched = document.querySelectorAll('.selected');
    matched.forEach(function (card) {
    card.classList.add('match');
  });
};

//Declaring reset card and selected function code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
//Declaring reset cards function
let resetGuesses = function resetGuesses() {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

let selected = document.querySelectorAll('.selected');
    selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

//Move counter function
let moves = 0;
let counter = document.querySelector('.moves');
function moveCounter() {
    moves++;
    counter.innerHTML = moves + ' moves'; 
};

//Timer
let time = 0;
let timer;
function startTimer() {
    timer = setInterval(function() {
    time++;
    minutes = ('0' + Math.floor(time / 60)).slice(-2);
    seconds = ('0' + time % 60).slice(-2); 
    document.querySelector('.timer').innerHTML = minutes + ':' + seconds;
  }, 1000);
}

//Victory popup for finishing game
 function victoryPopUp(moves) {
    let popUp = document.querySelector('.popUp');
        popUp.style.visibility = 'visible';
        popUp.querySelector('.popUpTime').innerHTML = 'You won the game in ' + minutes + ' mins and ' + seconds + ' secs!';
        popUp.querySelector('.popUpMoves').innerHTML = 'You made ' + moves + ' moves!';
};

//Event listener code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and modified
//Create click event listener, calling match, reset functions
grid.addEventListener('click', function (event) {

  let clicked = event.target; //any element that has been clicked 
   //Start the timer on the first click
    if (timerOn === false) {
        startTimer();
        timerOn = true;
    }

//Stop function code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 

    if (clicked.nodeName === 'SECTION' || //selects divs inside the grid section
        clicked === previousTarget || //ignore if the same card is clicked again
        clicked.parentNode.classList.contains('selected') || //stops already selected cards to flip over
        clicked.parentNode.classList.contains('match')) //stops matched cards to flip over if clicked again
        {
    return; //stops function
  }

//Count and select code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ and modified

  if (count < 2) {
        count++;
        moveCounter(); //to count number of moves at first click
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {    
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

//Compare for match and reset code below from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
//and modified

    //Call match function, delays for reset
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        matchCount++
        match(); //calling match function modified as no need for delay, keeping matched cards visible
      }
        setTimeout(resetGuesses, delay);
    }
        previousTarget = clicked;
};
  
//Check for the winning condition
if (matchCount === 8) {
    victoryPopUp(moves, time);
    clearInterval(timer);
    timerOn = false;
    }
});

//Restart game
function reloadGame(){
    window.location.reload();
} 

let startGame = function startGame() {
    reloadGame();
};

