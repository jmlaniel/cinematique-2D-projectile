// Draw function
//
function objectDraw() {
  // Draw Objects
  xAxis.draw();
  yAxis.draw();
  projectile.draw();
  arrow.draw();
  // Update plots
  if (plotDisplayStatus == "on") {
    plotXPos.draw();
    plotXVel.draw();
    plotYPos.draw();
    plotYVel.draw();
  }
}
