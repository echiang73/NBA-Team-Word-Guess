// Global Codes - Setup

//Create an array of words (NBA teams)
var wordList = ["HAWKS", "CELTICS", "NETS", "HORNETS", "BULLS", "CAVALIERS", "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS", "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS", "TIMBERWOLVES", "PELICANS", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS", "BLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"];

// Generate a random number to pick a word from the array
var choice = (Math.floor(Math.random() * wordList.length));
var answer = wordList[choice];
var answerLength = answer.length;
console.log(choice);
console.log(answer);
console.log(answerLength);

// Determine how many letters need to be guessed to win the game
var win = answerLength;

// Set how many guesses the user is allowed (i.e. 5 more than length of answer)
var attemptsLeft = answerLength + 5;
console.log(attemptsLeft);

// Display _ for each letter in the word to be guessed
var display = [answerLength];
var output = "";
var userLetter = "";

// Break the string answer apart and store it as an array of letters
var letters = answer.split("");
// console.log(letters);

// Local Codes - The Game

// setup display letters to be guessed in HTML
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
    // alert("it works when clicked!")
    // if ((userPick === "a") || (userPick === "b") || (userPick === "c") || (userPick === "d") || (userPick === "e") || (userPick === "f") || (userPick === "g") || (userPick === "h") || (userPick === "i") || (userPick === "j") || (userPick === "k") || (userPick === "l") || (userPick === "m") || (userPick === "n") || (userPick === "o") || (userPick === "p") || (userPick === "q") || (userPick === "r") || (userPick === "s") || (userPick === "t") || (userPick === "u") || (userPick === "v") || (userPick === "w") || (userPick === "x") || (userPick === "y") || (userPick === "z")) {
    //     guessedLetters.push(userPick);
    output = "";
    // userLetter = $("#letter").value;
    userLetter = document.getElementById("guessField").value;
    console.log(userLetter);
    // $("letter").value = "";
    document.getElementById("guessField").value = "";

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
    console.log(attemptsLeft);

// Determine game status; i.e. if win < 1 or all the dashes are filled, user wins; if attemptsLeft < 1, no more guesses and user losses.  
    if (win < 1) {
        document.getElementById("guesses").innerHTML = "Hooray, you Win!";
        document.getElementById("guesses").style.backgroundColor = "green";
    }
    else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = "Sorry, you Lose!";
        document.getElementById("guesses").style.backgroundColor = "red";
    }
    else {
        document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + " guesses left!";
    }
}
$(document).ready(function() {
    setup();
});
