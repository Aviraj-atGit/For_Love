const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg"
];

let current = 0;

// typing
document.addEventListener("DOMContentLoaded", function () {
  const text = "Hey ❤️ I made this for you...";
  let i = 0;
  const el = document.getElementById("typing");

  function typing() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 50);
    }
  }
  typing();

  // 😈 NO BUTTON RUN
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.onmouseover = () => {
      noBtn.style.position = "absolute";
      noBtn.style.top = Math.random() * 80 + "%";
      noBtn.style.left = Math.random() * 80 + "%";
    };
  }
});

// screen switch
function nextScreen(n) {
  document.getElementById("screen" + n).classList.remove("active");
  document.getElementById("screen" + (n + 1)).classList.add("active");
}

// gallery
function openGallery() {
  document.getElementById("gallery").style.display = "flex";
  current = 0;
  showImage();
}

function closeGallery() {
  document.getElementById("gallery").style.display = "none";
}

// slider
function showImage() {
  document.getElementById("sliderImage").src = images[current];
}

function nextSlide() {
  current = (current + 1) % images.length;
  showImage();
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}