// Global Codes - Setup

// Create an array of words (NBA teams)
// var wordList = ["HAWKS", "CELTICS", "NETS", "HORNETS", "BULLS", "CAVALIERS", "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS", "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS", "TIMBERWOLVES", "PELICANS", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS", "BLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"];

// Alternative: Create an array of objects (NBA teams with logos)
var wordList = {
    "team": ["HAWKS", "CELTICS", "NETS", "HORNETS", "BULLS", "CAVALIERS", "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS", "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS", "TIMBERWOLVES", "PELICANS", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS", "BLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"],
    "logos": [
        "hawks.png",
        "celtics.png",
        "nets.png",
        "hornets.png",
        "bulls.png",
        "cavaliers.png",
        "mavericks.png",
        "nuggets.png",
        "pistons.png",
        "warriors.png",
        "rockets.png",
        "pacers.png",
        "clippers.png",
        "lakers.png",
        "grizzlies.png",
        "heat.png",
        "bucks.png",
        "timberwolves.png",
        "pelicans.png",
        "knicks.png",
        "thunder.png",
        "magic.png",
        "sixers.png",
        "suns.png",
        "blazers.png",
        "kings.png",
        "spurs.png",
        "raptors.png",
        "jazz.png",
        "wizards.png"
    ]
};

// Generate a random number to pick a word from the array
// var choice = (Math.floor(Math.random() * wordList.length));
// var answer = wordList[choice];

// Alternative: Generate a random number to pick a word from the array of objects
var choice = (Math.floor(Math.random() * wordList.team.length));
var answer = wordList.team[choice];

var answerLength = answer.length;
console.log(choice);
console.log(answer);
console.log(answerLength);

// Create element "IMG" and assign to variable, add attributes
var winnerLogo = document.createElement("img");
winnerLogo.src = "assets/images/logos/" + wordList.logos[choice];
winnerLogo.style = "width: 300px";

// Determine how many letters need to be guessed to win the game
var win = answerLength;

// Set how many guesses the user is allowed (i.e. 5 more than length of answer)
var attemptsLeft = answerLength + 5;
console.log(attemptsLeft);

// Display _ for each letter in the word to be guessed
var display = [answerLength];
var output = "";
var userLetter = "";
var guessedLetters = [];

// Break the string answer apart and store it as an array of letters
var letters = answer.split("");
// console.log(letters);

// Local Codes - The Game

// Setup display letters to be guessed in HTML
var setup = function () {
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
        // console.log(output);
    }
    document.getElementById("game").innerHTML = output;
    output = "";
    document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses to solve this!";
}

var submit = function () {
    output = "";
    userLetter = document.getElementById("guessField").value;
    console.log(userLetter);
    document.getElementById("guessField").value = "";
    guessedLetters.push(userLetter.toUpperCase());

    // Compare user Letter to the answer;
    // If the letter matches a letter in the answer: replace the _ with a letter in the display
    // Subtract one from the number of letters that need to be guessed to win
    for (var c = 0; c < answer.length; c++) {
        // alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
        }
        output = output + display[c] + "";
    }

    document.getElementById("game").innerHTML = output;
    output = "";
    attemptsLeft--;
    // console.log(attemptsLeft);

    // Determine game status; i.e. if win < 1 or all the dashes are filled, user wins; if attemptsLeft < 1, no more guesses and user losses.  
    if (win < 1) {
        document.getElementById("guesses").innerHTML = "Hooray, you Win!";
        document.getElementById("guesses").style.backgroundColor = "green";
        document.body.appendChild(winnerLogo);

    }
    else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "Sorry, you Lose!";
        document.getElementById("guesses").style.backgroundColor = "red";
        document.body.appendChild(winnerLogo);
    }
    else {
        document.getElementById("guessedLetters").innerHTML = "Letters guessed: " + guessedLetters.join(", ");
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left!";
    }
}
$(document).ready(function () {
    setup();
});
