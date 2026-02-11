// Create floating hearts + rose petals on every page
function createEffects() {
  // Hearts container
  const heartsContainer = document.createElement('div');
  heartsContainer.className = 'hearts';
  document.body.appendChild(heartsContainer);

  for (let i = 0; i < 45; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['❤️','💖','💗','💕','💞','💘','💝'][Math.floor(Math.random()*7)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * -50 + 'px'; // start slightly above screen
    heart.style.animationDuration = (Math.random() * 20 + 12) + 's';
    heart.style.animationDelay = Math.random() * -30 + 's';
    heart.style.fontSize = (Math.random() * 32 + 18) + 'px';
    heart.style.opacity = Math.random() * 0.4 + 0.4;
    heartsContainer.appendChild(heart);
  }

  // Rose petals container
  const petalsContainer = document.createElement('div');
  petalsContainer.className = 'petals';
  document.body.appendChild(petalsContainer);

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.innerHTML = ['🌸','🌺','🌹','💮','🏵️'][Math.floor(Math.random()*5)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = Math.random() * -80 + 'px';
    petal.style.animationDuration = (Math.random() * 28 + 18) + 's';
    petal.style.animationDelay = Math.random() * -40 + 's';
    petal.style.fontSize = (Math.random() * 24 + 14) + 'px';
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    petalsContainer.appendChild(petal);
  }
}

// Image preview function (used on poem pages)
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById('preview');
    if (img) {
      img.src = e.target.result;
      img.style.opacity = '0';
      img.style.display = 'block';
      // Fade in the new image
      setTimeout(() => {
        img.style.transition = 'opacity 0.8s ease';
        img.style.opacity = '1';
      }, 100);
    }

    const label = document.getElementById('uploadLabel');
    if (label) {
      label.textContent = "Perfect... just like you 💞";
      label.style.background = 'linear-gradient(45deg, #e11d48, #f43f5e)';
    }
  };
  reader.readAsDataURL(file);
}

// Initialize effects when page loads
window.addEventListener('DOMContentLoaded', () => {
  createEffects();

  // Optional: slight delay before showing page content (for dramatic fade-in)
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1.2s ease';
    document.body.style.opacity = '1';
  }, 300);
});