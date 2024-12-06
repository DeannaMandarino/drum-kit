// Function to play sound when a key is clicked or pressed
function playSound(event) {
  // Determine if the event is triggered by a key click or keydown
  const key = event.target.closest('.key') ? event.target.closest('.key').id : event.key?.toLowerCase();
  
  // Exit if no valid key is found
  if (!key) return;

  // Select the audio and key elements
  const audio = document.querySelector(`#sound-${key}`);
  const keyElement = document.querySelector(`#${key}`);

  // Exit if no audio element is found for the key
  if (!audio) return; 

  // Rewind and play the audio from the start
  audio.currentTime = 0; 
  audio.play();

  // Add visual effect to the key when pressed
  keyElement.classList.add('playing');
}

// Function to remove the 'playing' class after the transform animation ends
function removeTransition(event) {
  // Check if the transitioned property is 'transform'
  if (event.propertyName !== 'transform') return;

  // Remove the 'playing' class
  event.currentTarget.classList.remove('playing');
}

// Select all keys and add event listeners for click and transition end
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', playSound); // Play sound on click
  key.addEventListener('transitionend', removeTransition); // Remove transition class when animation ends
});

// Add event listener to play sound on keydown
window.addEventListener('keydown', playSound);