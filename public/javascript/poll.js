document.addEventListener("DOMContentLoaded", function () {
    
    function initPoll(formId, oneCountId, twoCountId, threeCountId, fourCountId, storage)
    {
        const pollForm = document.getElementById(formId);
        const oneCount = document.getElementById(oneCountId);
        const twoCount =   document.getElementById(twoCountId);
        const threeCount =   document.getElementById(threeCountId);
        const fourCount =   document.getElementById(fourCountId);

        let oneVotes = parseInt(localStorage.getItem(storage + "_one")) || 0;
        let twoVotes =  parseInt(localStorage.getItem(storage + "_two")) || 0;
        let threeVotes = parseInt(localStorage.getItem(storage + "_three")) || 0;
        let fourVotes =  parseInt(localStorage.getItem(storage + "_four")) || 0;

        const updateResults = () => {
            oneCount.textContent = oneVotes;
            twoCount.textContent = twoVotes;
            threeCount.textContent = threeVotes;
            fourCount.textContent = fourVotes;
        };
        updateResults();

        pollForm.addEventListener("submit", function (e) {

            e.preventDefault();
            const formData = new FormData(pollForm);
            const userVote = formData.get("vote");

            //Count votes and store them into local storage
                if (userVote === "one") {
                    oneVotes++;
                    localStorage.setItem(storage + "_one", oneVotes);
                } 
                else if (userVote === "two") {
                    twoVotes++;
                    localStorage.setItem(storage + "_two", twoVotes);
                }
                else if (userVote === "three") {
                    threeVotes++;
                    localStorage.setItem(storage + "_three", threeVotes);
                }
                else if (userVote === "four") {
                    fourVotes++;
                    localStorage.setItem(storage + "_four", fourVotes);
                }
                updateResults();
            });
    }
        //Call the function
            initPoll("poll-form", "one-count", "two-count", "three-count", "four-count", "poll-question");
            initPoll("poll-form2", "one-count2", "two-count2", "three-count2", "four-count2", "poll-question2");

            
});