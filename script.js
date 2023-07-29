// Get the audio element
const audio = document.getElementById('lovelyAudio');

// Get the "Play Lovely" button
const playLovelyButton = document.getElementById('playLovelyButton');

// Function to animate the balloons
function animateBalloons() {
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach((balloon) => {
    let height = window.innerHeight;
    let topOffset = Math.floor(Math.random() * height) + height + 50;
    balloon.style.top = `${topOffset}px`;
  });
}

// Add an event listener to the button to play the "Lovely" song
playLovelyButton.addEventListener('click', () => {
  // Play the audio
  audio.play();

  // Animate the balloons (only if not already animated)
  if (!playLovelyButton.classList.contains('animation-started')) {
    animateBalloons();
    playLovelyButton.classList.add('animation-started');
  }
});   