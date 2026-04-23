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
    },
    {
        id: "Haley",
        name: "Haley",
        img: "../assets/hailey.jpg",
        desc: " Haley loves taking photos with her camera and keeping up with all the latest fashion trends. Being wealthy and popular throughout high school has made her a little conceited and self-centered. She can also be quite judgemental toward others. But is it too late for her to discover a deeper meaning to life? Is there a fun, open-minded young woman hidden within that candy-coated shell?",
        birthday: "Spring 14",
        clinic: "Winter 9",
        favs: ["Coconut", "Fruit Salad", "Pink Cake","Sunflower"],
        family: ["Emily (Sister)"],
        address: "2 Willow Lane"
    },
    {
        id: "Leah",
        name: "Leah",
        img: "../assets/leah.jpg",
        desc: "Leah lives alone in a small cabin just outside of town. She thinks she doesn't have many friends there. She moved from the city to Stardew Valley to pursue her dream of being an artist. She loves to spend time outside, to forage for a wild meal, or to simply enjoy the gifts of the season. She’s a skilled artist with a large portfolio of work… yet she’s too nervous to display it to the public. Maybe you can give her a little confidence boost?",
        birthday: "Winter 23",
        clinic: "Spring 16",
        favs: ["Goat Cheese", "Poppyseed Muffin", "Salad","Stir Fry","Truffle","Vegetable Medley","Wine"],
        family: ["N/A"],
        address: "Leah's Cottage"
    },
    {
        id: "Maru",
        name: "Maru",
        img: "../assets/maru.jpg",
        desc: "Growing up with a carpenter and a scientist for parents, Maru acquired a passion for creating gadgets at a young age. When she isn’t in her room, fiddling with tools and machinery, she sometimes does odd jobs at the local clinic. She works for Harvey at the clinic, and both worry that it doesn't receive enough patients.",
        birthday: "Summer 10",
        clinic: "N/A (Works at the clinic)",
        favs: ["Battery Pack", "Cauliflower", "Cheese Cauliflower","Diamond","Dwarf Gadget","Gold Bar","Iridium Bar","Miner's Treat","Pepper Poppers","Radioactive Bar","Rhubarb Pie","Strawberry"],
        family: ["Demetrius (Father)", "Robin (Mother)", "Sebastian (Half-Brother)"],
        address: "24 Mountain Road"
    },
    {
        id: "Penny",
        name: "Penny",
        img: "../assets/penny.jpg",
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
    
