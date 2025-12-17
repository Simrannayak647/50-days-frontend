// DOM Elements Selection
const start = document.getElementById('start-screen');
const quiz = document.getElementById('quiz-screen');
const result = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('restart-btn');

const ques = document.getElementById('question-text');
const ans = document.getElementById('answer-container');

const curQ = document.getElementById('current-question');
const totalQ = document.getElementById('total-questions');

const score = document.getElementById('score');
const final = document.getElementById('final-score');
const max = document.getElementById('max-score');

const msg = document.getElementById('result-message');
const bar = document.getElementById('progress');

// Quiz Questions
const quizQuestions = [
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    question: "What will `typeof null` return in JavaScript?",
    answers: [
      { text: "null", correct: false },
      { text: "undefined", correct: false },
      { text: "object", correct: true },
      { text: "string", correct: false },
    ],
  },
  {
    question: "Which method is used to convert JSON string to JavaScript object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.object()", correct: false },
      { text: "parse.JSON()", correct: false },
    ],
  },
  {
    question: "Which operator is used to compare both value and type in JavaScript?",
    answers: [
      { text: "==", correct: false },
      { text: "!=", correct: false },
      { text: "===", correct: true },
      { text: "=", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    answers: [
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "Float", correct: true },
      { text: "String", correct: false },
    ],
  },
];

// Quiz State
let currentQuestionIndex = 0;
let scoreCount = 0;
let answersLocked = false;

// Initialize totals
totalQ.textContent = quizQuestions.length;
max.textContent = quizQuestions.length;

// Events
startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', restartQuiz);

// Start Quiz
function startQuiz() {
  currentQuestionIndex = 0;
  scoreCount = 0;
  score.textContent = scoreCount;

  start.classList.remove('active');
  quiz.classList.add('active');
  result.classList.remove('active');

  showQuestion();
}

// Show Question
function showQuestion() {
  answersLocked = false;
  ans.innerHTML = '';

  const currentQuestion = quizQuestions[currentQuestionIndex];
  curQ.textContent = currentQuestionIndex + 1;

  const progressPercent =
    (currentQuestionIndex / quizQuestions.length) * 100;
  bar.style.width = progressPercent + '%';

  ques.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.classList.add('answer-btn');
    button.dataset.correct = answer.correct;

    button.addEventListener('click', selectAnswer);
    ans.appendChild(button);
  });
}

// Select Answer
function selectAnswer(e) {
  if (answersLocked) return;
  answersLocked = true;

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  Array.from(ans.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
  });

  if (isCorrect) {
    scoreCount++;
    score.textContent = scoreCount;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

// Show Results
function showResults() {
  quiz.classList.remove('active');
  result.classList.add('active');

  final.textContent = scoreCount;

  const percent = (scoreCount / quizQuestions.length) * 100;

  if (percent >= 80) {
    msg.textContent = "Excellent work!";
  } else if (percent >= 50) {
    msg.textContent = "Good job!";
  } else {
    msg.textContent = "Better luck next time!";
  }

  bar.style.width = '100%';
}

// Restart Quiz
function restartQuiz() {
  result.classList.remove('active');
  start.classList.add('active');
}
