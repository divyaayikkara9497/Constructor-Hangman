//require inquirer
var inquirer = require('inquirer');
var prompt = require("prompt");
//require objects/exports
var Game = require('./game.js'); //has a list of words and randomizes them 
var Letter = require('./letter.js') //to see how many dashs will be need for the random word
var Word = require('./word.js'); // to see whether the letter by the user is correct or not


var letterGuessed = [];
var correctGuessed = [];
var hangman;

function initialGame () {
	this.word = Game,
	this. guessRemaining = 10,
	console.log("Random Word: " + this.word);
	console.log("Hello to the Hangman Game");
	console.log("Guess the word!")
	console.log("(Hint: think about fruits)");
	hangman = new Letter(this.word);
	hangman.displayWord();
	console.log("You have" + initialGame.guessRemaining + "guesses remaining");
	promptUser();
};

function promptUser(){

}

initialGame();



