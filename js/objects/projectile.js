// Block object
//
function Projectile(p, x0, y0, v0, theta0, diameter, color, colorStroke) {
  // Initialize Block variables
  this.color = color;
  this.colorStroke = colorStroke;
  this.projectileDiameter = diameter;
  this.pos0 = p.createVector(x0, y0);
  this.vel0 = p.createVector(v0 * p.cos(theta0), v0 * p.sin(theta0));
  this.acc = p.createVector(0, -g);
  this.pos = p.createVector(0, 0);
  this.vel = p.createVector(0, 0);
  this.xCanvas = 0;
  this.yCanvas = 0;

  // Initialize function
  this.init = function () {
    this.pos0 = p.createVector(
      parseFloat(x0Input.value()),
      parseFloat(y0Input.value())
    );
    this.pos = p.createVector(
      parseFloat(x0Input.value()),
      parseFloat(y0Input.value())
    );
    var theta = (parseFloat(thetaInput.value()) * p.PI) / 180;
    var velx = parseFloat(vInput.value()) * p.cos(theta);
    var vely = parseFloat(vInput.value()) * p.sin(theta);
    this.vel0 = p.createVector(velx, vely);
    this.vel = p.createVector(velx, vely);
    this.xCanvas =
      canvasWidth *
      ((axisFraction * this.pos.x) / axisRealLenght + 0.5 - 0.5 * axisFraction);
    this.yCanvas =
      yProjectileRef -
      canvasWidth * ((axisFraction * this.pos.y) / axisRealLenght);
  };

  // Update function
  this.update = function () {
    // Update position and velocity using MUA equations
    this.pos.x = this.pos0.x + this.vel0.x * t + 0.5 * this.acc.x * t * t;
    this.vel.x = this.vel0.x + this.acc.x * t;
    this.pos.y = this.pos0.y + this.vel0.y * t + 0.5 * this.acc.y * t * t;
    this.vel.y = this.vel0.y + this.acc.y * t;
    this.xCanvas =
      canvasWidth *
      ((axisFraction * this.pos.x) / axisRealLenght + 0.5 - 0.5 * axisFraction);
    this.yCanvas =
      yProjectileRef -
      canvasWidth * ((axisFraction * this.pos.y) / axisRealLenght);
  };

  // Draw function
  this.draw = function () {
    // draw table
    p.rectMode(p.CENTER);
    p.strokeWeight(3);
    p.stroke(this.colorStroke);
    p.fill(this.color);
    p.circle(this.xCanvas, this.yCanvas, this.projectileDiameter);
  };
}
