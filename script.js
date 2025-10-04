function updateCircle() {
  const angleInput = document.getElementById('angleInput');
  const angleUnit = document.querySelector('input[name="angleUnit"]:checked').value;
  let angle = parseFloat(angleInput.value);

  if (isNaN(angle)) {
    alert("Please enter a valid number for the angle.");
    return;
  }

  let angleDeg;
  if (angleUnit === 'radians') {
    angleDeg = angle * (180 / Math.PI);
  } else {
    angleDeg = angle;
  }

  angleDeg = ((angleDeg % 360) + 360) % 360;

  if (angleUnit === 'radians') {
    angleInput.value = (angleDeg * (Math.PI / 180)).toFixed(4);
  } else {
    angleInput.value = angleDeg.toFixed(2);
  }

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
angleLabel.textContent = angleDeg.toFixed(1) + (angleUnit === 'degrees' ? '°' : ' rad (converted)');

  const tanLine = document.getElementById('tanLine');
const cotLine = document.getElementById('cotLine');


let tanVal = Math.tan(angleRad);
let cotVal = (Math.abs(tanVal) < 1e-10) ? Infinity : 1 / tanVal;
document.getElementById('cotVal').textContent = (cotVal === Infinity || cotVal === -Infinity) ? '∞' : cotVal.toFixed(4);
document.getElementById('tanVal').textContent = (Math.abs(tanVal) > 1e10) ? '∞' : tanVal.toFixed(4);

const maxLength = 1.5;
const tanX = 1;
let tanY = -tanVal;
if (Math.abs(tanY) > maxLength) tanY = tanY > 0 ? maxLength : -maxLength;

tanLine.setAttribute('x1', 1);
tanLine.setAttribute('y1', 0);
tanLine.setAttribute('x2', 1);
tanLine.setAttribute('y2', tanY);

let cotX = -cotVal;
if (Math.abs(cotX) > maxLength) cotX = cotX > 0 ? maxLength : -maxLength;

cotLine.setAttribute('x1', 0);
cotLine.setAttribute('y1', 1);
cotLine.setAttribute('x2', cotX);
cotLine.setAttribute('y2', 1);
}
