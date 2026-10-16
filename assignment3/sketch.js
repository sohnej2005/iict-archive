let level = 0;        
let aliceSize = 1;  
let drink = 60;       
let cake = 60;       
let bottleSquash = 0; 
let cakeSquash = 0; 

function setup() {
  createCanvas(900, 600);
  textFont('Georgia');
}

function draw() {
  background(100, 20, 60);
  noStroke();

  fill(185, 148, 74);
  rect(38, 88, 124, 184);
  rect(218, 88, 124, 184);
  rect(558, 88, 124, 184);
  rect(738, 88, 124, 184);
  fill(100, 20, 60);
  rect(41, 91, 118, 178);
  rect(221, 91, 118, 178);
  rect(561, 91, 118, 178);
  rect(741, 91, 118, 178);

  noFill();
  stroke(185, 148, 74);
  rect(52, 102, 96, 156);
  rect(232, 102, 96, 156);
  rect(572, 102, 96, 156);
  rect(752, 102, 96, 156);
  noStroke();

  fill(185, 148, 74);
  rect(185, 175, 10, 10);
  rect(705, 175, 10, 10);

  fill(48, 28, 20);
  rect(0, 330, width, 60);
  fill(185, 148, 74);
  rect(0, 328, width, 4);

  fill(245, 238, 220);
  rect(0, 390, width, 210);
  fill(56, 8, 2);
  rect(0, 390, 150, 70);
  rect(300, 390, 150, 70);
  rect(600, 390, 150, 70);
  rect(150, 460, 150, 70);
  rect(450, 460, 150, 70);
  rect(750, 460, 150, 70);
  rect(0, 530, 150, 70);
  rect(300, 530, 150, 70);
  rect(600, 530, 150, 70);

  let overBottle = mouseX > 80 && mouseX < 195 && mouseY > 350 && mouseY < 420;
  let overCake = mouseX > 680 && mouseX < 780 && mouseY > 340 && mouseY < 420;

  let target = 1 + level * 0.2;
  aliceSize = aliceSize + (target - aliceSize) * 0.1;

  bottleSquash = bottleSquash * 0.8;
  cakeSquash = cakeSquash * 0.8;

  noStroke();
  fill(92, 58, 34);
  rect(120, 420, 8, 78); 
  rect(212, 420, 8, 78);
  rect(166, 424, 8, 80);
  fill(120, 76, 44);
  ellipse(170, 418, 136, 18); 
  fill(150, 98, 58);
  ellipse(170, 414, 136, 22); 
  fill(92, 58, 34);
  rect(680, 420, 8, 78);
  rect(772, 420, 8, 78);
  rect(726, 424, 8, 80);
  fill(120, 76, 44);
  ellipse(730, 418, 136, 18);
  fill(150, 98, 58);
  ellipse(730, 414, 136, 22);

  let bx = 1 + bottleSquash * 0.1;
  let by = 1 - bottleSquash * 0.15;

  push();
  translate(170, 415);

  if (overBottle) {
    noStroke();
    fill(255, 215, 140, 70);
    circle(0, -30, 100);
    translate(0, -6);
  }

  noStroke();
  fill(190, 90, 175);
  rect(-12 * bx, (-3 - drink * 0.55) * by, 24 * bx, drink * 0.55 * by);

  stroke(240, 250, 255);
  fill(210, 235, 255, 50);
  rect(-14 * bx, -36 * by, 28 * bx, 36 * by);
  rect(-5 * bx, -50 * by, 10 * bx, 15 * by); 
  noStroke();
  fill(160, 112, 60);
  rect(-4 * bx, -57 * by, 8 * bx, 7 * by);  

  translate(-4 * bx, -46 * by);
  if (overBottle) {
    rotate(0.3);
  }
  stroke(138, 106, 58);
  line(0, 0, -20 * bx, 20 * by);
  fill(240, 226, 189);
  rect(-86 * bx, 18 * by, 70 * bx, 22 * by);
  noStroke();
  fill(90, 32, 40);
  textAlign(CENTER, CENTER);
  textSize(12);
  text('DRINK ME', -51 * bx, 29 * by);
  pop();

  let cx = 1 + cakeSquash * 0.1;
  let cy = 1 - cakeSquash * 0.15;

  push();
  translate(730, 415);

  if (overCake) {
    noStroke();
    fill(255, 215, 140, 70);
    circle(0, -26, 110);
    translate(0, -6);
  }

  noStroke();
  fill(250, 245, 235);
  ellipse(0, -4 * cy, 84 * cx, 12 * cy);

  fill(217, 160, 102);
  rect(-30 * cx, -36 * cy, cake * cx, 30 * cy);
  fill(192, 72, 90);
  rect(-30 * cx, -24 * cy, cake * cx, 4 * cy); 
  fill(253, 243, 225);
  rect(-30 * cx, -42 * cy, cake * cx, 8 * cy);

  let edge = -30 + cake;
  fill(61, 31, 42);
  textAlign(CENTER, CENTER);
  textSize(10);
  if (edge > -14) text('E', -17 * cx, -38 * cy);
  if (edge > -7) text('A', -10 * cx, -38 * cy);
  if (edge > 0) text('T', -3 * cx, -38 * cy);
  if (edge > 12) text('M', 9 * cx, -38 * cy);
  if (edge > 20) text('E', 17 * cx, -38 * cy);
  pop();

  let look = 0;
  if (overBottle) {
    look = -1;
  } else if (overCake) {
    look = 1;
  }

  let s = aliceSize;

  push();
  translate(450, 540);
  stroke(59, 42, 42);

  fill(236, 197, 108);
  arc(0, -195 * s, 56 * s, 40 * s, PI, TWO_PI);
  noStroke();
  rect(-28 * s, -195 * s, 56 * s, 65 * s);
  stroke(59, 42, 42);
  line(-28 * s, -195 * s, -28 * s, -130 * s); 
  line(28 * s, -195 * s, 28 * s, -130 * s);   
  line(-28 * s, -130 * s, 28 * s, -130 * s);  

  fill(255);
  rect(-12 * s, -60 * s, 7 * s, 54 * s);
  rect(5 * s, -60 * s, 7 * s, 54 * s);
  fill(30, 26, 34);
  ellipse(-9 * s, -4 * s, 18 * s, 9 * s);
  ellipse(9 * s, -4 * s, 18 * s, 9 * s);

  fill(18, 171, 209);
  quad(-18 * s, -160 * s, 18 * s, -160 * s, 52 * s, -58 * s, -52 * s, -58 * s); // 치마
  rect(-18 * s, -184 * s, 36 * s, 24 * s);                                       // 몸판

  fill(251, 248, 240);
  quad(-11 * s, -158 * s, 11 * s, -158 * s, 36 * s, -68 * s, -36 * s, -68 * s);
  rect(-11 * s, -182 * s, 22 * s, 24 * s);

  let lx = -30;
  let ly = -128;
  let lox = 3;
  let loy = 0;
  let rx = 30;
  let ry = -128;
  let rox = 3;
  let roy = 0;
  if (look == -1) {
    lx = -62;   
    ly = -150;
    lox = 1.5;  
    loy = 2.6;
  }
  if (look == 1) {
    rx = 62;
    ry = -150;
    rox = 1.5;
    roy = -2.6;
  }

  stroke(59, 42, 42);
  fill(247, 220, 200);
  quad((-24 - lox) * s, (-172 - loy) * s, (-24 + lox) * s, (-172 + loy) * s,
       (lx + lox) * s, (ly + loy) * s, (lx - lox) * s, (ly - loy) * s);
  quad((24 - rox) * s, (-172 - roy) * s, (24 + rox) * s, (-172 + roy) * s,
       (rx + rox) * s, (ry + roy) * s, (rx - rox) * s, (ry - roy) * s);
  
  circle(lx * s, ly * s, 9 * s);
  circle(rx * s, ry * s, 9 * s);

  fill(18, 171, 209);
  ellipse(-22 * s, -177 * s, 18 * s, 16 * s);
  ellipse(22 * s, -177 * s, 18 * s, 16 * s);

  fill(247, 220, 200);
  ellipse(0, -205 * s, 46 * s, 50 * s);

  fill(236, 197, 108);
  arc(0, -207 * s, 50 * s, 46 * s, PI, TWO_PI);
  line(-25 * s, -207 * s, 25 * s, -207 * s);

  noFill();
  stroke(34, 32, 42);
  arc(0, -208 * s, 48 * s, 44 * s, PI + 0.35, TWO_PI - 0.35);
  arc(0, -208 * s, 50 * s, 46 * s, PI + 0.35, TWO_PI - 0.35);
  arc(0, -208 * s, 52 * s, 48 * s, PI + 0.35, TWO_PI - 0.35);

  noStroke();
  fill(20, 18, 24);
  ellipse(-5 * s, -231 * s, 13 * s, 9 * s);
  ellipse(5 * s, -231 * s, 13 * s, 9 * s);

  fill(58, 42, 74);
  ellipse((-9 + look * 2.5) * s, -201 * s, 5 * s, 7 * s);
  ellipse((9 + look * 2.5) * s, -201 * s, 5 * s, 7 * s);

  fill(240, 140, 140, 90);
  ellipse(-13 * s, -194 * s, 8 * s, 5 * s);
  ellipse(13 * s, -194 * s, 8 * s, 5 * s);

  stroke(59, 42, 42);
  if (level != 0) {
    fill(160, 64, 74);
    ellipse(0, -189 * s, 5 * s, 6 * s);
  } else {
    noFill();
    arc(0, -191 * s, 8 * s, 5 * s, 0, PI);
  }
  pop();
}

function mousePressed() {
  if (mouseX > 80 && mouseX < 195 && mouseY > 350 && mouseY < 420) {
    if (drink > 0 && level > -3) {
      drink = drink - 10;
      level = level - 1;
      bottleSquash = 1;
    }
  }
  
  if (mouseX > 680 && mouseX < 780 && mouseY > 340 && mouseY < 420) {
    if (cake > 0 && level < 3) {
      cake = cake - 10;
      level = level + 1;
      cakeSquash = 1;
    }
  }
}

function keyPressed() {
  level = 0;
  aliceSize = 1;
  drink = 60;
  cake = 60;
  bottleSquash = 0;
  cakeSquash = 0;
}