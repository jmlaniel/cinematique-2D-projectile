//-------------------------------------------------------------------------
// Control functions (running, pause, stop)
//-------------------------------------------------------------------------

// Start Simulation
function simRunning(p) {
  // initialize time
  t = 0;
  simPhase = "running"; // Set phase to running
  stopperState = "off"; // Set stopperState flag to off
  // Set coordinates and velocities to initial conditions
  objectInit(p);
  // Draw objects
  objectDraw();
}

// Pause simulation
function simPause(p) {
  switch (simPhase) {
    case "pause":
      simPhase = "running"; // Toggle pause for running
      break;
    case "running":
      simPhase = "pause"; // Toggle running for pause
      break;
  }
}

// Stop Simulation
function simStopping(p) {
  simPhase = "setup"; // Set phase to running
}

//-------------------------------------------------------------------------
// Inputs
//-------------------------------------------------------------------------

function guiText(p) {
  // General coordinates for gui text
  let x0 = 10;
  let y0 = 30;

  // Title
  let dx = 0;
  let dy = 0;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("Cinématique 2D - Projectile", x0, y0);

  // Block X Position
  dx = 0;
  dy = 30;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("x0 (m) :", x0, y0);

  // Block Y Position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("y0 (m) : ", x0, y0);

  // Block Velocity Magnitude
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("v0 (m/s) : ", x0, y0);

  // Block Velocity Orientation (degrees)
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("θ (°) : ", x0, y0);

  // Size in meters for the X axis
  dx = 175;
  dy = -75;
  x0 += dx;
  y0 += dy;
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("Longueur de l'axe x (m) : ", x0, y0);

  // X Axis label
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold + 10);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("x", 980, 420);

  // Y Axis label
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeBold + 10);
  p.textStyle(p.BOLD);
  p.fill("black");
  p.text("y", 20, 170);

  // Credits
  p.noStroke();
  p.textFont(fontName);
  p.textSize(fontSizeRegular);
  p.textStyle(p.NORMAL);
  p.text("JML 2021", canvasWidth - 100, canvasHeight - 15);
}

function guiInputs(p) {
  // General coordinates for gui text
  let x0 = 85;
  let y0 = 19;

  // Input for x position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  x0Input = p.createInput(0);
  x0Input.position(x0, y0);
  x0Input.size(inputLength, inputHeight);
  x0Input.style("accentColor", "black");
  x0Input.style("text-align", "right");

  // Input for y position
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  y0Input = p.createInput(0);
  y0Input.position(x0, y0);
  y0Input.size(inputLength, inputHeight);
  y0Input.style("accentColor", "black");
  y0Input.style("text-align", "right");

  // Input for velocity magnitude
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  vInput = p.createInput(projectileInitVel);
  vInput.position(x0, y0);
  vInput.size(inputLength, inputHeight);
  vInput.style("accentColor", "black");
  vInput.style("text-align", "right");

  // Input for velocity orientation
  dx = 0;
  dy = 25;
  x0 += dx;
  y0 += dy;
  thetaInput = p.createInput(projectileInitTheta);
  thetaInput.position(x0, y0);
  thetaInput.size(inputLength, inputHeight);
  thetaInput.style("accentColor", "black");
  thetaInput.style("text-align", "right");

  // Input for axis real lenght (in meters)
  dx = 290;
  dy = -75;
  x0 += dx;
  y0 += dy;
  axisRealLenghtInput = p.createInput(axisRealLenght);
  axisRealLenghtInput.position(x0, y0);
  axisRealLenghtInput.size(inputLength, inputHeight);
  axisRealLenghtInput.style("accentColor", "black");
  axisRealLenghtInput.style("text-align", "right");

  // Setup Run Button
  dx = -200;
  dy = 35;
  x0 += dx;
  y0 += dy;
  runButton = p.createButton("Démarrer");
  runButton.position(x0, y0);
  runButton.size(buttonWidth, buttonHeight);
  runButton.style("font-family", fontName);
  runButton.mousePressed(function () {
    simRunning(p);
  });

  // Setup Pause Button
  dx = 1.1 * buttonWidth;
  dy = 0;
  x0 += dx;
  y0 += dy;
  pauseButton = p.createButton("Pause");
  pauseButton.position(x0, y0);
  pauseButton.size(buttonWidth, buttonHeight);
  pauseButton.style("font-family", fontName);
  pauseButton.mousePressed(function () {
    simPause(p);
  });

  // Setup Stop Button
  dx = 0;
  dx = 1.1 * buttonWidth;
  x0 += dx;
  y0 += dy;
  stopButton = p.createButton("Arrêt");
  stopButton.position(x0, y0);
  stopButton.size(buttonWidth, buttonHeight);
  stopButton.style("font-family", fontName);
  stopButton.mousePressed(function () {
    simStopping(p);
  });

  // Checkbox for displaying plots
  plotDisplayControl = p.createCheckbox("Affichage des graphiques", true);
  plotDisplayControl.position(800, 10);
  plotDisplayControl.style("font-family", fontName);
  plotDisplayControl.changed(plotDisplayStatusControl);
}

// Plot Display control function
function plotDisplayStatusControl() {
  if (this.checked()) {
    plotDisplayStatus = "on";
  } else {
    plotDisplayStatus = "off";
  }
}
