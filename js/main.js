// Kinemtaic 1D Simulator
//
// Libraries used : p5.js, grafica.js
//
// Jacques M. Laniel, august 2021
//
//
// Global Variables
//
// Simulation control variable : 'setup', 'running', 'stop'
let simPhase = "setup";
// Motion state : "static" or "kinetic"
let motionState = "static";
// Test if stopper has been reached ("on") or not ("off")
let stopperState = "off";
// Checkbox variable for displaying or not the plots
plotDisplayStatus = "on";
// canvas size (4:3)
canvasWidth = 1024; // In pixels
canvasHeight = 680; // In pixels

// Time variables
let t = 0;
let fps = 50;
let dt = 1 / fps;

// Gavitationnal acceleration
let g = 9.81;

// Gui global variables
let fontName = "Comic Sans MS";
let fontSizeBold = 18;
let fontSizeRegular = 16;
let fontSizeSmall = 14;
let inputLength = 50;
let inputHeight = 22;
let buttonWidth = 80;
let buttonHeight = 30;

// Initialization variables
// Axis
let axisColor = "Black";
let axisFraction = 0.9; // Fractionnal size of axis with respect to canvas size
let axisRealLenght = 20; // Axis real lenght in meter
// Projectile
let projectileDiameter = 20;
let projectileColor = "SeaGreen";
let projectileColorStroke = "DarkGreen";
let projectileInitVel = 5;
let projectileInitTheta = 45;
// Velocity vector (Arrow)
let velocityVectorMag = 40;

// X Position plot
let plotXPosXCoord = 0;
let plotXPosYCoord = 410;
let plotXPosWidth = 170;
let plotXPosHeight = 150;
let spacingFactor = 1.4;
// X Velocity plot
let plotXVelXCoord = spacingFactor * plotXPosWidth;
let plotXVelYCoord = plotXPosYCoord;
let plotXVelWidth = plotXPosWidth;
let plotXVelHeight = plotXPosHeight;
// Y Position plot
let plotYPosXCoord = 2 * spacingFactor * plotXPosWidth;
let plotYPosYCoord = plotXPosYCoord;
let plotYPosWidth = plotXPosWidth;
let plotYPosHeight = plotXPosHeight;
// Y Velocity plot
let plotYVelXCoord = 3 * spacingFactor * plotXPosWidth;
let plotYVelYCoord = plotXPosYCoord;
let plotYVelWidth = plotXPosWidth;
let plotYVelHeight = plotXPosHeight;

// Vertical position of axis and blocks
let yAxis = canvasHeight * 0.58;
let yProjectileRef = yAxis;

// Create p5 instances for top and bottom sketches
let animP5 = new p5(sketch, "sketch");
