var nums = [100,25,12,72];
var r,g,b
var num = 23;
var x = 0
var speedx = 3
var words = ["=","=","=","="]
var wordn = 0

function setup() {
  frameRate(0)
  createCanvas (400,400);
  
}

function draw() {
  r = random(255)
  g = random(255)
  b = random(255)
  background(0);
  textSize(28);
  text(words[wordn], x, 100);
  fill(r,g,b)
  ellipse(x,200,nums[0], num);
  fill(r,g,b)
 x = x + speedx
  if (this.x > width-12.5) {
    speedx = -50;
    wordn = wordn + 1;
  }
   if (this.x < 12.5) {
    speedx = 50
     wordn = wordn + 1;
   }
  
  if(wordn == 4) {
    wordn = 0;
  }
  if (keyIsDown(LEFT_ARROW))
    speedx=0;
 if (keyIsDown(RIGHT_ARROW))
    speedx=0;
  if(speedx == 0) {
		speedx = 50;
  }
}