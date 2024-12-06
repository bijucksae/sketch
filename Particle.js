class Particle {
  constructor(x, y, velocity) {
    this.pos = createVector(x, y);
    this.vel = velocity;
    this.lifespan = 255;
  }

  applyForce(force) {
    this.vel.add(force);
  }

  update() {
    this.pos.add(this.vel);
    this.lifespan -= 5;
  }

  display() {
    noStroke();
    fill(255, this.lifespan, 0, this.lifespan); 
    ellipse(this.pos.x, this.pos.y, 6);
  }

  isDead() {
    return this.lifespan <= 0;
  }
}