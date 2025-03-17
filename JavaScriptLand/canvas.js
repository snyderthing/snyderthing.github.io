// Find the element
var c = document.getElementById("myCanvas1");
// Create a drawing object. Properties and methods come with this.
var ctx = c.getContext("2d");
// Use the methods to draw things
/*
To draw a straight line on a canvas, use the following methods:

moveTo(x, y) - defines the starting point of the line
lineTo(x, y) - defines the ending point of the line
To actually draw the line, you must use one of the "ink" methods, like stroke().
*/
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

/*
To draw a circle on a canvas, use the following methods:

beginPath() - begins a path
beginPath() declares that we are about to draw a new path (without drawing)
arc(x, y, r, startangle, endangle) - creates an arc/curve. 
To create a circle with arc(): Set startangle to 0 and endangle to 2*Math.PI. 
The x- and y-coordinates define the center of the circle. 
r defines the radius of the circle
*/
var d = document.getElementById("myCanvas2");
var dtx = d.getContext("2d");
dtx.beginPath(); // beginPath() seems useless. It doesn't seem to matter if one uses it or not.
// Define a circle with the arc() method. 
// Then use the stroke() method to actually draw the circle:
dtx.arc(95, 50, 40, 0, 2 * Math.PI);
dtx.stroke();

var e = document.getElementById("myCanvas3");
var etx = e.getContext("2d");
etx.font = "30px Arial";
etx.fillText("Hey, Bonk!", 10, 50);

var f = document.getElementById("myCanvas4");
var ftx = f.getContext("2d");
ftx.font = "30px Arial";
ftx.strokeText("Grönkelsteinigung", 10, 50);

// Gradient
var g = document.getElementById("myCanvas5");
var gtx = g.getContext("2d");

// Create gradient
var grd = gtx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
gtx.fillStyle = grd;
gtx.fillRect(10, 10, 150, 80); // fillRect(x, y, width, height) - defines the start-point and the width and height of the rectangle

// Circular Gradient
var h = document.getElementById("myCanvas6");
var htx = h.getContext("2d");

// Create gradient
var grd2 = htx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd2.addColorStop(0, "blue");
grd2.addColorStop(1, "white");

// Fill with gradient
htx.fillStyle = grd2;
htx.fillRect(10, 10, 150, 80);

// Canvas with an image
var i = document.getElementById("myCanvas7");
var itx = i.getContext("2d");
var img = document.getElementById("scream");
itx.drawImage(img, 10, 10);