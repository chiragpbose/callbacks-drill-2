const problem3 = require("../callback3");
let cards = require("../cards.json");
//let callback=require("../callback2");
function callback(err, listID) {
	if (err) {
		console.error(err);
	} else {
		console.log(cards[listID]);
	}
}
problem3("qwsa221", callback);
