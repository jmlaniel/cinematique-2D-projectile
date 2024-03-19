// Object initialization function
//
function objectInit(p) {
  // Initialize axis
  xAxis.init();
  // Initialize blocks
  projectile.init();
  // Initialize velocity vector (arrow)
  arrow.init(
    projectile.xCanvas,
    projectile.yCanvas,
    projectile.vel0.x,
    -projectile.vel0.y
  );
  // Initialize plots
  plotXPos.init();
  plotXVel.init();
  plotYPos.init();
  plotYVel.init();
}
