//For the dropdown menu
function toggleMenu() {
  const menu = document.getElementById('dropdown');
  menu.classList.toggle('active');
}

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
            initPoll("poll-form3", "one-count3", "two-count3", "three-count3", "four-count3", "poll-question3");
            initPoll("poll-form4", "one-count4", "two-count4", "three-count4", "four-count4", "poll-question4");
            initPoll("poll-form5", "one-count5", "two-count5", "three-count5", "four-count5", "poll-question5");
            initPoll("poll-form6", "one-count6", "two-count6", "three-count6", "four-count6", "poll-question6");
            initPoll("poll-form7", "one-count7", "two-count7", "three-count7", "four-count7", "poll-question7");
            initPoll("poll-form8", "one-count8", "two-count8", "three-count8", "four-count8", "poll-question8");
            initPoll("poll-form9", "one-count9", "two-count9", "three-count9", "four-count9", "poll-question9");
            initPoll("poll-form10", "one-count10", "two-count10", "three-count10", "four-count10", "poll-question10");

            
});