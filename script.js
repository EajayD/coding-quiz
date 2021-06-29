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
var timeLeft = 60;

// Hides question area on start up
questions.style.display = "none";

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
        timeLeft--;
        seconds.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
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
}