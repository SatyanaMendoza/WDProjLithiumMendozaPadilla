function toggleMenu() {
    const menu = document.getElementById('dropdown');
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    const totalPossible = 15;

    const lastQuiz = localStorage.getItem("last_quiz_taken");
    
    let activeKey;
    let prefix;
    let redirectUrl;

    if (lastQuiz === "quiz2") {
        prefix = "quiz2_question";
        redirectUrl = "./p10-second quiz.html";
        activeKey = {
            1: "one",
            2: "three",
            3: "two",
            4: "three",
            5: "one",
            6: "two",
            7: "one",
            8: "four",
            9: "two",
            10: "one",
            11: "four",
            12: "four",
            13: "four",
            14: "two",
            15: "three"
        };
    } else {
        prefix = "quiz1_question";
        redirectUrl = "./p9-quiz.html";
        activeKey = {
            1: "two", 
            2: "four", 
            3: "three", 
            4: "one", 
            5: "three",
            6: "four", 
            7: "one", 
            8: "four", 
            9: "three", 
            10: "two",
            11: "two", 
            12: "three", 
            13: "three", 
            14: "one", 
            15: "four"
        };
    }

    for (let i = 1; i <= totalPossible; i++) {
        const savedAnswer = localStorage.getItem(prefix + i);
        if (savedAnswer === activeKey[i]) {
            score++;
        }
    }

    document.getElementById("final-score").textContent = `You scored ${score} out of ${totalPossible}!`;

    let rank;
    if (score <= 5) rank = "Beginner Farmer 🌱";
    else if (score <= 12) rank = "Intermediate Farmer 🌾";
    else rank = "Professional Farmer 👑";
    document.getElementById("rank").textContent = rank;

    document.getElementById("backToQuizBtn").onclick = function() {
        window.location.href = redirectUrl;
    };

    document.getElementById("retryBtn").onclick = function() {
        if (confirm("Clear answers for this quiz level and try again?")) {
            for (let i = 1; i <= 15; i++) {
                localStorage.removeItem(prefix + i);
            }
            window.location.href = redirectUrl;
        }
    };

    document.getElementById("updateBtn").onclick = function() {
        const alreadyDoneQuiz2 = localStorage.getItem("quiz2_question1") !== null;

        if (alreadyDoneQuiz2) {
            alert("You have already updated and completed the Level 2 quiz! 🌟");
        } else {
            if (confirm("Moving to Level 2. Your Level 1 data will be cleared.")) {
                for (let i = 1; i <= 15; i++) {
                    localStorage.removeItem("quiz1_question" + i);
                }
                localStorage.setItem("last_quiz_taken", "quiz2");
                window.location.href = "./p10-second quiz.html";
            }
        }
    };
});