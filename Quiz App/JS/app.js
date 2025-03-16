const questions = [
    {
        question: "What is the capital of Bangladesh?",
        answer: [
            {text: "Dhaka", correct: true},
            {text: "Rajshahi", correct:false},
            {text: "Chittagong", correct:false},
            {text: "Khulna", correct:false},
        ]
    },
    {
        question: "What is the capital of India?",
        answer: [
            {text: "Dhaka", correct:false},
            {text: "Rajshahi", correct:false},
            {text: "New Delhi", correct: true},
            {text: "Khulna", correct:false},
        ]
    },
    {
        question: "What is the capital of Pakistan?",
        answer: [
            {text: "Dhaka", correct:false},
            {text: "Islamabad", correct: true},
            {text: "Chittagong", correct:false},
            {text: "Khulna", correct:false},
        ]
    },
    {
        question: "What is the capital of Nepal?",
        answer: [
            {text: "Dhaka", correct:false},
            {text: "Rajshahi", correct:false},
            {text: "Kathmandu", correct: true},
            {text: "Khulna", correct:false},
        ]
    },
    {
        question: "What is the capital of Bhutan?",
        answer: [
            {text: "Dhaka", correct:false},
            {text: "Rajshahi", correct:false},
            {text: "Chittagong", correct:false},
            {text: "Thimphu", correct: true},
        ]
    },
    {
        question: "What is the capital of Sri Lanka?",
        answer: [
            {text: "Dhaka", correct:false},
            {text: "Rajshahi", correct:false},
            {text: "Colombo", correct: true},
            {text: "Khulna", correct:false},
        ]
    },
    {
        question: "What is the capital of Maldives?",
        answer: [
            {text: "Dhaka", correct: false},
            {text: "Rajshahi", correct:false},
            {text: "Chittagong", correct:false},
        
        ]
    } 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    // nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + ". " + currentQuestionIndex.question;
    
    
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();