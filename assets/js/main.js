
//*Card data
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
//Where I modified the code it is marked with *.

//variables 

let firstGuess = '';
let secondGuess = '';
let count = 0; //stores the count
let previousTarget = null;
let delay = 1200;
// Record current timer state (on or off)
let timerOn = false;
let matchedPair = 0;

//duplicates the cards to make 16 and shuffles cards
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());


//creating divs for card images, displays images, DOM manipulation
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

  //appends divs to the grid
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
    });

//*declaring match function
let match = function match() {
  let matchedPair = document.querySelectorAll('.selected');
    matchedPair.forEach(function (card) {
    card.classList.add('match');
    matchedPair = [];
  });
};

//declaring reset cards function
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

//*counts the number of moves
let moves = 0;
let counter = document.querySelector(".moves");
//* move counter function
function moveCounter() {
    moves++;
    counter.innerHTML = moves + ' moves'; 
};

//*timer
let time = 0;
let timer; //stores the setInterval
    function startTimer() {
    timer = setInterval(function() {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + time % 60).slice(-2); 
    document.querySelector('.timer').innerHTML = minutes + ":" + seconds;
  }, 1000);
}


//create click event listener, calling match, reset functions
grid.addEventListener('click', function (event) {

  let clicked = event.target; //any element that has been clicked 
   // *Start the timer on the first click
    if (timerOn === false) {
      startTimer();
      timerOn = true;
    }

  if (clicked.nodeName === 'SECTION' || //selects divs inside the grid section
    clicked === previousTarget || //ignore if the same card is clicked again
    clicked.parentNode.classList.contains('selected') || //stops already selected cards to flip over
    clicked.parentNode.classList.contains('match')) //stops matched cards to flip over if clicked again
     {
    return; // stops function
  }

  if (count < 2) {
    count++;
    moveCounter(); //*to count number of moves at first click
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {    
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    // call match function, delays for reset
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        match(); //* calling match function modified as no need for delay, keeping matched cards visible
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

//*stop timer when all cards are matched
    if (matchedPair.length === 8) {
       clearInterval(timer);
    };

//*declaring restart game function
let startGame = function startGame() {
    //shuffles cards
    let gameGrid = cardsArray.concat(cardsArray);
    gameGrid.sort(() => 0.5 - Math.random());
    
    //stops and resets moves
    moves = 0;
    document.querySelector('.moves').innerHTML = moves + ' moves';
    
    //stops timer
    time = 0;
    minutes = 0;
    seconds = 0; 
    document.querySelector('.timer').innerHTML = "0" + minutes + ":" + "0" + seconds;
    clearInterval(timer);
    timerOn = false; //stops timer
    
    //flips over matched cards
    let resetMatched = document.querySelectorAll('.match');
    resetMatched.forEach(function (card) {
    card.classList.remove('match');
  });
}

 