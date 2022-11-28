/* 
	Problem 6: Write a function that will use the previously written functions to get 
    the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

let boardData = require("./callback1");
let listData = require("./callback2");
let cardData = require("./callback3");
let lists = require("./lists.json");
let cards = require("./cards.json");
//used overloading for callback5 function( from previous question) to get this question's output.
