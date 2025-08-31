function buttonClick1() {
    alert('Hello from Button 1');
}

function paraClick() {
    const text = document.getElementById('paraId');
    text.innerHTML = 'This is the updated text of the paragraph!';
}

// Image list
const images = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg"
];

let currentIndex = 0;

// Show first image
function imageClick() {
    currentIndex = 0;
    showImage(currentIndex);
}

// Next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Remove image
function removeImage() {
    const img = document.getElementById('imageId');
    img.src = "";
    img.alt = "Image removed";
    document.getElementById('counter').innerText = "Image removed!";
}

// Common function to display image
function showImage(index) {
    if (images.length === 0) return; // safety check

    const img = document.getElementById('imageId');
    img.src = images[index];
    img.alt = "Image " + (index + 1);
    document.getElementById('counter').innerText = "Showing image " + (index + 1) + " of " + images.length;
}
