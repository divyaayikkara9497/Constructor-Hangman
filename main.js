//require inquirer
var inquirer = require('inquirer');
var prompt = require("prompt");
//require objects/exports
var Game = require('./game.js'); //has a list of words and randomizes them 
var Letter = require('./letter.js') //to see how many dashs will be need for the random word

var letterGuessed = [];
var correctGuessed = [];
var hangman;

function initialGame () {
	this.word = Game,
	this.guessRemaining = 10,
	console.log("Random Word: " + this.word);
	console.log("Hello to the Hangman Game");
	console.log("Guess the word!")
	console.log("(Hint: think about fruits)");
	hangman = new Letter(this.word);
	hangman.displayWord();
	console.log("You have " + this.guessRemaining + " guesses remaining");
	promptUser();
};

function promptUser(){
	if (this.guessRemaining == 0) {
		console.log("Aww That sucks!");
		console.log("The word was: " + this.word);
	}
	else if(this.guessRemaining > 0){
		inquirer.prompt([
      {
        type: "value",
        name: "letter",
        message: "Guess a Letter: "
      }
    ]).then(function(userInput){
    	var input = userInput.letter.toLowerCase();
    	for(var i = 0; i < this.word.length; i++){
    		if(input === this.word[i]){
    			//console.log(input);
    			correctGuessed.push(input);
    			console.log("Correct Guesses: " + correctGuessed);
    			console.log("Guesses remaining: " + guessRemaining);
    			promptUser();
    		}

    	}
    })
}

}

initialGame();




