document.getElementById('generateBtn').addEventListener('click', () => {
  const min = parseInt(document.getElementById('min').value);
  const max = parseInt(document.getElementById('max').value);

  if (isNaN(min) || isNaN(max) || min >= max) {
    document.getElementById('resultText').textContent = 'Please enter valid numbers';
    return;
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('resultText').textContent = `Random number: ${randomNumber}`;
});
