var showLetter = function(word) {
	this.word = word;
	//this.guessWord = guessWord;
	this.display = ""

	this.displayWord = function() {
		var show = " "
		for (var i = 0; i < this.word.length; i++) {
			show += "_"
		} 

	this.display = show.trim();
	console.log(this.display);
}
}

//var user = new showLetter("hello");
//user.displayWord();


module.exports = showLetter;
