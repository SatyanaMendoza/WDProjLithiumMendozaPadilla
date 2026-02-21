//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {

    let score = 0;
    let totalQuestions = 0;

    for (let key in localStorage) {

        if (key.startsWith("question")) {

            totalQuestions++;

            const savedAnswer = localStorage.getItem(key);

            // Extract question number from key
            const questionNumber = key.replace("question", "");

            const correctAnswers = {
                1: "three",
                2: "one",
                3: "four",
                4: "two",
                5: "one",
                6: "three",
                7: "two",
                8: "four",
                9: "one",
                10: "three",
                11: "two",
                12: "four",
                13: "one",
                14: "three",
                15: "two"
            };

            if (savedAnswer === correctAnswers[questionNumber]) {
                score++;
            }
        }
    }

    document.getElementById("final-score").textContent =
        `You scored ${score} out of ${totalQuestions}!`;

    let rank;

    if (score <= 5) {
        rank = "Beginner Farmer 🌱";
    } else if (score <= 10) {
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

        window.location.href = "p9-quiz.html";
    }
});