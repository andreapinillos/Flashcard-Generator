var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard(
	"Who was the first president of the United States?", "George Washington");
		//Who was the first president of the United States?
		console.log(firstPresident.front);
		//"George Washington"
		console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
	"George Washington was the first president of the United States." "George Washington");
	//"George Washington"
	console.log(firstPresidentClose.cloze);
	//"...was the first president of the United States."
	console.log(firstPresidentCloze.partial);
	//"George Washington was the first president of the United States."
	console.log(firstPresidentCloze.fullText);

//log error variable
var brokenCloze = new CloseCard("This doesn't work", "oops");
