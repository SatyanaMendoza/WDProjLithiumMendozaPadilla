//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const polls = [
        { id: "1", opts: { one: "Spring", two: "Summer", three: "Fall", four: "Winter" } },
        { id: "2", opts: { one: "Festival of Ice: Witness festive ice sculptures and igloos, and join the Ice Fishing Contest!", 
            two: "SquidFest: Catch squid on the beach and win bountiful prizes!", 
            three: "Night Market: Go shopping, watch a mermaid show, and catch unique fish!", 
            four: "Feast of the Winter Star: Participate in a secret gift-giving event with the other villagers in Pelican Town!" } },
        { id: "3", opts: { one: "Your Farm", two: "Pelican Town", three: "The Beach", four: "The Mountains" } },
        { id: "4", opts: { one: "Dog", two: "Cat", three: "Turtle", four: "Horse" } },
        { id: "5", opts: { one: "Foraging", two: "Farming", three: "Mining", four: "Fishing" } },
        { id: "6", opts: { one: "Pigs", two: "Cows", three: "Goats", four: "Sheep" } },
        { id: "7", opts: { one: "Alex", two: "Sam", three: "Haley", four: "Abigail" } },
        { id: "8", opts: { one: "A whole cheese pizza recipe", two: "A recipe to make fluffy Pancakes", three: "A cookie recipe", four: "A recipe to make maki rolls" } },
        { id: "9", opts: { one: "Attend aerobics class with Caroline and her friends!", 
            two: "Help upgrade your most used tools with Clint at the Blacksmith!", 
            three: "Bake cookies with Evelyn!", 
            four: "Manage the Archaeology Museum with Gunther!" } },
        { id: "10", opts: { one: "Cook yourself a fresh meal", two: "Go to bed", three: "Watch TV", four: "Decorate your room" } },
    ];

    polls.forEach(poll => {
        const form = document.getElementById(`poll-form${poll.id}`);
        if (!form) return;

        const userVotedKey = `user_voted_${poll.id}`;
        const existingVote = localStorage.getItem(userVotedKey);

        if (existingVote) {
            const radioToCheck = form.querySelector(`input[value="${existingVote}"]`);
            if (radioToCheck) radioToCheck.checked = true;
            
            lockAndShowResults(form, poll, existingVote);
        }

        form.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', function () {
                const choice = this.value;
                
                // SAVE GLOBAL COUNT (Permanently)
                const globalKey = `global_poll_${poll.id}_${choice}`;
                let currentCount = parseInt(localStorage.getItem(globalKey)) || 0;
                localStorage.setItem(globalKey, currentCount + 1);

                // SAVE USER CHOICE (Permanently)
                localStorage.setItem(userVotedKey, choice);

                lockAndShowResults(form, poll, choice);
            });
        });
    });
});

function lockAndShowResults(form, poll, userChoice) {
    const existingMsg = form.querySelector('.poll-result-msg');
    if (existingMsg) existingMsg.remove();

    form.classList.add('locked');
    form.querySelectorAll('input').forEach(i => i.disabled = true);

    const selectedInput = form.querySelector(`input[value="${userChoice}"]`);
    if (selectedInput) selectedInput.parentElement.classList.add('selected-choice');

    const keys = ["one", "two", "three", "four"];
    let maxVotes = 0;
    let winners = [];

    keys.forEach(key => {
        let v = parseInt(localStorage.getItem(`global_poll_${poll.id}_${key}`)) || 0;
        if (v > maxVotes) {
            maxVotes = v;
            winners = [poll.opts[key]];
        } else if (v === maxVotes && v > 0) {
            winners.push(poll.opts[key]);
        }
    });

    if (maxVotes > 0) {
        const msg = document.createElement('p');
        msg.className = "poll-result-msg";
        const winnerText = winners.join(", ");
        const verb = winners.length > 1 ? "were" : "was";
        msg.textContent = `"${winnerText}" ${verb} preferred by the most users! (${maxVotes} votes)`;
        form.appendChild(msg);
    }
}