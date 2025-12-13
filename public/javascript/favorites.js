function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

document.querySelectorAll('.heart').forEach(heart => {
  const id = heart.dataset.id;

  if (localStorage.getItem(id) === 'true') {
    heart.classList.add('active');
  }

  heart.addEventListener('click', () => {
    heart.classList.toggle('active');
    localStorage.setItem(id, heart.classList.contains('active'));
  });
});
    
