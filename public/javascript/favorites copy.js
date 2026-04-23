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

//Change text once heart is clicked
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

const bachelorData = [
    {
        id: "Alex",
        name: "Alex",
        img: "../assets/alex.jpg",
        desc: "Penny lives with her mom, Pam, in a little trailer by the river. She quietly tends to her chores in the dim, stuffy room she is forced to call home, all while her mom is away, carousing at the saloon. Penny is shy and modest, without any grand ambitions for life other than settling in and starting a family. She likes to cook (although her skills are questionable) and read books from the local library.",
        birthday: "Fall 2",
        clinic: "Winter 4",
        favs: ["Diamond", "Emerald", "Melon","Poppy","Poppyseed Muffin","Red Plate","Roots Platter","Sandfish","Tom Kha Soup"],
        family: ["Pam (Mother)"],
        address: "Trailer"
    },
];

let currentIndex = 0;

function openProfile(index) {
    currentIndex = index;
    updateModal();
    document.getElementById('profileOverlay').style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileOverlay').style.display = 'none';
}

function changeProfile(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = bachelorData.length - 1;
    if (currentIndex >= bachelorData.length) currentIndex = 0;
    updateModal();
}

function updateModal() {
    const data = bachelorData[currentIndex];
    document.getElementById('modalName').textContent = "-" + data.name + "-";
    document.getElementById('modalImg').src = data.img;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalBirthday').querySelector('span').textContent = data.birthday;
    document.getElementById('modalClinic').querySelector('span').textContent = data.clinic;
    document.getElementById('modalAddress').querySelector('span').textContent = data.address;

    // Lists
    const favsList = document.getElementById('modalFavs').querySelector('ul');
    favsList.innerHTML = data.favs.map(item => `<li>${item}</li>`).join('');

    const familyList = document.getElementById('modalFamily').querySelector('ul');
    familyList.innerHTML = data.family.map(member => `<li>${member}</li>`).join('');

    // Update Heart
    const heart = document.getElementById('modalHeart');
    heart.dataset.id = data.id;
    const isFav = localStorage.getItem(data.id) === 'true';
    heart.classList.toggle('active', isFav);
    heart.textContent = isFav ? "A FAVORITE! ❤" : "YOUR FAVORITE? ❤";
}
    
