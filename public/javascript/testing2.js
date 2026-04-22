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

const bacheloretteData = [
    {
        id: "Abigail",
        name: "Abigail",
        img: "../assets/abigail.jpg",
        desc: "Abigail lives at the general store with her parents. She sometimes fights with her mom, who worries about Abigail's alternative lifestyle. She enjoys playing the flute, exploring, has a knack for adventure, and often talks about her dreams of one day becoming a farmer. Being good friends with Sebastian and Sam, she can often be found with them at the Saloon and at festivals.",
        birthday: "Fall 13",
        clinic: "Spring 4",
        favs: ["Amethyst", "Banana Pudding", "Blackberry Cobbler", "Chocolate Cake", "Monster Compendium", "Pufferfish", "Pumpkin", "Spicy Eel"],
        family: ["Pierre (Father)", "Caroline (Mother)"],
        address: "Pierre's General Store"
    },
    {
        id: "Emily",
        name: "Emily",
        img: "../assets/emily.jpg",
        desc: "Emily lives with her sister, Haley, and together they care for their parents' home, who have been traveling the world for the past two years. She works with Gus, who employs her part-time at The Stardrop Saloon. There, she works most evenings to make ends meet. However, her real passion is tailoring— often making her clothes from scratch.",
        birthday: "Spring 27",
        clinic: "Winter 11",
        favs: ["Amethyst", "Cloth", "Emerald", "Jade", "Parrot Egg", "Ruby", "Survival Burger", "Topaz", "Wool"],
        family: ["Haley (Sister)"],
        address: "2 Willow Lane"
    }
    // SOFIA ADD THE OTHER FOUR
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
    if (currentIndex < 0) currentIndex = bacheloretteData.length - 1;
    if (currentIndex >= bacheloretteData.length) currentIndex = 0;
    updateModal();
}

function updateModal() {
    const data = bacheloretteData[currentIndex];
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
    
