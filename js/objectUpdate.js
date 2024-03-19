// Update objects
function objectUpdate() {
  // Update time
  t += dt;

  // Test if canvas edges has been reached
  var xMin = xAxis.base.x;
  var xMax = xAxis.base.x + xAxis.vec.x;
  var yMin = 0;
  var yMax = xAxis.base.y;

  if (
    projectile.xCanvas < xMin ||
    projectile.xCanvas > xMax ||
    projectile.yCanvas < yMin ||
    projectile.yCanvas > yMax
  ) {
    stopperState = "on";
  } else {
    stopperState = "off";
  }

  // Update only if Projectile is still within the canvas
  if (stopperState == "off") {
    // Upgrade graphics
    // X Position plot - Projectile
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      projectile.pos.x.toFixed(2).toString() +
      "m";
    plotXPos.points.push(new GPoint(t, projectile.pos.x, label));

    // X Velocity plot - Projectile
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      projectile.vel.x.toFixed(2).toString() +
      "m/s";
    plotXVel.points.push(new GPoint(t, projectile.vel.x, label));

    // Y Position plot - Projectile
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      projectile.pos.y.toFixed(2).toString() +
      "m";
    plotYPos.points.push(new GPoint(t, projectile.pos.y, label));

    // Y Velocity plot - Projectile
    label =
      t.toFixed(2).toString() +
      "s" +
      ", " +
      projectile.vel.y.toFixed(2).toString() +
      "m/s";
    plotYVel.points.push(new GPoint(t, projectile.vel.y, label));

    // Update objects
    projectile.update();
    arrow.update(
      projectile.xCanvas,
      projectile.yCanvas,
      projectile.vel.x,
      -projectile.vel.y
    );
  }
}
