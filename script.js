function updateCircle() {
  const angleInput = document.getElementById('angleInput');
  let angleDeg = parseFloat(angleInput.value);

  if (isNaN(angleDeg)) {
    alert("Please enter a valid number for the angle.");
    return;
  }
  
  angleDeg = ((angleDeg % 360) + 360) % 360;
  angleInput.value = angleDeg.toFixed(2);
  angleDeg = ((angleDeg % 360) + 360) % 360;
  const angleRad = angleDeg * Math.PI / 180;
  const cosVal = Math.cos(angleRad);
  const sinVal = Math.sin(angleRad);
  document.getElementById('angleVal').textContent = angleDeg.toFixed(2);
  document.getElementById('cosVal').textContent = cosVal.toFixed(4);
  document.getElementById('sinVal').textContent = sinVal.toFixed(4);
  const radiusLine = document.getElementById('radiusLine');
  radiusLine.setAttribute('x2', cosVal);
  radiusLine.setAttribute('y2', -sinVal);
  const point = document.getElementById('point');
  point.setAttribute('cx', cosVal);
  point.setAttribute('cy', -sinVal);
  const cosLine = document.getElementById('cosLine');
  cosLine.setAttribute('x2', cosVal);
  cosLine.setAttribute('y2', 0);
  const sinLine = document.getElementById('sinLine');
  sinLine.setAttribute('x1', cosVal);
  sinLine.setAttribute('y1', 0);
  sinLine.setAttribute('x2', cosVal);
  sinLine.setAttribute('y2', -sinVal);
  const angleLabel = document.getElementById('angleLabel');
  angleLabel.setAttribute('x', cosVal + 0.05);
  angleLabel.setAttribute('y', -sinVal - 0.05);
  angleLabel.textContent = angleDeg.toFixed(1) + '°';
}
document.getElementById('calcBtn').addEventListener('click', updateCircle);
updateCircle();
