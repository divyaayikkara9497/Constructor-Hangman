// file that contains the list of words thatt will be randonly selected for the player
var wordList = ["apple", "banana", "mango", "orange", "strawberries", "peach", "plum"];
var randomWord = [Math.floor(Math.random()*wordList.length)];
var choosenWord = wordList[randomWord];

//console.log(choosenWord);

module.exports = choosenWord;