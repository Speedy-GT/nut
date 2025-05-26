function playSong(path) {
  const player = document.getElementById('audioPlayer');
  player.src = path;
  player.play();
}

function goToPhonk() {
  // You can link to a different HTML page here if needed
  alert("Redirecting to Phonk page...");
}
