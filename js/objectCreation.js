// Function thet creates all objects
function objectCreation(p) {
  // Create X axis
  xAxis = new Axis(
    p,
    (canvasWidth * (1 - axisFraction)) / 2,
    yAxis,
    axisFraction * canvasWidth,
    0,
    axisColor
  );

  // Create Y Axis
  yAxis = new Axis(
    p,
    (canvasWidth * (1 - axisFraction)) / 2,
    yAxis,
    0,
    -225,
    axisColor
  );

  // Create velocity vector
  arrow = new Arrow(p, 0, 0, 0, 0, axisColor);

  // Create projectile
  projectile = new Projectile(
    p,
    0,
    0,
    0,
    0,
    projectileDiameter,
    projectileColor,
    projectileColorStroke
  );

  // Create plots (x pos, x vel, y pos, y vel)
  plotXPos = new Plot(
    p,
    plotXPosXCoord,
    plotXPosYCoord,
    plotXPosWidth,
    plotXPosHeight,
    "t (s)",
    "x (m/s)",
    "Position x vs temps"
  );
  plotXVel = new Plot(
    p,
    plotXVelXCoord,
    plotXVelYCoord,
    plotXVelWidth,
    plotXVelHeight,
    "t (s)",
    "vx (m/s)",
    "Vitesse x vs temps"
  );
  plotYPos = new Plot(
    p,
    plotYPosXCoord,
    plotYPosYCoord,
    plotYPosWidth,
    plotYPosHeight,
    "t (s)",
    "y (m/s)",
    "Position y vs temps"
  );
  plotYVel = new Plot(
    p,
    plotYVelXCoord,
    plotYVelYCoord,
    plotYVelWidth,
    plotYVelHeight,
    "t (s)",
    "vu (m/s)",
    "Vitesse y vs temps"
  );
}
