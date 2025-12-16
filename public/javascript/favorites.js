function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

function toggleFavorite(el) {
    const id = el.dataset.id;
    const isActive = el.classList.toggle('active');
    localStorage.setItem(id, isActive);
    el.textContent = isActive ? "A FAVORITE! ❤" : "YOUR FAVORITE? ❤";
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.heart').forEach(heart => {
        const id = heart.dataset.id;
        if (localStorage.getItem(id) === 'true') {
            heart.classList.add('active');
            heart.textContent = "A FAVORITE! ❤";
        } else {
            heart.textContent = "YOUR FAVORITE? ❤";
        }
    });
});

const music = document.getElementById("bg-music");

function startMusic() {
  music.play();
  document.removeEventListener("click", startMusic);
  document.removeEventListener("keydown", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);
    
