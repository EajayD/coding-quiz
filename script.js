// Pointers
var instructions = document.querySelector(".instructions");
var questions = document.querySelector(".questions");
var timer = document.querySelector(".timer");
var seconds = document.querySelector("#seconds");
var start = document.querySelector("#start");
var ask = document.querySelector("#ask");
var choiceOne = document.querySelector("#select1");
var choiceTwo = document.querySelector("#select2");
var choiceThree = document.querySelector("#select3");
var choiceFour = document.querySelector("#select4");
var scores = document.querySelector(".scores");
var input = document.querySelector(".input");
var result = document.querySelector(".result");
var entry = document.querySelector("#entry");
var submit = document.querySelector("#submit");
var back = document.querySelector("#goback");
var init = document.querySelector("#initials");
var timeLeft = 60;
// empty array to hold submissions
var highScore = [];

// Hides question area on start up
// scores and input added to hide, probably could have used setattribute but im already commited to this method
questions.style.display = "none";
scores.style.display = "none";
input.style.display = "none";

var inquiry = [
    { 
        question: "What does CSS stand for?",
        c1: "Carrying Slow Snakes",
        c2: "Cascading Style Sheet",
        c3: "Calling Steven Spielberg",
        c4: "Caressing Soft Snowmen"
    },
    {
        question: " A boolean is ______.",
        c1: "a ghost",
        c2: "a string of elements",
        c3: "an array",
        c4: "a data type"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        c1: "quotation marks",
        c2: "a blanket",
        c3: "curly braces",
        c4: "parenthesis"
    },
    {
        question: "In CSS, when something is written as 'button:hover' for example; hover is considered what?",
        c1: "A concat variable",
        c2: "A psuedo class",
        c3: "A function",
        c4: "A reclassification"
    },
    {
        question: "What does DOM stand for?",
        c1: "Deliberate Order Management",
        c2: "Designing Other Messages",
        c3: "Document Object Model",
        c4: "Don't Open Master"
    }
];

function beginTest() {

    var timerInterval = setInterval(function(){
        timeLeft;
        timeLeft--;
        seconds.textContent = timeLeft;
        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval);
            inputScore();
        }
    }, 1000);


    // reveals question block, hides other elements
    questions.style.display = "block";
    instructions.style.display = "none";
    start.style.display = "none";

    // fill content
    ask.textContent = (inquiry[0].question);
    choiceOne.textContent = (inquiry[0].c1);
    choiceTwo.textContent = (inquiry[0].c2);
    choiceThree.textContent = (inquiry[0].c3);
    choiceFour.textContent = (inquiry[0].c4);

    // event listener for choice, will then run a new function for next question
    choiceOne.addEventListener("click", function (){
        timeLeft = timeLeft - 7;
        inquiryTwo();
    });
    choiceTwo.addEventListener("click", function (){
        inquiryTwo();
    });
    choiceThree.addEventListener("click", function (){
        timeLeft = timeLeft - 7;
        inquiryTwo();
    });
    choiceFour.addEventListener("click", function (){
        timeLeft = timeLeft - 7;
        inquiryTwo();
    });
    

    // tested, will loop 3 more times to adjust for correct choice
    function inquiryTwo() {
        ask.textContent = (inquiry[1].question);
        choiceOne.textContent = (inquiry[1].c1);
        choiceTwo.textContent = (inquiry[1].c2);
        choiceThree.textContent = (inquiry[1].c3);
        choiceFour.textContent = (inquiry[1].c4);

        // change penalty for correct choice, begin new function for next question
        choiceOne.addEventListener("click", function (){

            inquiryThree();
        });
        choiceTwo.addEventListener("click", function (){
            timeLeft = timeLeft - 7;
            inquiryThree();
        });
        choiceThree.addEventListener("click", function (){

            inquiryThree();
        });
        choiceFour.addEventListener("click", function (){
            timeLeft = timeLeft + 7;
            inquiryThree();
        });

        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval);
            inputScore();
        }

    };

    // one more test to check if questions change and penalties are applied
    // test went well, will now create for the next 2 questions
    function inquiryThree() {
        ask.textContent = (inquiry[2].question);
        choiceOne.textContent = (inquiry[2].c1);
        choiceTwo.textContent = (inquiry[2].c2);
        choiceThree.textContent = (inquiry[2].c3);
        choiceFour.textContent = (inquiry[2].c4);

        choiceOne.addEventListener("click", function (){
            timeLeft = timeLeft + 7
            inquiryFour();
        });
        choiceTwo.addEventListener("click", function (){
            timeLeft = timeLeft + 7;
            inquiryFour();
        });
        choiceThree.addEventListener("click", function (){

            inquiryFour();
        });
        choiceFour.addEventListener("click", function (){
            timeLeft = timeLeft - 14;
            inquiryFour();
        });

        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval);
            inputScore();
        }

    };

    function inquiryFour() {
        ask.textContent = (inquiry[3].question);
        choiceOne.textContent = (inquiry[3].c1);
        choiceTwo.textContent = (inquiry[3].c2);
        choiceThree.textContent = (inquiry[3].c3);
        choiceFour.textContent = (inquiry[3].c4);

        choiceOne.addEventListener("click", function (){
            timeLeft = timeLeft - 21;
            inquiryFive();
        });
        choiceTwo.addEventListener("click", function (){
            inquiryFive();
        });
        choiceThree.addEventListener("click", function (){
            inquiryFive();
        });
        choiceFour.addEventListener("click", function (){
            timeLeft = timeLeft + 21;
            inquiryFive();
        });
        
        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval);
            inputScore();
        }

    };

    // subsequent functions now subtracting even more time when answered even when correct, will need to fix penalty and how it works


    // need function to record score based on time left, need to make score section, hide the questions sections
    // need to create form to record initials, and create section for high score display, will do tomorrow 
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOTE
    function inquiryFive() {
        ask.textContent = (inquiry[4].question);
        choiceOne.textContent = (inquiry[4].c1);
        choiceTwo.textContent = (inquiry[4].c2);
        choiceThree.textContent = (inquiry[4].c3);
        choiceFour.textContent = (inquiry[4].c4);

        choiceOne.addEventListener("click", function (){
            timeLeft = timeLeft + 42;
            inputScore();
        });
        choiceTwo.addEventListener("click", function (){
            timeLeft = timeLeft - 21;
            inputScore();
        });
        choiceThree.addEventListener("click", function (){
            timeLeft = timeLeft + 7;
            inputScore();
        });
        choiceFour.addEventListener("click", function (){
            timeLeft = timeLeft - 28;
            inputScore();
        });
        
    };
        // for some reason I thought stop propagation would work but I may have been using it wrong so I had to adjust it manually
        // tested each choice now for each choice and question should, now reflect 7 second penalty

    function inputScore(){

        questions.style.display ="none";
        input.style.display ="block";
        clearInterval(timerInterval);

        result.textContent = timeLeft;
        submitScore();

    }
    return;
}
function submitScore(){
    // event.preventDefault();

    var enter = entry.value;
    var highScore = [];
// initial commit, need to apply it to the high score page save here for now
    if (enter){
        highScore.push({
            "Initials": enter,
            "Score": timeLeft
        });
        localStorage.setItem("highScore", JSON.stringify(highScore));
        // create new view function to see the high score page
        viewScores();
    }
}
submit.addEventListener("click", submitScore);

function viewScores(){
    scores.style.display = "block";
    input.style.display = "none";
    instructions.style.display = "none";
    start.style.display = "none";

    // for listing the scores
    highScore = JSON.parse(localStorage.getItem('highScore'))
    for (var i = 0; i < highScore.length; i++){
        var score = document.createElement("div");
        score.textContent = (i + 1) + ". " + highScore[i].Initials + " - " + highScore[i].Score;

        // appending to display the score
        init.appendChild(score);
    }
};

function goBack(){
    scores.style.display = "none";
    input.style.display = "none";
    instructions.style.display = "block";
    start.style.display = "initial";
    timeLeft = 60;

};

// clears scores one by one from the top
function clearStorage() {
    localStorage.clear();
    init.removeChild(init.firstChild);

}

// crunched on time but it seems when I try to redo the test without refreshing the page, it adds a bunch of scores after you answer the first question
// also the score gets overwritten but local storage still works correctly, so only one score at a time.