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
        const questionKey = "question" + questionNumber;

        const options = question.querySelectorAll('input[type="radio"]');
        const resultText = question.querySelector(".result");

        options.forEach(option => {
            option.addEventListener("change", function () {

                const selected = this.value;

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

        if (option.value === correctAnswer) {
            label.classList.add("correct");
        } else {
            label.classList.add("wrong");
        }
    });

    if (selected === correctAnswer) {
        resultText.textContent = "You got it correct!";
    } else {
        resultText.textContent = "You got it wrong!";
    }
}

function disableOptions(options) {
    options.forEach(option => {
        option.disabled = true;
    });
}