// winner will hold the value of output
const output = document.querySelector('.winner');

// an array of wrestlers with their pertinent attributes
wrestlers = [
  {title:"'Hangman' Adam Page", ovr:99, img:"../Illustrations/game cards/hangman card.png"},
  {title:"'Cleaner' Kenny Omega", ovr:98, img:"../Illustrations/game cards/kenny card.png"},
  {title:"CM Punk", ovr:95, img:"img.jpg"},
  {title:"'American Dragon' Bryan Danielson", ovr:96, img:"img.jpg"},
  {title:"MJF", ovr:97, img:"img.jpg"},
  {title:"'Absolute' Ricky Starks", ovr:94, img:"img.jpg"},
  {title:"Britt Baker D.M.D.", ovr:96, img:"img.jpg"},
  {title:"Jon Moxley", ovr:97, img:"img.jpg"},
  {title:"Jade Cargill", ovr:98, img:"img.jpg"},
  {title:"'Mad King' Eddie Kingston", ovr:93, img:"img.jpg"},
];

// adds a src for images' 'img' property so they appear on screen
const youImage = document.querySelector('.you-card-image');
youImage.src = wrestlers[0].img

const computerImage = document.querySelector('.computer-card-image');
computerImage.src = wrestlers[1].img


// generate random choice for you 
const getUserChoice = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    switch (randomNumber) {
        case 0:
            return wrestlers[0];
        case 1:
            return wrestlers[1];
        case 2:
            return wrestlers[2];   
        case 3:
            return wrestlers[3];
        case 4:
            return wrestlers[4];
        case 5:
            return wrestlers[5]; 
        case 6:
            return wrestlers[6];
        case 7:
            return wrestlers[7];
        case 8:
            return wrestlers[8];             
        case 9:
            return wrestlers[9];    
    }
};

console.log(getUserChoice());


// generate random choice for computer 
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 10)
    switch (randomNumber) {
        case 0:
            return wrestlers[0];
        case 1:
            return wrestlers[1];
        case 2:
            return wrestlers[2];   
        case 3:
            return wrestlers[3];
        case 4:
            return wrestlers[4];
        case 5:
            return wrestlers[5]; 
        case 6:
            return wrestlers[6];
        case 7:
            return wrestlers[7];
        case 8:
            return wrestlers[8];             
        case 9:
            return wrestlers[9];    
    }
};

console.log(getComputerChoice());


// create function - establish all outcomes of fight. 
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice.ovr === computerChoice.ovr) {
      return 'no one wins';
    } else if (userChoice.ovr > computerChoice.ovr) {
      return 'you win';
    } else {
      return 'computer wins';
    }
  }

  console.log(determineWinner(getUserChoice(), getComputerChoice()));

// const playGame = () => {
//     const userChoice = getUserChoice();
//     const computerChoice = getComputerChoice();
//     console.log('You got: ' + userChoice);
//     console.log('The computer got: ' + computerChoice);  
// }




