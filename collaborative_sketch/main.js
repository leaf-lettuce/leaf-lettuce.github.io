 var config = {
    apiKey: "AIzaSyBVmg3maG4EFB0CiE8AA8i8ix9rNodparY",
    authDomain: "collaborative-sketch-b4513.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-b4513.firebaseio.com",
    storageBucket: "collaborative-sketch-b4513.appspot.com",
    messagingSenderId: "943632506452"
  };
  firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();

var points = [];

function setup() {
var canvas = createCanvas(600, 600);
    background(255);
    fill(0);
    
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    })
    
    pointsData.on("child_removed", function () {
      points = [];
    })
    
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
}

function draw() {
    background(255);
    
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        ellipse(point.x, point.y, 5, 5);
    }
}

function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY})
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}