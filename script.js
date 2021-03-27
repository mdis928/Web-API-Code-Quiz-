var button = document.createElement('button')
var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var Countdown = 76

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame) 

var timerID

// To start the game and timer begins
function startGame() {
    timerID = setInterval (function(){
        Countdown--;
        document.getElementById ("timer").textContent= Countdown;
        if (Countdown <= 0){
            clearInterval(timerID); 
        document.getElementById('timer').textContent="You are out of Time!"   
        QuizOver()    
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
    var currentQ = questions [currentQuestionIndex]
    questionElement.innerText = currentQ.question
    answerButtonsElement.innerHTML= ""
    currentQ.answers.forEach(function(choice,i){
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class",'choice')
        choiceBtn.setAttribute("value",choice)
        choiceBtn.textContent=i+1+" "+choice
        choiceBtn.onclick = selectAnswer
        answerButtonsElement.appendChild(choiceBtn)
    })
    // question.answers.forEach(answer => {
    //     var button = document.createElement('button')    
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', selectAnswer)
    //     answerButtonsElement.appendChild(button)
    // })
}

function resetState() {
    button.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


// When selecting a question
function selectAnswer (e) {
    // const selectedButton = e.target
    // var correct = selectedButton.dataset.Correct
    // setStatusClass(document.body, correct)
    // Array.from(answerButtonsElement.children).forEach(button => {setStatusClass(button, button.dataset.Correct)})
    if(this.value !== questions[currentQuestionIndex].correct){
        Countdown -=15
    }
    currentQuestionIndex++ 
    console.log(currentQuestionIndex)
    console.log(questions.length)
    if(currentQuestionIndex === questions.length){
        clearInterval(timerID)
        QuizOver() 
    }
    else{
        showQuestion()
    }
}

function QuizOver(){

}





var questions = [
    {
        question: "Which of the following is a disadvantage of using JavaScript?",
        answers: [
            "Client-side JS does not allow the reading or writing of file", 
             "JS cannot be used for Networking applications because there is no such support available", 
             "JS doesn't have any mutltithreading or mutliprocess capabilties", 
             "All of the above", 
        ], 
        correct: "All of the above"
    },
    {
        question: "Which of the following is true about cookie handling in JavaScript?",
        answers: [
            "JavaScript can manipulate cookies using the cookie property of the Document object.", 
            "JavaScript can read, create, modify, and delete the cookie or cookies that apply to the current web page.", 
             "Both of the above.",
             "None of the above.",
        ],
        correct: "Both of the above"
    },
    {
        question: "Which built-in method returns the character at the specified index?",
        answers: [
             "characterAt()", 
            "getCharAt()", 
             "charAt()", 
            "None of the above.", 
        ],
        correct: "CharAt()"
    },
        {question: "Which built-in method reverses the order of the elements of an array?",
        answers: [
            "changeOrder(order)", 
            "reverse()", 
            "sort(order)", 
             "None of the above.",
        ],
        correct: "reverse()"
    },
    {
       question: "Which of the following function of Number object returns a string value version of the current number?", 
       answers: [
           "toString()", 
            "toFixed()", 
           "toLocaleString()", 
            "toPrecision()", 

       ],
       correct: "toString()"
    }
]