function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

function toggleFavorite(btn) {
    const favorite = document.getElementById('heart')
    favorite.classList.toggle('active');
}