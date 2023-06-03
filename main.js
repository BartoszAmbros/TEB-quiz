const data = [
    {
        id: 1,
        question: 'Kto jest prezydentem Polski?',
        answers: [
            { answer: 'Andrzej Duda', isCorrect: true },
            { answer: 'Lech Wałęsa', isCorrect: false },
            { answer: 'Donald Tusk', isCorrect: false },
            { answer: 'Jacek Sasin', isCorrect: false },
        ],
    },
    {
        id: 2,
        question: 'Kto jest kapitanem reprezentacji Polski w piłce nożnej?',
        answers: [
            { answer: 'Wojciech Szczęsny', isCorrect: false },
            { answer: 'Kamil Glik', isCorrect: false },
            { answer: 'Robert Lewandowski', isCorrect: true },
            { answer: 'Grzegorz Krychowiak', isCorrect: false },
        ],
    },
    {
        id: 3,
        question: 'Ilu sąsiadów ma Polska?',
        answers: [
            { answer: 'Czterech', isCorrect: false },
            { answer: 'Pięciu', isCorrect: false },
            { answer: 'Sześciu', isCorrect: false },
            { answer: 'Siedmiu', isCorrect: true },
        ],
    }
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answersContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userScore = 0;
let selectedAnswer;

function showQuestion(questionNumber) {
    if (currentQuestion === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[0].question;
    answersContainer.innerHTML = data[questionNumber].answers.map((item, index) => `
        <div class="answer">
            <input type="radio" id="${index}" name="answer" value="${item.isCorrect}">
            <label for="${index}">${item.answer}</label>
        </div>
    `).join("");

    selectAnswer();

}


function selectAnswer() {
    answersContainer.querySelectorAll('input').forEach(function (el) {
        el.addEventListener('click', function (event) {
            selectedAnswer = event.target.value;
            console.log(selectedAnswer);
        })
    })
}

function submitAnswer() {
    if (selectedAnswer == null) {
        alert("Wybierz jedną z odpowiedzi");
    } else if (selectedAnswer == "true") {
        correctAnswers++;
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        incorrectAnswers++;
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}


function showResult() {

}

submit.addEventListener('click', submitAnswer);
showQuestion(currentQuestion);