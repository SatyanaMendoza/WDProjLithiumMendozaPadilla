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

const villagerData = [
    {
        id: "Caroline",
        name: "Caroline",
        img: "../assets/caroline.jpg",
        desc:   "Caroline is very traditional in the sense that she’s quite fond and enjoys most of her time being at home, doing all the chores and all that. She helps Pierre intending to the store, Pierre’s General Store.",
        birthday: "Winter 7",
        clinic: "Fall 25",
        favs: ["Fish Taco", "Green Tea", "Summer Spangle","Tropical Curry"],
        family: ["Pierre (Husband)","Abigail (Daughter)"],
        address: "Pierre's General Store"
    },

    {
        id: "Clint",
        name: "Clint",
        img: "../assets/clint.jpg",
        desc:   "Clint owns and runs the local Blacksmith. He provides various upgrades for tools and can crack open the Geodes and Mystery Boxes that you collect. He has a crush on Emily and would The Stardrop Saloon just to see her and talk to her, but still becomes nervous whenever she's around.",
        birthday: "Winter 26",
        clinic: "Winter 16",
        favs: ["Amethyst", "Aquamarine", "Artichoke Dip","Emerald","Fiddlehead Risotto","Gold Bar","Iridium Bar","Jade","Omni Geode","Ruby","Topaz"],
        family: ["N/A"],
        address: "Blacksmith"
    },

    {
        id: "Evelyn",
        name: "Evelyn",
        img: "../assets/evelyn.jpg",
        desc:   "Evelyn is a sweet old woman who lives on River Road with her husband George. She is in charge of the town's flowers. She has lived here her whole life, so she knows almost everyone and gives useful advice.",
        birthday: "Winter 20",
        clinic: ["The second of each season","The 23rd of each season (with George)"],
        favs: ["Beet", "Chocolate Cake", "Diamond","Fairy Rose", "Raisins", "Stuffing","Tulip"],
        family: ["George (Husband)","Alex (Grandson)"],
        address: "1 River Road"
    },

    {
        id: "George",
        name: "George",
        img: "../assets/george.jpg",
        desc:   "George is an old grumpy man in a wheelchair with a kind heart. He is a retired farmer and lives with his wife Evelyn and Grandson Alex on 1 River Road. Clara is the deceased daughter of George and the mother of Alex.",
        birthday: "Fall 24",
        clinic: "The 23rd of each season",
        favs: ["Fried Mushroom", "Leek"],
        family: ["Evelyn (Wife)","Alex (Grandson)"],
        address: "1 River Road"
    },

    {
        id: "Gunther",
        name: "Gunther",
        img: "../assets/gunther.jpg",
        desc:   " Gunther is a villager who operates the Archaeology Center in Pelican Town. He doesn't accept friendship gifts, and instead accepts donations to the Museum. He'll reward players as they reach milestones in number of donations. ",
        birthday: "Unknown",
        clinic: "N/A",
        favs: ["Cannot be gifted"],
        family: ["N/A"],
        address: "Museum"
    },

    {
        id: "Gus",
        name: "Gus",
        img: "../assets/gus.jpg",
        desc:   " Gus is a villager who lives and works at the Stardrop Saloon, keeping the people of Pelican Town well fed and happy. He also provides food for most of the festivals in the Valley.  He has many recipes to share with you!",
        birthday: "Summer 8",
        clinic: "Fall 4",
        favs: ["Diamond","Escargot","Fish Taco","Orange","Tropical Curry"],
        family: ["N/A"],
        address: "The Stardrop Saloon"
    },

    {
        id: "Jodi",
        name: "Jodi",
        img: "../assets/jodi.jpg",
        desc:   "Jodi is a villager who lives in Pelican Town. She is married to Kent and together they have two sons, Sam and Vincent. Along with her best friend, Caroline, she attends exercise classes with some of the other Pelican Town ladies.",
        birthday: "Fall 11",
        clinic: ["Summer 18","Spring 11 (with Vincent)"]
        favs: ["Chocolate Cake","Crispy Bass","Diamond","Eggplant Parmesan","Fried Eel","Pancakes","Rhubarb Pie","Vegetable Medley"],
        family: ["Kent (Husband)","Sam (Son)","Vincent (Son)"],
        address: "1 Willow Lane"
    },

    {
        id: "Kent",
        name: "Kent",
        img: "../assets/kent.jpg",
        desc:   "Kent is a soldier away at war and does not return to the Valley until Year 2 after returning from his duty in the military. He can be quite difficult to get to know at first due to how he was affected by his experiences at war.",
        birthday: "Spring 4",
        clinic: "N/A",
        favs: ["Fiddlehead Risotto", "Roasted Hazelnuts"],
        family: ["Jodi (Wife)","Sam (Son)","Vincent (Son)"],
        address: "1 Willow Lane"
    },

    {
        id: "Krobus",
        name: "Krobus",
        img: "../assets/krobus.jpg",
        desc:   " Krobus is a shadow person who lives in the Sewers. He is the only friendly monster you have encountered, and he sells a variety of rare goods. You can even have him as a roomate, if you please.",
        birthday: "Winter 1",
        clinic: "N/A",
        favs: ["Diamond", "Iridium Bar", "Monster Compendium","Monster Musk","Pumpkin","Void Egg","Void Mayonnaise","Wild Horseradish",],
        family: ["N/A"],
        address: "Krobus' Shop"
    },

    {
        id: "Lewis",
        name: "Lewis",
        img: "../assets/lewis.jpg",
        desc:   "Lewis has held his position of mayor of Pelican Town for more than twenty years. Along with Robin, he is one of the first people to greet you in your arrival to Stardew Valley. Aside from being the mayor, he also participates in the Stardew Valley Agricultural Fund. He often sends you letters that include money from the fund "to help you continue your good work" in the farm.",
        birthday: "Spring 7",
        clinic: "Fall 9",
        favs: ["Autumn's Bounty", "Glazed Yams", "Green Tea","Hot Pepper","Vegetable Medley"],
        family: ["N/A"],
        address: "Mayor's Manor"
    },

    {
        id: "Morris",
        name: "Morris",
        img: "../assets/morris.jpg",
        desc:   " Morris is the manager and the customer service representative of JojaMart in Pelican Town. Morris worked his way up to be the store's manager and prioritizes its success over his own well-being. He has even spent his own money to make store improvements and would often work overtime, to the point where he'd sleep under his desk rather than go home. Underneath his focus, he is lonely and exhausted. He hopes one day to find a place he feels he belongs and enjoy the comforts of life he longs for.",
        birthday: "Unknown",
        clinic: "N/A",
        favs: ["N/A"],
        family: ["N/A"],
        address: "JojaMart"
    },

    {
        id: "Pam",
        name: "Pam",
        img: "../assets/caroline.jpg",
        desc:   "Pam is known to be an alcoholic, who would spike punch at a festival, wake up with a hang over, and spend most of her time at the Saloon. However, it is discovered that she used to drive the Pelican Town bus, and that she became upset when it broke down. Eventually, with your help, Pam is able to resume her duty in bus driving once the bus is repaired— unlocking the Desert for the villagers to visit.",
        birthday: "Spring 18",
        clinic: "Spring 25",
        favs: ["Beer", "Cactus Fruit", "Glazed Yams","Mead","Pale Ale","Parsnip","Parsnip Soup","Piña Colada"],
        family: ["Penny (Daughter)"],
        address: "Trailer"
    },

    {
        id: "Pierre",
        name: "Pierre",
        img: "../assets/pierre.jpg",
        desc:   "Pierre is a local store owner who lives with his wife Caroline and daughter Abigail. He owns and runs Pierre's General Store, and is in a fierce competition with Morris, the manager of JojaMart.",
        birthday: "Spring 26",
        clinic: "N/A",
        favs: ["Complete BreakfastFried Calamari", "Price Catalogue"],
        family: ["Caroline (Wife)","Abigail (Daughter)"],
        address: "Pierre's General Store"
    },

    {
        id: "Vincent",
        name: "Vincent",
        img: "../assets/vincent.jpg",
        desc:   "Vincent is a young boy and can often be found with his best friend Jas.  He looks up to his brother, Sam, and wants to be just like him when he grows up.",
        birthday: "Spring 10",
        clinic: "Spring 11",
        favs: ["Cranberry Candy", "Frog Egg", "Ginger Ale","Grape","Pink Cake","Snail"],
        family: ["Jodi (Mother)","Kent (Father)","Sam (Brother)"],
        address: "1 Willow Lane"
    },

    {
        id: "Demetrius",
        name: "Demetrius",
        img: "../assets/demetrius.jpg",
        desc:   "Demetrius is a scientist who studies the valley's local wildlife.  He can often be found working in his laboratory or outdoors taking notes. He is very protective of Maru.",
        birthday: "Summer 19",
        clinic: "Summer 25",
        favs: ["Bean Hotpot", "Ice Cream", "Rice Pudding","Strawberry"],
        family: ["Robin (Wife)","Maru (Daughter)","Sebastian (Step-son)"],
        address: "24 Mountain Road"
    },

    {
        id: "Dwarf",
        name: "Dwarf",
        img: "../assets/dwarf.jpg",
        desc:   "The Dwarf lives in the mines under Pelican Town.  He speaks Dwarvish. He is the only dwarf in the Valley, but conversing with him will gain you new knowledge on the Dwarf species.",
        birthday: "Summer 22",
        clinic: "Summer 25",
        favs: ["Amethyst","Aquamarine","Emerald","Jade","Lava Eel","Lemon Stone","Omni Geode","Ruby","Topaz"],
        family: ["N/A"],
        address: "Eastern Cave"
    },

    {
        id: "Gil",
        name: "Gil",
        img: "../assets/gil.jpg",
        desc:   "Gil is a villager who lives in the Adventurer's Guild in the Mountain, north of Pelican Town. He rewards players with special rings, hats and other valuable items when they complete Monster Eradication Goals. ",
        birthday: "Unknown",
        clinic: "N/A",
        favs: ["Cannot be gifted"],
        family: ["N/A"],
        address: "Adventurer's Guild"
    },

    {
        id: "Leo",
        name: "Leo",
        img: "../assets/leo.jpg",
        desc:   "Leo is a boy who lives on Ginger Island and doesn’t leave until you have reached 6 hearts of friendship with him. His parents were lost at sea, and he considers the parrots who inhabit the island to be his family.  At first, he is too shy and hesitates to speak to you. You 'make friends' with the parrots of the island, which encourages him to interact with you.",
        birthday: "Summer 26",
        clinic: "N/A",
        favs: ["Duck Feathe", "Mango", "Ostrich Egg","Parrot Egg","Poi"],
        family: ["N/A"],
        address: ["Hut in Ginger Island (If you have less than 6 Friendship Hearts)","Treehouse (If you have 6+ Hearts)"]
    },

    {
        id: "Linus",
        name: "Linus",
        img: "../assets/linus.jpg",
        desc:   "Linus is a nature-lover who lives in a tent in the mountains and often stays isolated from the other residents of Pelican Town. However, he's a valuable friend to have in Stardew Valley, as he can teach you many useful recipes. He loves living a natural lifestyle and appreciates anything you would forage for him.  ",
        birthday: "Winter 3",
        clinic: "N/A",
        favs: ["Blueberry Tart", "Cactus Fruit", "Coconut","Dish O' The Sea","The Alleyway Buffet","Yam"],
        family: ["N/A"],
        address: "Tent"
    },

    {
        id: "Marlon",
        name: "Marlon",
        img: "../assets/marlon.jpg",
        desc:   "Marlon is the leader of the Adventurer's Guild. You meet him during your first time exploring the mines, where he gifts you a Rusty Sword. He rewards adventurers with powerful items in exchange for slaying large quantities of monsters.",
        birthday: "Unknown",
        clinic: "N/A",
        favs: ["N/A"],
        family: ["N/A"],
        address: "Adventurer's Guild"
    },

    {
        id: "Robin",
        name: "Robin",
        img: "../assets/robin.jpg",
        desc:   " Robin is a hardworking carpenter who resides at 24 Mountain Road, on The Mountain. She is the first villager you meet once you have arrived at Stardew Valley. You two interact frequently, since she will help you in constructing your farm building, upgrading your farmhouse, and, eventually, the greater Pelican Town community.",
        birthday: "Fall 21",
        clinic: "Summer 18",
        favs: ["Goat Cheese", "Peach", "Spaghetti","Woody's Secret"],
        family: ["Demetrius (Husband)","Maru (Daughter)","Sebastian (Son)"],
        address: "24 Mountain Road"
    },

    {
        id: "Jas",
        name: "Jas",
        img: "../assets/jas.jpg",
        desc:   "Jas is a young girl who lives just outside Pelican Town. She can often be found hanging out with her best friend, Vincent. ",
        birthday: "Summer 4",
        clinic: "Winter 18",
        favs: ["Ancient Doll", "Fairy Box", "Fairy Rose","Pink Cake","Plum Pudding", "Strange Doll (green)", "Strange Doll (yellow)"],
        family: ["Marnie (Aunt)","Shane (Godfather)"],
        address: "Marnie's Ranch"
    },

    {
        id: "Marnie",
        name: "Marnie",
        img: "../assets/marnie.jpg",
        desc:   "Marnie lives at Marnie's Ranch where she runs her own shop. She is very fond of animals and enjoys taking care of her farm. In her shop, she sells livestock and animal care supplies. ",
        birthday: "Fall 18",
        clinic: "Fall 18",
        favs: ["Diamond", "Farmer's Lunch", "Pink Cake","Pumpkin Pie"],
        family: ["Jas (Niece)","Shane (Nephew)"],
        address: "Marnie's Ranch"
    },

    {
        id: "Wizard/M. Rasmodius",
        name: "Wizard/M. Rasmodius",
        img: "../assets/wizard.jpg",
        desc:   "Wizard, also known as M. Rasmodius, studies the spirit world from his tower in cindersap forest. He is fluent in many elemental languages. He never leaves from his tower, unless when there's a festival being held, where he likes spying from afar.",
        birthday: "Winter 17",
        clinic: "N/A",
        favs: ["Book of Mysteries", "Purple Mushroom", "Solar Essence","Super Cucumber","Void Essence"],
        family: ["N/A"],
        address: "Wizard's Tower"
    },

    {
        id: "Willy",
        name: "Willy",
        img: "../assets/willy.jpg",
        desc:   "Demetrius is a scientist who studies the valley's local wildlife. He can often be found working in his laboratory or outdoors taking notes. He is very protective of Maru.",
        birthday: "Summer 19",
        clinic: "Summer 25",
        favs: ["Catfish", "Diamond", "Gold Bar","Iridium Bar","Jewels Of The Sea", "Mead", "Octopus","Pumpkin","Sturgeon", "Sea Cucumber","The Art O' Crabbing"],
        family: ["N/A"],
        address: "Fish Shop"
    }

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
    if (currentIndex < 0) currentIndex = villagerData.length - 1;
    if (currentIndex >= villagerData.length) currentIndex = 0;
    updateModal();
}

function updateModal() {
    const data = villagerData[currentIndex];
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
    