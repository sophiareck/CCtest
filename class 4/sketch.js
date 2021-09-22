var animation = true;
var size = 20;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(175, 0, 255);
  /**  for (let i = 0; i < 3; i++) {
      ellipse(frameCount % 500, 50 + (200 * i), 50, 50 + (frameCount % 200));
    }
    **/
  let range = 200;
  let change1 = frameCount % range;
  fill(change1);

  ellipse((width / 2 + sin(frameCount / 10) * 250), height / 2, size, size);
}

function keyPressed() {
  if (keyCode == ENTER) {
    animation = !animation;
    if (animation == false) {
      noLoop();
    } else {
      loop();
    }
  } else if (keyCode == 38) {
    if (size <= (height-20)) {
      size += 20;
    }
  } else if (keyCode == 40) {
    if (size >= 40) {
      size -= 20;
    }
  }
  print(keyCode);
}
