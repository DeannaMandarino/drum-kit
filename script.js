function playSound(event) {
  let key = event.target.closest('.key') ? event.target.closest('.key').getAttribute('id') : null;
  /*
  const keyElement = event.target.closest('.key'); // Get the closest parent key element
  const key = keyElement ? keyElement.getAttribute('id') : null;
  const audio = document.querySelector(`#sound-${key}`);
  */

  if (!key) {
    key = event.key ? event.key.toLowerCase() : null;
  }

  if (!key) {
    return;
  }

  const audio = document.querySelector(`#sound-${key}`);
  const keyElement = document.querySelector(`#${key}`);

  if (!audio) {
    return; //stops function from running
  }

  audio.currentTime = 0; //rewinds to the start
  audio.play();

  keyElement.classList.add('playing');
}

function removeTransition(event) {
  if (event.propertyName !== 'transform') {
    return; //skips if it is not a transform
  }

  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', playSound);
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);