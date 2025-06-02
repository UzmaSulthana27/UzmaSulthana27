const track = document.querySelector('.carousel-track');
  const images = Array.from(track.children);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  const updateCarousel = () => {
    const imageWidth = images[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  };

  nextButton.addEventListener('click', ()=> {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Optional: adjust on window resize
  window.addEventListener('resize', updateCarousel);

  const autoplayInterval = 3000; // Change this to adjust speed (ms)
let autoplay = setInterval(() => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  updateCarousel();
}, autoplayInterval);

// Modal description for cards
const cards = document.querySelectorAll('.card');

// Create overlay for modal effect
let overlay = document.createElement('div');
overlay.className = 'card-desc-overlay';
document.body.appendChild(overlay);

cards.forEach(card => {
  const desc = card.querySelector('.card-description');
  const closeBtn = desc.querySelector('.close-desc');

  card.addEventListener('click', function(e) {
    // Prevent button clicks from triggering modal
    if (e.target.closest('button')) return;
    desc.style.display = 'block';
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    desc.style.display = 'none';
    overlay.style.display = 'none';
  });
});

// Hide modal if overlay is clicked
overlay.addEventListener('click', function() {
  document.querySelectorAll('.card-description').forEach(desc => desc.style.display = 'none');
  overlay.style.display = 'none';
});
