//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

//
const scrollArrow = document.getElementById('scrollArrow');
const hideAfter = 200; // pixels

window.addEventListener('scroll', () => {
  if (window.scrollY > hideAfter) {
    scrollArrow.classList.add('hidden');
  } else {
    scrollArrow.classList.remove('hidden');
  }
});
