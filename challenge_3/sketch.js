function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
}
function draw() {

	// gnerate random values for random colors
	var red = random(255);
	var green = random(255);
	var blue = random(255);

	// clear the background
	background(77, 78, 96);
	var crossX = constrain(mouseX, 40, 140);
	var crossY = constrain(mouseY, 30, 130);

	var crossX2 = constrain(mouseX, 390, 490);
	var crossY2 = constrain(mouseY, 30, 130);

	if (mouseIsPressed) {

		// random color
		fill(red, green, blue);

		// make the constraints more tight if the balls are bigger
		var crossX = constrain(mouseX, 50, 130);
		var crossY = constrain(mouseY, 40, 120);

		var crossX2 = constrain(mouseX, 400, 480);
		var crossY2 = constrain(mouseY, 40, 120);

	}

	// eyes
	rect(70, 50, 150, 150);
	rect(420, 50, 150, 150);

	// mouth
	rect(240, 300, 160, 40);

	if (mouseIsPressed) {
		// open mouth
		rect(240, 300, 160, 100);
	}

	// draw x
	fill(239, 65, 54);
	stroke(239, 65, 54);
	strokeWeight(18);

	if (mouseIsPressed) {
		// big mouth
		ellipse(56 + crossX, 46 + crossY, 50, 50);
		ellipse(56 + crossX2, 46 + crossY2, 50, 50);
	} else {
		//small mouth
		ellipse(56 + crossX, 46 + crossY, 30, 30);
		ellipse(56 + crossX2, 46 + crossY2, 30, 30);
	}
}
