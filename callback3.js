/* 
	Problem 3: Write a function that will return all cards that belong to a particular list 
    based on the listID that is passed to it from the given data in cards.json. Then 
    pass control back to the code that called it by using a callback function.
*/

let boards = require("./boards.json");
let cards = require("./cards.json");

function problem3(listID, callback) {
	console.log("starting program...");
	setTimeout(() => {
		// Your code here
		if (cards[listID]) {
			callback(null, listID);
		} else {
			callback(new Error("Not found"), listID);
		}
		console.log("control is returning back to problem3 function");
	}, 2 * 1000);
}
// function callback(err, boardID) {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(lists[boardID]);
// 	}
// }
module.exports = problem3;

