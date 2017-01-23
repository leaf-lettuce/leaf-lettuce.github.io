var NUM_CIRCLES = 12;

var circleDiameter;
var circleRadius;

var rVal;
var gVal;
var bVal;

function setup() {
    createCanvas(480, 600);
    
    frameRate(2);
    
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    
    rVal = 179;
    gVal = 35;
    bVal = 250;
}

function draw() {
    var isShifted = false;
    
    var y = height;
    while (y >= 0) {
        
        var x;
        
        if (isShifted) {
            x = circleRadius;
        } else {
            x = 0;
        }
        
        while (x <= width) {
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal, gVal, bVal));
            triangle(x, y, 200, 200);
            x = x + circleDiameter;
        }
   
        y = y - circleRadius;
        isShifted = !isShifted
        
        rVal = (rVal + 254) % 256;
        gVal = (gVal + 7) % 256;
        bVal = (bVal + 3) % 256;
    }
}