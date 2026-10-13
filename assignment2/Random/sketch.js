let seed;
let t;
let baking;
let done;

function setup() {
  createCanvas(600, 480);
  seed = random(1000);
  t = 0;
  baking = false;
  done = false;
}

function draw() {
  background(45, 38, 35);

  noStroke();
  fill(90, 85, 80);
  if (baking) {
    fill(255, 90, 40);
  }
  if (baking && frameCount % 60 < 30) {
    fill(255, 60, 20);
  }
  rect(70, 40, 460, 10, 5);
  rect(70, 62, 460, 10, 5);

  fill(80, 80, 85);
  rect(40, 120, 520, 320, 10);

  if (baking) {
    fill(255, 140, 40, 25);
    rect(0, 0, width, height);
  }

  randomSeed(seed); 
  for (let i = 0; i < 6; i=i+1) {
    let x = 140 + (i % 3) * 160;      
    let y = 210 + int(i / 3) * 140;  

    let maxSize = random(80, 130);    
    let speed = random(0.7, 1.3);     
    let tint = random(-15, 15);       
    let chips = int(random(5, 10));   
    let p = min(1, t * speed);              
    let d = 50 + (maxSize - 50) * p;       
    let r = 238 - 42 * p + tint;           
    let g = 220 - 74 * p + tint;
    let b = 180 - 88 * p + tint;

    fill(0, 0, 0, 50);
    ellipse(x + 3, y + 4, d, d * 0.95);

    fill(r, g, b);
    circle(x, y, d);
    circle(x + random(-7, 7), y + random(-7, 7), d * 0.95);
    circle(x + random(-7, 7), y + random(-7, 7), d * 0.92);

    fill(r * 0.9, g * 0.85, b * 0.8, 120);
    circle(x, y, d);
    fill(r, g, b, 90);
    circle(x, y, d * 0.8);

    for (let k = 0; k < chips; k=k+1) {
      let cw = random(9, 13);
      let ch = random(7, 11);

      push();
      translate(x + random(-d * 0.3, d * 0.3), y + random(-d * 0.3, d * 0.3));
      rotate(random(TWO_PI));

      fill(80 - 25 * p, 55 - 20 * p, 40 - 15 * p);
      ellipse(0, 0, cw, ch);
      fill(255, 255, 255, 45);
      ellipse(-cw * 0.15, -ch * 0.2, cw * 0.35, ch * 0.3);
      pop();
    }
  }

  if (baking) {
    t = t + 0.005;
    if (t > 1) {
      t = 1;
      baking = false;
      done = true;
    }
  }
}

function mousePressed() {
  if (done) {
    seed = random(1000); 
    t = 0;
    done = false;
  } else {
    baking = true; 
  }
}

function keyPressed() {
  if (key == 's') {
    saveCanvas('cookies', 'png');
  }
}