document.addEventListener("DOMContentLoaded", function () {
    const pollForm = 
        document.getElementById("poll-form");
    const yesCount = 
        document.getElementById("yes-count");
    const noCount = 
        document.getElementById("no-count");
    let yesVotes = parseInt(localStorage.getItem("yesVotes")) || 0;
    let noVotes =  parseInt(localStorage.getItem("noVotes")) ||0;

    updateResults()
    
    pollForm.addEventListener("submit", function (e) {

        // It will help to prevent the submission of 
        // form, so that following code can execute
        e.preventDefault();
        const formData = new FormData(pollForm);
        const userVote = formData.get("vote");

        if (userVote === "yes") {
            yesVotes++;
             localStorage.setItem("yesVotes", yesVotes);

        } else if (userVote === "no") {
            noVotes++;
             localStorage.setItem("noVotes", noVotes);
        }
        updateResults();
    });

    function updateResults() {
        yesCount.textContent = yesVotes;
        noCount.textContent = noVotes;
    }
});