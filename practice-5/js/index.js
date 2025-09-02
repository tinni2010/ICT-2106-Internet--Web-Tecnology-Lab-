// পুরাতন image বাদ দিয়ে নতুন ৪টা image set
const images = [
  "images/img2.jpg", // নতুন ছবি ১ (img1 বাদ)
  "images/img3.jpg", // নতুন ছবি ২
  "images/img4.jpg", // নতুন ছবি ৩
  "images/img5.jpg"  // নতুন ছবি ৪
];

let currentIndex = 0;

document.getElementById('toggleImage').addEventListener('click', function () {
  currentIndex = (currentIndex + 1) % images.length;
  this.src = images[currentIndex];
});
