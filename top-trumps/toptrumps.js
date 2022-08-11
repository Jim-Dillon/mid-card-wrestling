// winner will hold the value of output
const output = document.querySelector('.winner');

//logic to render info to screen
const playButton = document.querySelector('.play-game');
const nextButton = document.querySelector('.next-hand');
const youImage = document.querySelector('.you-card-image');
const computerImage = document.querySelector('.computer-card-image');
const youName = document.querySelector('.you-card-name');
const computerName = document.querySelector('.computer-card-name');
const youOverall = document.querySelector('.you-card-ovr');
const computerOverall = document.querySelector('.computer-card-ovr');
const youCard = document.querySelector('.you-card-container');
const computerCard = document.querySelector('.computer-card-container');
const youBackCard = document.querySelector('.you-back-card-container');
const compBackCard = document.querySelector('.comp-back-card-container');

// an array of wrestlers with their pertinent attributes
wrestlers = [
  {title:"'Hangman' Page", ovr:99, img:"../Illustrations/game cards/hangman card.png"},
  {title:" Kenny Omega", ovr:98, img:"../Illustrations/game cards/kenny card.png"},
  {title:"CM Punk", ovr:95, img:"../Illustrations/game cards/punk card.png"},
  {title:"Bryan Danielson", ovr:96, img:"../Illustrations/game cards/danielson card.png"},
  {title:"MJF", ovr:97, img:"../Illustrations/game cards/mjf card.png"},
  {title:"Ricky Starks", ovr:94, img:"../Illustrations/game cards/starks card.png"},
  {title:"Britt Baker D.M.D.", ovr:96, img:"../Illustrations/game cards/britt card.png"},
  {title:"Jon Moxley", ovr:97, img:"../Illustrations/game cards/moxley card.png"},
  {title:"Jade Cargill", ovr:98, img:"../Illustrations/game cards/jade card.png"},
  {title:"Eddie Kingston", ovr:93, img:"../Illustrations/game cards/kingston card.png"},
];




// generate random choice for you 
const getRandomChoice = () => {
    const randomNumber = Math.floor(Math.random() * wrestlers.length);
    return wrestlers[randomNumber];
};


const user = getRandomChoice();
const comp = getRandomChoice();

console.log(user);

console.log(comp);


// adds a src for images' 'img' property so they appear on screen

youImage.src = user.img;
computerImage.src = comp.img;

youName.innerText = user.title;
computerName.innerText = comp.title;

youOverall.innerText = user.ovr;
computerOverall.innerText = comp.ovr;

// create function - establish all outcomes of fight. 
const determineWinner = (user, comp) => {
    if (user.ovr === comp.ovr) {
      output.innerText = 'draw';
    } else if (user.ovr > comp.ovr) {
      output.innerText = 'you';
    } else {
      output.innerText = 'computer';
    }
  }

  

// add click events for when you start game

playButton.addEventListener('click', e => {
    console.log(determineWinner(user, comp));
    playButton.classList.add('grey-button');
    nextButton.classList.remove('grey-button');
    nextButton.classList.add('ready-button');
    youCard.classList.remove('is-hidden');
    computerCard.classList.remove('is-hidden');
    youBackCard.classList.add('is-hidden');
    compBackCard.classList.add('is-hidden');
}); 

// add click events for when you restart game

nextButton.addEventListener('click', e => {
    location.reload();
    playButton.classList.add('game-buttons');
    nextButton.classList.add('grey-button');
    youCard.classList.add('is-hidden');
    computerCard.classList.add('is-hidden');
    youBackCard.classList.remove('is-hidden');
    compBackCard.classList.remove('is-hidden');

    
})








