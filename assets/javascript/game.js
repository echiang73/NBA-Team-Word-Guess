// Global Codes - Setup

//Create an array of words (NBA teams)
var wordList = ["HAWKS", "CELTICS", "NET", "HORNETS", "BULLS", "CAVALIERS", "MAVERICKS", "NUGGETS", "PISTONS", "WARRIORS", "ROCKETS", "PACERS", "CLIPPERS", "LAKERS", "GRIZZLIES", "HEAT", "BUCKS", "TIMBERWOLVES", "PELICANS", "KNICKS", "THUNDER", "MAGIC", "SIXERS", "SUNS", "BLAZERS", "KINGS", "SPURS", "RAPTORS", "JAZZ", "WIZARDS"];

// Generate a random number to pick a word from the array
var choice = (Math.floor(Math.random()*wordList.length));
var answer = wordList[choice];
var answerLength = answer.length;
console.log(choice);
console.log(answer);
console.log(answerLength);

// Determine how many letters need to be guessed to win the game
var win = answerLength;

// Set how many guesses the user is allowed (i.e. 5 more than length of answer)
var attemptsLeft = answerLength + 5;

// Display _ for each letter in the word to be guessed
var display = [answerLength];
var output = "";
var userLetter = "";

// Break the string answer apart and store it as an array of letters
var letters = answer.split("");

// Local Codes - The Game

//Click any key to start??
// document.onkeyup = function(start);

// Load function

    $("submit").onclick = submit;
    var setup = function() {
        for (var i=0; i < answer.length; i++){
            display[i] = "_ ";
            outplut = output + display[i];
        }
        document.getElementById("game").innerHTML = output;
        output ="";
    }

    var submit = function(){
        output = "";
        userLetter=$("letter").value;
        $("letter").value = "";
    
        for (var c=0; c < answer.length; c++) {
            alert(letter[c]);
            if (userLetter.toUpperCase() == letters[c]) {
                display[c] = userLetter.toUpperCase();
                win--;
            }
            output = output + display[c] + "";
        }
    
        document.getElementById("game").innerHTML = output;
        output = "";
        attemptsLeft--;
    
        if (win < 1) {
            document.getElementById("guesses").innerHTML = "Hooray, you Win!";
        }
        else if (attempsLeft < 1) {
            document.getElementById("guesses").innerHTML = "Sorry, you Lose!";
        }
        else {
            document.getElementById("guesses").innerHTML = "You have " + attemptsLeft + "guesses left!";
        }
    }

window.onload = function() {
    setup();

}




// Get a letter from the user

// Compare user Letter to the answer:  
//If the letter matches a letter in the answer: replace the _ with a letter in the display
// Subtract one from the number of letters that need to be guessed to win



