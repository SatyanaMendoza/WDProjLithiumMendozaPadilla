//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {

    const allQuestions = document.querySelectorAll(".quiz-container");

    allQuestions.forEach(question => {

        const questionNumber = question.dataset.question;
        const correctAnswer = question.dataset.correct;
        const questionKey = "quiz1_question" + questionNumber;

        const options = question.querySelectorAll('input[type="radio"]');
        const resultText = question.querySelector(".result");

        options.forEach(option => {
            option.addEventListener("change", function () {

                const selected = this.value;

                localStorage.setItem("last_quiz_taken", "quiz1");

                localStorage.setItem(questionKey, selected);

                showResult(question, selected, correctAnswer);
                disableOptions(options);
            });
        });

        // Restore saved answer
        const savedAnswer = localStorage.getItem(questionKey);

        if (savedAnswer) {
            options.forEach(option => {
                if (option.value === savedAnswer) {
                    option.checked = true;
                }
            });

            showResult(question, savedAnswer, correctAnswer);
            disableOptions(options);
        }

    });

});


function showResult(question, selected, correctAnswer) {
    const options = question.querySelectorAll('input[type="radio"]');
    const resultText = question.querySelector(".result");

    options.forEach(option => {
        const label = option.parentElement;

        label.classList.remove("correct", "wrong");

        if (option.value === correctAnswer) {
            label.classList.add("correct");
        } 
        else if (option.value === selected && selected !== correctAnswer) {
            label.classList.add("wrong");
        }
    });

    if (resultText) {
        if (selected === correctAnswer) {
            resultText.textContent = "You got it correct!";
            resultText.style.color = "#307a27";
        } else {
            resultText.textContent = "You got it wrong!";
            resultText.style.color = "#841e28";
        }
    }
}

function disableOptions(options) {
    options.forEach(option => {
        option.disabled = true;
    });
}