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
console.log(word);

const clue = document.getElementById('clue').innerText = dict[randomIndex];
const answer = document.getElementById('answer');
var guess = "_".repeat(word.length);
missingWord(guess)
function missingWord(guess){
  console.log(guess)
  for (var i = 0;i<guess.length;i++){
    const new_div = document.createElement('div');
    new_div.innerText = guess[i];
    answer.appendChild(new_div)
    console.log("hi")
  }

}
