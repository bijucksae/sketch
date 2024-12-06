class Stick {
  constructor(x, y) {
    this.x = x;
    this.height = 0;
    this.isFalling = false;
    this.targetHeight = random(100, 300); 
  }

  update() {
    if (this.height < this.targetHeight && !this.isFalling) {
      this.height += 2; 
    }
  }
}