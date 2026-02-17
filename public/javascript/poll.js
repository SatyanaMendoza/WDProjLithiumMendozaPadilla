document.addEventListener("DOMContentLoaded", function () {
    
    function initPoll(formId, yesCountId, noCountId, storage){
        const pollForm = 
            document.getElementById(formId);
        const yesCount = 
            document.getElementById(yesCountId);
        const noCount = 
            document.getElementById(noCountId);
        let yesVotes = parseInt(localStorage.getItem(storage+"_yes")) || 0;
        let noVotes =  parseInt(localStorage.getItem(storage+"_no")) ||0;

    const updateResults = () => {
        yesCount.textContent = yesVotes;
        noCount.textContent = noVotes;
    };
    updateResults();

    pollForm.addEventListener("submit", function (e) {
        e.preventDefault();
       
        const formData = new FormData(pollForm);
            const userVote = formData.get("vote");

            if (userVote === "yes") {
                yesVotes++;
                localStorage.setItem(storage + "_yes", yesVotes);
            } else if (userVote === "no") {
                noVotes++;
                localStorage.setItem(storage + "_no", noVotes);
            }
            updateResults();
        });
    }

            initPoll("poll-form", "yes-count", "no-count", "poll-question");

            initPoll("poll-form2", "yes-count2", "no-count2", "poll-question2");

            

});