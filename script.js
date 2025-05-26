function playSong(path) {
  const player = document.getElementById('audioPlayer');
  player.src = path;
  player.play();
}
