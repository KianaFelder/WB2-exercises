"use strict"
let roomX = 14;
let roomY = 15;

let areaOfRoom = roomX * roomY;
let numberOfTilesInBox = 12

let numberofBoxes = areaOfRoom / numberOfTilesInBox

//let tiles = 1600 + (0.1 * 1600)

numberofBoxes = Math.ceil(numberofBoxes)

//let numOfboxes = tiles/numberOfTilesInbox;

console.log(numberofBoxes);


// var length = 30;
// var width = 9;
// var tilePreBox = 12;
// var squareFooted = length * width;
