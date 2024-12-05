window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[id="sound-${event.key}"]`);
  const key = document.querySelector(`.key[id="key-${event.key}"]`);

  if (!audio) {
    return; //stops function from running
  }

  audio.currentTime = 0; //rewinds to the start
  audio.play();
});