var start = 0;
var r1, r2, g1, g2, b1, b2;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // lebar kotak & tinggi
  angleMode(DEGREES);
  noiseDetail(4);

  r1 = random(255);
  r2 = random(20);

  g1 = random(255);
  g2 = random(255);

  b1 = random(255);
  b2 = random(255);
}

function draw() {
  background(30);
  noStroke();

  translate(0, 0, -width);

  rotateY(frameCount / 2);
  rotateX(frameCount / 2);

  translate(-width / 2, -height / 2, -width /2);

  var space = width / 10;
  var indexX = 0;

  for (var x = 0; x < width; x += space) {

    var indexY = 0;
    for (var y = 0; y < height; y += space) {

      var indexZ = 0;
      for (var z = 0; z < width; z += space) {
        push();

        var h = noise(indexX + start, indexY + start, indexZ + start) * 255;

        var r = map(h, 0, 255, r1, r2);
        var g = map(h, 0, 255, g1, g2);
        var b = map(h, 0, 255, b1, b1);

        fill(r, g, b);

        translate(x, y, z);

        box(space);

        pop();

        indexZ += 0.1;
      }
      indexX += 0.1;
    }
    start += 0.02;
  }
}