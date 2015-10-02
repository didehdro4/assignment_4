// these positions remain unchanged throughout the code
var xPositionsBeginning = [];
var yPositionsBeginning = [];

// these postions will change
var xPositions = [];
var yPositions = [];

var stemLength = [];
var upSpeed  = [];
var sideSpeed  = [];

var count = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
	colorMode(RGB);
	background(17, 40, 61);
	fill(57, 177, 74);
	rect(0, 280, 640, 200);

	for (var i = 0; i < 40; i++){
		xPositionsBeginning[i] = random(0, 640);
		yPositionsBeginning[i] = random(240, 400);

		// duplicate the variables
		xPositions[i] = xPositionsBeginning[i];
		yPositions[i] = yPositionsBeginning[i];

		stemLength[i] = random(30, 80);
		upSpeed[i] = random(0, 2);
		sideSpeed[i] = random(-3, 3);
	}
}

function draw() {
	var size = 40;
	count ++;
	background(17, 40, 61);
	fill(57, 177, 74);
	rect(0, 280, 640, 200);
	for (var i = 0; i < 40; i++){
		// draw stem
		fill(38, 120, 55, 255);
		rect(xPositionsBeginning[i] - 2.5, yPositionsBeginning[i] - 2.5, 5, stemLength[i], 20);
		ellipse(xPositionsBeginning[i], yPositionsBeginning[i], 15, 15);
		// draw flower
		// first ring
		fill(255, 255, 255, 45);
		ellipse(xPositions[i], yPositions[i] - count , size, size);
		// second ring
		fill(255, 255, 255, 65);
		ellipse(xPositions[i], yPositions[i] - count, size - 10, size - 10);
		// third ring
		fill(255, 255, 255, 75);
		ellipse(xPositions[i], yPositions[i] - count, size - 20, size - 20);
		// fourth ring
		fill(255, 255, 255, 80);
		ellipse(xPositions[i], yPositions[i] - count, size - 30, size - 30);
	}

	// in order for some of the flowers to go faster than others
	// add their aditional speed
	for (var i = 0; i < 40; i++){
		yPositions[i] = yPositions[i] - upSpeed[i];
		xPositions[i] = xPositions[i] - sideSpeed[i];
	}

	if (count > 300) {
		// if the fly too hi, reset them
		for (var i = 0; i < 40; i++){
			xPositions[i] = xPositionsBeginning[i];
			yPositions[i] = yPositionsBeginning[i];
		}

		count = 0;
	}
}
