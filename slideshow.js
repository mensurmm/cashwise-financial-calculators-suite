let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlides(n) {
  // Wrap around
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Remove active from all
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active-dot");
  }

  // Add active to current
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active-dot");
}

// Next/Prev controls
function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Dot controls
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(slideIndex);
}

// Auto-slide every 5s
setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 6000);

// Initialize
showSlides(slideIndex);
