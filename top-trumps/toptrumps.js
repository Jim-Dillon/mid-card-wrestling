// winner will hold the value of output
const output = document.querySelector('.winner');

// an array of wrestlers with their pertinent attributes
wrestlers = [
  {title:"'Hangman' Adam Page", ovr:99, img:"../Illustrations/game cards/hangman card.png"},
  {title:"'Cleaner' Kenny Omega", ovr:98, img:"../Illustrations/game cards/kenny card.png"},
  {title:"CM Punk", ovr:95, img:"../Illustrations/game cards/punk card.png"},
  {title:"'American Dragon' Bryan Danielson", ovr:96, img:"../Illustrations/game cards/danielson card.png"},
  {title:"MJF", ovr:97, img:"../Illustrations/game cards/mjf card.png"},
  {title:"'Absolute' Ricky Starks", ovr:94, img:"../Illustrations/game cards/starks card.png"},
  {title:"Britt Baker D.M.D.", ovr:96, img:"../Illustrations/game cards/britt card.png"},
  {title:"Jon Moxley", ovr:97, img:"../Illustrations/game cards/moxley card.png"},
  {title:"Jade Cargill", ovr:98, img:"../Illustrations/game cards/jade card.png"},
  {title:"'Mad King' Eddie Kingston", ovr:93, img:"../Illustrations/game cards/kingston card.png"},
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
const youImage = document.querySelector('.you-card-image');
youImage.src = user.img

const computerImage = document.querySelector('.computer-card-image');
computerImage.src = comp.img


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

 

  console.log(determineWinner(user, comp));






