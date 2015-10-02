var X;
var Y;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	// frameRate(10)
	// noStroke();
	// noLoop();
}

function draw() {
	// clear the background
	background(50, 20, 21);

	if (mouseIsPressed) {
		stroke(255);
		strokeWeight(5);

		// mouse line
		line(X, Y, pmouseX, pmouseY);

		// other line
		var secondX = X - abs(X - mouseX)/-2;
		var secondY = Y - abs(Y - pmouseY)/2;
		line(X, Y, secondX, secondY);
		strokeWeight(1);

		// mouse circle
		fill(255, 255, 255);
		ellipse(pmouseX, pmouseY, 50, 50);
		fill(28,117, 255);
		ellipse(pmouseX, pmouseY, 30, 30);

		// other circle
		fill(255, 255, 255);
		ellipse(secondX, secondY, 50, 50);
		fill(28,117, 255);
		ellipse(secondX, secondY, 30, 30);

	} else {

		X = mouseX;
		Y = mouseY;
	}
	fill(255, 255, 255);
	ellipse(X, Y, 50, 50);
	fill(28,117, 255);
	ellipse(X, Y, 30, 30);

	// stroke(255);
	// strokeWeight(5);
	// line(mouseX, mouseY, pmouseX , pmouseY);
}
