function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

const music = document.getElementById("bg-music");

function startMusic() {
  music.play();
  document.removeEventListener("click", startMusic);
  document.removeEventListener("keydown", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);