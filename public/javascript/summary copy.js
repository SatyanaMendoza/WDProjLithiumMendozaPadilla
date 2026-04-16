//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    const totalPossible = 15;

    const correctAnswers = {
        1: "two", 2: "four", 3: "three", 4: "one", 5: "three",
        6: "four", 7: "one", 8: "four", 9: "three", 10: "two",
        11: "two", 12: "three", 13: "three", 14: "one", 15: "four"
    };

    for (let i = 1; i <= totalPossible; i++) {
        const savedAnswer = localStorage.getItem("question" + i);
        
        if (savedAnswer === correctAnswers[i]) {
            score++;
        }
    }

    // Display the score accurately
    document.getElementById("final-score").textContent =
        `You scored ${score} out of ${totalPossible}!`;

    // Rank Logic
    let rank;
    if (score <= 5) {
        rank = "Beginner Farmer 🌱";
    } else if (score <= 12) {
        rank = "Intermediate Farmer 🌾";
    } else {
        rank = "Professional Farmer 👑";
    }

    document.getElementById("rank").textContent = rank;
});

document.getElementById("retryBtn").addEventListener("click", function () {

    if (confirm("Are you sure you want to retry the quiz? Your previous score will be deleted.")) {

        for (let key in localStorage) {
            if (key.startsWith("question")) {
                localStorage.removeItem(key);
            }
        }

        window.location.href = "p10-second quiz.html";
    }
});