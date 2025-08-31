const para = document.querySelector('#paraId');

const addButton = document.querySelector('#addstyle');
const removeButton = document.querySelector('#removestyle');
const randomBtn = document.querySelector('#randomcolor');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const changeBtn = document.querySelector('#changetext');
const modeBtn = document.querySelector('#mode');

let currentSize = 16; // base font size in px

// Add/Remove Style toggle
if (addButton) {
  addButton.addEventListener("click", () => {
    para.classList.toggle("para-style");
  });
}

// Remove Style and reset font size and color
if (removeButton) {
  removeButton.addEventListener("click", () => {
    para.classList.remove("para-style");
    para.style.color = '';
    para.style.fontSize = '16px';
    currentSize = 16;
  });
}

// Random Color change
if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    const colors = ["red", "blue", "green", "purple", "orange", "brown"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    para.style.color = randomColor;
  });
}

// Increase font size
if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    currentSize += 2;
    para.style.fontSize = currentSize + "px";
  });
}

// Decrease font size
if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    if (currentSize > 8) {
      currentSize -= 2;
      para.style.fontSize = currentSize + "px";
    }
  });
}

// Change paragraph text
if (changeBtn) {
  changeBtn.addEventListener("click", () => {
    para.textContent = "This is the new text content!";
  });
}

// Dark / Light mode toggle
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Navigation function for next page
function next() {
  // Update this path to your actual next page
  location.href = "templates/next.html";
}
