'use strict';
//Card data
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
]

//Code below taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/ 
//Where I modified the code it is marked with * and comments.

//variables 
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;


//duplicates the cards to make 16 and shuffles cards
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

document.body.onload = startGame();

function startGame() {
//creating divs for card images, displays images, DOM manipulation
let game = document.getElementById('game');
let grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;

  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  //appends divs to the grid
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

//declaring match function
var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

//declaring reset cards function
var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

//calling match, reset functions
grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || 
    clicked === previousTarget || 
    clicked.parentNode.classList.contains('selected') || 
    clicked.parentNode.classList.contains('match'))  
     {
    return;
  }

  if (count < 2) {
    count++;
    moveCounter(); //*added to count number of moves
    startTimer(); //*starts timer
    
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {    
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }


    // delays for reset
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match); //*no need for 'delay' as keeping matched cards visible
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
 

//*counts the number of moves
let moves = 0;
let counter = document.querySelector(".moves");
//* move counter function
function moveCounter() {
    moves++;
    counter.innerHTML = moves + ' moves';
};
    if(moves == 1) {
        second = 0;
        minute = 0;
    };

//*timer
var second = 0, minute = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute + ":" + second;
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
    },1000);
};

// reset moves
    moves = 0;
    counter.innerHTML = moves + ' moves';
    //reset timer
    second = 0;
    minute = 0; 
    document.querySelector('.timer').innerHTML = "00:00";
    counter.innerHTML = moves + ' moves';
    clearInterval(interval);
};