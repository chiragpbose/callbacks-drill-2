/* 
	Problem 5: Write a function that will use the previously written functions to 
    get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

let boardData = require("./callback1");
let listData = require("./callback2");
let cardData = require("./callback3");
let lists = require("./lists.json");
let cards = require("./cards.json");

function callback5fn(triggerFor6) {
	console.log(lists);
	let mindID = [];
	let arr = [];
	for (let list in lists) {
		//console.log("internal array ", lists[list]);
		let element = lists[list];
		// console.log(element);

		arr = element.filter((element) => {
			// console.log(element);
			if (element.name === "Mind" || element.name === "Space") {
				return true;
			}
		});

		//console.log(arr);
		if (arr.length > 0) {
			break;
		}
	}
	console.log(arr);
	if (triggerFor6 == null) {
		let listIDArr = arr.reduce((listArr, objElement) => {
			listArr.push(objElement.id);
			return listArr;
		}, []);
		listIDArr.forEach((element) => {
			console.log(element + ": ");
			console.log(cards[element]);
		});
	} else {
		console.log(cards);
	}
}
module.exports = callback5fn;
