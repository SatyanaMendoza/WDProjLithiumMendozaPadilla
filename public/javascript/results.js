// For the dropdown menu
function toggleMenu() {
    const menu = document.getElementById('dropdown');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const pollData = [
        { 
          id: "1", 
          question: "What is your favorite season in Stardew Valley?", 
          options: { one: "Spring", two: "Summer", three: "Fall", four: "Winter" } 
        },
        { 
            id: "2", 
            question: "It’s winter, and you’re looking for a fun activity to partake in. Which winter festival would you want to join the most?", 
            options: { 
                one: "Festival of Ice: Witness festive ice sculptures and igloos, and join the Ice Fishing Contest!", 
                two: "SquidFest: Catch squid on the beach and win bountiful prizes!", 
                three: "Night Market: Go shopping, watch a mermaid show, and catch unique fish!", 
                four: "Feast of the Winter Star: Participate in a secret gift-giving event with the other villagers in Pelican Town!" 
            } 
        },
        { 
            id: "3", 
            question: "Which of the following Stardew Valley destinations do you enjoy visiting the most?", 
            options: { one: "Your Farm", two: "Pelican Town", three: "The Beach", four: "The Mountains" } 
        },
        { 
            id: "4", 
            question: "In your days on the farm, you’ll surely need an everyday companion. Which of the following would you keep as a pet?", 
            options: { one: "Dog", two: "Cat", three: "Turtle", four: "Horse" } 
        },
        { 
            id: "5", 
            question: "Which of the following activities would you love doing the most at your stay in the Valley?", 
            options: { one: "Foraging", two: "Farming", three: "Mining", four: "Fishing" } 
        },
        { 
            id: "6", 
            question: "You’re just setting up your barn, and you’ll need some farm animals to complete it. Which farm animal would you want to take care of in your barn the most?", 
            options: { one: "Pigs", two: "Cows", three: "Goats", politicians: "Sheep", four: "Sheep" } 
        },
        { 
            id: "7", 
            question: "Which of the following bachelors/bachelorettes do you think you’d most enjoy attending the Night Market with?", 
            options: { one: "Alex", two: "Sam", three: "Haley", four: "Abigail" } 
        },
        { 
            id: "8", 
            question: "You want to enhance your cooking skills, so you seek recipes at the Stardroop Saloon. Which food recipe do you purchase?", 
            options: { 
                one: "A whole cheese pizza recipe", 
                two: "A recipe to make fluffy Pancakes", 
                three: "A cookie recipe", 
                four: "A recipe to make maki rolls" 
            } 
        },
        { 
            id: "9", 
            question: "You decided to take a short break from the farm work and head to Pelican Town. Which villager activity would you want to join the most?", 
            options: { 
                one: "Attend aerobics class with Caroline and her friends!", 
                two: "Help upgrade your most used tools with Clint at the Blacksmith!", 
                three: "Bake cookies with Evelyn!", 
                four: "Manage the Archaeology Museum with Gunther!" 
            } 
        },
        { 
            id: "10", 
            question: "You have finally finished your work for today. How would you like to spend the rest of your night?", 
            options: { one: "Cook yourself a fresh meal", two: "Go to bed", three: "Watch TV", four: "Decorate your room" } 
        }
    ];

    let agreeCount = 0;
    const listContainer = document.getElementById("choices-list");

    pollData.forEach(poll => {
        const userChoice = localStorage.getItem(`user_voted_${poll.id}`);
        
        if (userChoice) {
            const keys = ["one", "two", "three", "four"];
            let maxVotes = 0;
            let winners = [];

            keys.forEach(k => {
                let v = parseInt(localStorage.getItem(`global_poll_${poll.id}_${k}`)) || 0;
                if (v > maxVotes) { 
                    maxVotes = v; 
                    winners = [k]; 
                } else if (v === maxVotes && v > 0) { 
                    winners.push(k); 
                }
            });

            // Count if user choice is among the winners
            if (winners.includes(userChoice)) {
                agreeCount++;
            }

            const div = document.createElement("div");
            div.className = "summary-item";
            div.innerHTML = `
                <p class="q-title" style="font-weight:bold; margin-bottom:5px;">${poll.question}</p>
                <p style="margin:0;">You picked: ${poll.options[userChoice]}</p>
            `;
            listContainer.appendChild(div);
        }
    });

    // Update the verdict text
    const agreementElement = document.getElementById("agreement-score");
    if (agreementElement) {
        agreementElement.textContent = `You have agreed with the majority ${agreeCount} times!`;
    }

    document.getElementById("resetPollBtn").addEventListener("click", function() {
      if (confirm("Reset all your votes? This will remove your counts from the total!")) {
          
          for (let i = 1; i <= 10; i++) {
              const userChoice = localStorage.getItem(`user_voted_${i}`);
              
              if (userChoice) {
                  const globalKey = `global_poll_${i}_${userChoice}`;
                  let currentCount = parseInt(localStorage.getItem(globalKey)) || 0;

                  if (currentCount > 0) {
                      localStorage.setItem(globalKey, currentCount - 1);
                  }

                  localStorage.removeItem(`user_voted_${i}`);
              }
          }

          window.location.href = "p7-poll.html";
      }
  });
});