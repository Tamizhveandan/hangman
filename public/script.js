const countries = [
    'Chad',
    'Cuba',
    'Fiji',
    'Greece',
    'Guyana',
    'Haiti',
    'India',
    'Japan',
    'Kenya',
    'Libya',
    'Malta',
    'Nepal',
    'Panama',
    'Peru',
    'Poland',
    'Qatar',
    'Spain',
    'Sudan',
    'Syria',
    'Tonga',
    'Tuvalu',
    'Uganda',
    'Yemen',
    'Zambia'
  ];
  const animals = [
    "dog",
    "cat",
    "horse",
    "elephant",
    "lion",
    "tiger",
    "giraffe",
    "monkey",
    "zebra",
    "bear",
    "wolf",
    "deer",
    "rabbit",
    "squirrel",
    "fox",
    "cow",
    "sheep",
    "pig",
    "goat",
    "chicken",
    "duck",
    "turkey",
    "swan",
    "penguin",
    "whale",
    "dolphin",
    "shark",
    "octopus",
    "jellyfish",
    "butterfly",
    "bee",
    "ant",
    "spider",
    "snake",
    "lizard",
    "crocodile",
    "turtle",
    "frog",
    "fish",
    "crab",
    "lobster",
    "clam",
    "snail",
    "worm",
    "mosquito",
    "fly",
    "cockroach",
    "termite",
    "bee",
    "butterfly",
    "caterpillar",
    "dragonfly",
    "grasshopper",
    "ladybug",
    "moth"
  ];
  const sports = [
    "football",
    "basketball",
    "baseball",
    "volleyball",
    "tennis",
    "golf",
    "soccer",
    "hockey",
    "cricket",
    "rugby",
    "boxing",
    "swimming",
    "cycling",
    "track",
    "field",
    "skiing",
    "surfing",
    "wrestling",
    "gymnastics",
    "badminton",
    "rowing",
    "sailing",
    "climbing",
    "karate",
    "taekwondo",
    "judo",
    "fencing",
    "archery",
    "shooting",
    "triathlon",
    "decathlon"
  ];
const cells = document.querySelectorAll('.let');
const words = [countries,animals,sports];
const dict = {
  0:"country",
  1:"animal",
  2:"sport"
}

// Generate a random index between 0 and the length of the array minus one
const randomIndex = Math.floor(Math.random() * words.length);

// Access a random word from the array using the random index
const randomWord = words[randomIndex];
const randomIndex2 = Math.floor(Math.random() * randomWord.length);
const word = randomWord[randomIndex2].toUpperCase()
// console.log(word);

const clue = document.getElementById('clue').innerText = dict[randomIndex].toUpperCase();
const answer = document.getElementById('answer');
var guess = "_".repeat(word.length);
var life = 6;
const rem_life = document.getElementById('life')

rem_life.innerText = life;
checkinglife(life)
missingWord(guess)
function missingWord(guess){
  answer.innerHTML = '';
  // console.log(guess)
  for (var i = 0;i<guess.length;i++){
    const new_div = document.createElement('div');
    new_div.innerText = guess[i];
    answer.appendChild(new_div)
    // console.log("hi")
  }

}

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Get the text content of the clicked cell
    let text = cell.textContent;
    // console.log(text);
    checkingWords(text,guess,word);
    // Change the background color of the clicked cell
    cell.style.color = "red";
  });
});


function checkingWords(text,gu,word){
  let new_guess = "";
  // console.log(text,gu,word)
  var flag = true;
  for(var i = 0;i<word.length;i++){
    if(text == word[i]){
      new_guess += text;
      flag = false;
    }
    else{
      new_guess += gu[i];
    }
  }
  if(flag){
    life -= 1;
    checkinglife(life)
  }
  guess = new_guess
  missingWord(guess)
}

function checkinglife(life){
  // console.log(life)
  rem_life.innerText = life
  if(life == 6){
    document.getElementById("images").style.backgroundImage= "url(./images/life1.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
  if(life == 5){
    document.getElementById("images").style.backgroundImage= "url(images/life2.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
  if(life == 4){
    document.getElementById("images").style.backgroundImage= "url(images/life3.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
  if(life == 3){
    document.getElementById("images").style.backgroundImage= "url(images/life4.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
  if(life == 2){
    document.getElementById("images").style.backgroundImage= "url(images/life5.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
  if(life == 1){
    document.getElementById("images").style.backgroundImage= "url(images/life6.png)";
    document.getElementById("images").style.backgroundRepeat = "no-repeat";
    document.getElementById("images").style.backgroundSize = "cover";
  }
}