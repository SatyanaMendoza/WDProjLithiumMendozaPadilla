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
        desc:   "Alex loves sports, specifically gridball, and hanging out at the beach. He can be arrogant at times, bragging to everyone that he is going to be a professional athlete.  Alex often works out in the men’s locker room or in his room.",
        birthday: "Summer 13",
        clinic: "Summer 16",
        favs: ["Complete Breakfast", "Jack Be Nimble, Jack Be Thick", "Salmon Dinner"],
        family: ["Evelyn (Grandmother)","George (Grandfather)"],
        address: "1 River Road"
    },

    {
        id: "Elliott",
        name: "Elliott",
        img: "../assets/elliot.jpg",
        desc:   "Elliott is a writer who lives alone on the Beach and is looking for inspiration for his next novel. He dreams of writing a magnificent novel one day. He is also a romantic who tends to speak in flowery poetry. When he can afford it, he enjoys a strong pito at the Saloon.",
        birthday: "Fall 5",
        clinic: "Summer 9",
        favs: ["Crab Cakes", "Duck Feather", "Lobster","Pomegranate","Squid Ink","Tom Kha Soup"],
        family: ["N/A"],
        address: "Elliott's Cabin"
    },

    {
        id: "Harvey",
        name: "Harvey",
        img: "../assets/harvey.jpg",
        desc:   "Harvey is the town doctor. He’s a little old for a bachelor, but he has a kind heart and a respected position in the community. He lives in a small apartment above the medical clinic, but spends most of his time working.",
        birthday: " Winter 14",
        clinic: "N/A (Runs the clinic)",
        favs: ["Coffee", "Pickles", "Super Meal","Truffle Oil","Wine"],
        family: ["N/A"],
        address: "Harvey’s Clinic"
    },

    {
        id: "Sam",
        name: "Sam",
        img: "../assets/sam.jpg",
        desc:   "Sam is an outgoing, friendly guy who is brimming with youthful energy. He works part-time at JojaMart. In his free time, he plays guitar. He  also wants to start a band with Sebastian as soon as they have made enough songs. However, he does have a habit of starting ambitious projects and not finishing them. Sam is a little stressed about the impending return of his father, who has been away for years due to serving in the military. He is close with his younger brother, Vincent, and feels responsible for him during his dad's absence.",
        birthday: "Summer 17",
        clinic: "Fall 11",
        favs: ["Cactus Fruit", "Maple Bar", "Pizza","Tigerseye"],
        family: ["Kent (Father)","Jodi (Mother)","Vincent (Brother)"],
        address: "1 Willow Lane"
    },

    {
        id: "Sebastian",
        name: "Sebastian",
        img: "../assets/sebastian.jpg",
        desc:   " Sebastian lives in the basement of the Carpenter's Shop. He tends to feel unappreciated compared to his sister, Maru, who is regarded highly both by his parents and other villagers. He has an interest in science fiction and fantasy and enjoys reading books and graphic novels. He also likes programming computer games and playing tabletop role-playing games. However, feels discontent in the valley and hopes to leave for the city someday.",
        birthday: "Winter 10",
        clinic: "Summer 4",
        favs: ["Frog Egg", "Frozen Tear", "Obsidian","Pumpkin Soup","Sashimi","Void Egg"],
        family: ["Robin (Mother)",">Demetrius (Step-Father)","Maru (Half-Sister)"],
        address: "24 Mountain Road"
    },

    {
        id: "Shane",
        name: "Shane",
        img: "../assets/shane.jpg",
        desc:   "Shane seems to suffer from depression, is a heavy drinker, and loves frozen Pizza. He lives with his aunt Marnie and rents a room at her ranch, where he helps out by taking care of the Chickens. He also works as a stock clerk at JojaMart and spends his free time at The Stardrop Saloon in the evenings.",
        birthday: "Spring 20",
        clinic: "N/A",
        favs: ["Beer", "Hot Pepper", "Pepper Poppers","Pizza"],
        family: ["Marnie (Aunt)","Jas (Goddaughter)"],
        address: "Marnie's Ranch"
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
    
