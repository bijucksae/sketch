class Firework {
  constructor(x) {
    this.pos = createVector(x, height);
    this.vel = createVector(0, random(-8, -12));
    this.exploded = false;
    this.particles = [];
  }

  update() {
    if (!this.exploded) {
      this.vel.add(createVector(0, 0.2));
      this.pos.add(this.vel);
      
      
      if (this.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    } else {
      for (let p of this.particles) {
        p.applyForce(createVector(0, 0.1));
        p.update();
      }
      this.particles = this.particles.filter(p => !p.isDead());
    }
  }

  display() {
    if (!this.exploded) {
      fill(255, 150, 0);
      ellipse(this.pos.x, this.pos.y, 8);
    } else {
      for (let p of this.particles) {
        p.display();
      }
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      let angle = random(TWO_PI);
      let speed = random(2, 5);
      let velocity = p5.Vector.fromAngle(angle).mult(speed);
      this.particles.push(new Particle(this.pos.x, this.pos.y, velocity));
    }
  }

  isDone() {
    return this.exploded && this.particles.length === 0;
  }
}
