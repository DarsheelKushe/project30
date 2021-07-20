class Block {
  constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          density: 0.001,
          friction: 1
      }
          this.visibility = 255;
          this.image = loadImage("block.png")
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.angle;
      push();
      if (this.body.speed < 3) {
          imageMode(CENTER);
          translate(pos.x, pos.y);
          rotate(angle);
          image(this.image,0, 0, this.width, this.height);
          pop();
      } else {
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 0.1;
          tint(255, this.visibility);
          pop();
      }
  }
}