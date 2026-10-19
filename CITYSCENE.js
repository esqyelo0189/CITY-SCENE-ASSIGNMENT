// draws one star in the night sky
function drawStar(x, y, size) {

  noStroke();
  fill(255, 255, 200);
  circle(x, y, size);

}


// calculates and returns the width of a building
function getBuildingWidth(size) {

  let buildingWidth = size * 0.8;

  return buildingWidth;

}


// draws one building with windows
function drawBuilding(x, y, size) {

  let buildingWidth = getBuildingWidth(size);
  let buildingHeight = size * 2;

  let windowSize = size * 0.12;
  let window1 = size * 0.2;
  let window2 = size * 0.5;

  noStroke();

  // building
  fill(35, 40, 60);
  rect(x, y, buildingWidth, buildingHeight);

  // windows
  fill(255, 220, 80);

  rect(x + window1, y + window1, windowSize, windowSize);
  rect(x + window2, y + window1, windowSize, windowSize);

  rect(x + window1, y + size * 0.5, windowSize, windowSize);
  rect(x + window2, y + size * 0.5, windowSize, windowSize);

  rect(x + window1, y + size * 0.8, windowSize, windowSize);
  rect(x + window2, y + size * 0.8, windowSize, windowSize);

  rect(x + window1, y + size * 1.1, windowSize, windowSize);
  rect(x + window2, y + size * 1.1, windowSize, windowSize);

  rect(x + window1, y + size * 1.4, windowSize, windowSize);
  rect(x + window2, y + size * 1.4, windowSize, windowSize);

}


// draws the moon in the night sky
function drawMoon(x, y, size) {

  let moonSize = size * 1.0;

  noStroke();
  fill(255, 245, 180);
  circle(x, y, moonSize);

}


// draws the road and road markings
function drawRoad(x, y, size) {

  let roadWidth = size * 7;
  let roadHeight = size * 1.2;

  let lineWidth = size * 0.90;
  let lineHeight = size * 0.08;

  noStroke();

  // road
  fill(45, 45, 45);
  rect(x, y, roadWidth, roadHeight);

  // road markings
  fill(255, 220, 80);

  rect(x + size * 0.20, y + size * 0.55, lineWidth, lineHeight);
  rect(x + size * 1.50, y + size * 0.55, lineWidth, lineHeight);
  rect(x + size * 2.80, y + size * 0.55, lineWidth, lineHeight);
  rect(x + size * 4.10, y + size * 0.55, lineWidth, lineHeight);
  rect(x + size * 5.40, y + size * 0.55, lineWidth, lineHeight);

}


function setup() {

  createCanvas(700, 450);
  background(15, 20, 50);

  // stars
  drawStar(40, 50, 4);
  drawStar(170, 40, 4);
  drawStar(280, 70, 4);
  drawStar(450, 45, 4);
  drawStar(620, 60, 4);
  drawStar(350, 30, 4);
  drawStar(550, 100, 4);

  // moon
  drawMoon(100, 80, 70);

  // buildings
  drawBuilding(50, 180, 120);
  drawBuilding(200, 130, 140);
  drawBuilding(370, 170, 110);
  drawBuilding(520, 110, 130);

  // road
  drawRoad(0, 330, 100);

}