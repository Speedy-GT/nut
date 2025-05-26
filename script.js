function playSong(path) {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = path;
    if (audioPlayer.paused || audioPlayer.ended) {
        audioPlayer.play(); 
    } else {
        audioPlayer.pause();
    }
}

function setPlaybackRate(rate) {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.playbackRate = rate;
}
