/* 
	Problem 1: Write a function that will return a particular board's information based 
    on the boardID that is passed from the given list of boards in boards.json and then 
    pass control back to the code that called it by using a callback function.
*/

let boards = require("./boards.json");
//console.log(boards);

function problem1(boardID, callback) {
	console.log("starting program...");
	// let output;
	setTimeout(() => {
		// Your code here
		let output = boards.reduce((outputObj, board) => {
			if (board.id == boardID) {
				outputObj = board;
				//console.log(outputObj);
			}
			return outputObj;
		}, {});
		callback(output);

		console.log("control is returning to problem1 function");
	}, 2 * 1000);
}
// problem1("mcu453ed");

module.exports = problem1;
