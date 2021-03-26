var button = document.createElement('button')
var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var Countdown = 75

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame) 



// To start the game and timer begins
function startGame() {
    var timerID = setInterval (function(){
        Countdown--;
        document.getElementById ("timer").textContent= Countdown;
        if (Countdown === 0){
            clearInterval(timerID); 
        document.getElementById('timer').textContent="You are out of Time!"       
        }
    }, 1000)
    console.log ("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

// setting our next question
function setNextQuestion () {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')    
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    button.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


// When selecting a question
function selectAnswer (e) {
    const selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElements.children).forEach(button => {setStatusClass(button, button.dataset.correct)})
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add("correct")  
    } else {
        element.classlist.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}




var questions = [
    {
        question: "Which of the following is a disadvantage of using JavaScript?",
        answers: [
            {text: "Client-side JS does not allow the reading or writing of file", Correct: false},
            {text: "JS cannot be used for Networking applications because there is no such support available", Correct: false},
            {text: "JS doesn't have any mutltithreading or mutliprocess capabilties", Correct: false},
            {text: "All of the above", Correct: true}
        ] 
    },
    {
        question: "Which of the following is true about cookie handling in JavaScript?",
        answers: [
            {text: "JavaScript can manipulate cookies using the cookie property of the Document object.", Correct: false},
            {text: "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.", Correct: false},
            {text: "Both of the above.", Correct: true},
            {text: "None of the above.", Correct: false},

        ]
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        answers: [
            {text: "characterAt()", Correct: false},
            {text: "getCharAt()", Correct: false},
            {text: "charAt()", Correct: true},
            {text: "None of the above.", Correct: false},
        ]
    },
        {question: "Which built-in method reverses the order of the elements of an array?",
        answers: [
            {text: "changeOrder(order)", Correct: false},
            {text: "reverse()", Correct: true},
            {text: "sort(order)", Correct: false},
            {text: "None of the above.", Correct: false}
        ]
    },
    {
       question: "Which of the following function of Number object returns a string value version of the current number?", 
       answers: [
           {text: "toString()", Correct: true},
           {text: "toFixed()", Correct: false},
           {text: "toLocaleString()", Correct: false},
           {text: "toPrecision()", Correct: false},

       ]
    }
]