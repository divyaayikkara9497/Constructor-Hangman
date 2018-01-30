//require inquirer
var inquirer = require('inquirer');
var prompt = require("prompt");
//require objects/exports
var checkWord = require('./word.js');
var guessWord = require('./game.js');

//global variables 
var letterGuessed = [];
var correctGuessed = [];
var hangman;

//game function
console.log("hello!");
