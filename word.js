// wasn't able to understand this so used stackoverflow

var checkLetter = function(letter, word) {

  // Check if the letter is in the word
  if(word.indexOf(letter) != -1){
  	//console.log("yes!");
    return true;
  }
  else{
  	//console.log("nah");
    return false;
  }

}

//var newWord = new checkLetter("g" , "hi");


module.exports = checkLetter;