let fireworks = [];
let fireworkCount = 0;
let maxFireworks = 5;
let fireworkSpacing;
let sticks = []; 

function setup() {
  createCanvas(800, 600);
  background(0);
  fireworkSpacing = width / maxFireworks;
}

function draw() {
  background(0, 50);
  
  for (let i = fireworks.length - 1; i >= 0; i--) {
    let fw = fireworks[i];
    fw.update();
    fw.display();
    
    if (fw.isDone()) {
      fireworks.splice(i, 1);
    }
  }

  if (fireworkCount < maxFireworks && frameCount % 60 === 0) {
    let fireworkPosX = fireworkSpacing * fireworkCount + fireworkSpacing / 2; // 각 불꽃의 x 위치 계산
    fireworks.push(new Firework(fireworkPosX));
    let fw = fireworks[fireworks.length - 1];
    sticks.push(new Stick(fw.pos.x, height));
    fireworkCount++;
  }

  for (let i = 0; i < sticks.length; i++) {
    let stick = sticks[i];
    if (!stick.isFalling && stick.height < stick.targetHeight) {
      stick.height += 2; 
    }
  }
}