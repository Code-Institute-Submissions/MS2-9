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
    img: 'assets/images/lego10.jpg',
  },
]

//Code below taken from https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

//duplicates the cards to make 16 and shuffles cards
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
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

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

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

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
