/* 
	Problem 4: Write a function that will use the previously written functions to get 
    the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind list simultaneously
*/

let boardData = require("./callback1");
let listData = require("./callback2");
let cardData = require("./callback3");
let lists = require("./lists.json");
let cards = require("./cards.json");
//console.log(lists);
let mindID = [];
for (let list in lists) {
	//console.log("internal array ", lists[list]);
	let element = lists[list];
	//console.log(element);
	mindID = element.filter((obj) => {
		return obj.name === "Mind";
	});
	if (mindID) break;
}
console.log(mindID);

function problem4(boardID, listID, mindID) {
	boardData(boardID, (output) => {
		console.log(output);
	});
	listData(listID, (err, listID) => {
		if (err) {
			console.error(err);
		} else {
			console.log(lists[listID]);
		}
	});
	cardData(mindID, (err, mindID) => {
		if (err) {
			console.error(err);
		} else {
			console.log(cards[mindID]);
		}
	});
}
//problem4("mcu453ed", "mcu453ed", "qwsa221");
module.exports = problem4;
