const problem2 = require("../callback2");
let lists = require("../lists.json");
//let callback=require("../callback2");
function callback(err, boardID) {
	if (err) {
		console.error(err);
	} else {
		console.log(lists[boardID]);
	}
}
problem2("abc122dc", callback);
