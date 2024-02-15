const form = document.querySelector('form');
const result = document.querySelector('#results');
const uWeight = document.querySelector('#uWeight');
const nWeight = document.querySelector('#nWeight');
const oWeight = document.querySelector('#oWeight');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  uWeight.style.backgroundColor = '';
  nWeight.style.backgroundColor = '';
  oWeight.style.backgroundColor = '';

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height-${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight-${weight}`;
  } else {
    calculateBMI(height, weight);
  }
});

function calculateBMI(height, weight) {
  const BMI = (weight / ((height * height) / 10000)).toFixed(2);

  let weightType;

  if (BMI < 18.6) weightType = 'Under weight';
  else if (BMI >= 18.6 && BMI <= 24.9) weightType = 'Normal Range';
  else weightType = 'Overweight';

  result.innerHTML = `<span>${BMI}</span></br>
  <span>${weightType}</span>`;

  if (weightType === 'Under weight') {
    uWeight.style.backgroundColor = 'yellow';
  } else if (weightType === 'Normal Range') {
    nWeight.style.backgroundColor = 'green';
  } else if (weightType === 'Overweight') {
    oWeight.style.backgroundColor = 'red';
  }
}
