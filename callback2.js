/* 
	Problem 2: Write a function that will return all lists that belong to a board based 
    on the boardID that is passed to it from the given data in lists.json. Then 
    pass control back to the code that called it by using a callback function.
*/
let boards = require("./boards.json");
let lists = require("./lists.json");

function problem2(boardID, callback) {
	console.log("starting program...");
	setTimeout(() => {
		// Your code here
		if (lists[boardID]) {
			callback(null, boardID);
		} else {
			callback(new Error("Not found"), boardID);
		}
		console.log("control is returning back to problem2 function");
	}, 2 * 1000);
}
// function callback(err, boardID) {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log(lists[boardID]);
// 	}
// }
module.exports = problem2;

