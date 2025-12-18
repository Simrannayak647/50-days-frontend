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
    question: "What will be the output of: console.log(0.1 + 0.2 === 0.3)?",
    answers: [
      { text: "true", correct: false },
      { text: "false", correct: true, explanation: "Due to floating point precision, 0.1 + 0.2 = 0.30000000000000004" },
      { text: "undefined", correct: false },
      { text: "TypeError", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "Which statement about 'let' and 'const' is correct?",
    answers: [
      { text: "Both are block-scoped and can be reassigned", correct: false },
      { text: "'let' is function-scoped, 'const' is block-scoped", correct: false },
      { text: "'let' can be reassigned, 'const' cannot be reassigned", correct: true },
      { text: "Both are hoisted to the top of their function scope", correct: false },
    ],
    difficulty: "easy"
  },
  {
    question: "What does the following code return: [1, 2, 3].map(n => n * 2).filter(n => n > 3)?",
    answers: [
      { text: "[2, 4, 6]", correct: false },
      { text: "[4, 6]", correct: true, explanation: "map returns [2,4,6], filter keeps values > 3" },
      { text: "[6]", correct: false },
      { text: "TypeError", correct: false },
    ],
    difficulty: "easy"
  },
  {
    question: "What is the value of 'this' inside an arrow function?",
    answers: [
      { text: "The global object (window)", correct: false },
      { text: "Undefined", correct: false },
      { text: "The object that contains the arrow function", correct: false },
      { text: "The lexical context where it was defined", correct: true },
    ],
    difficulty: "medium"
  },
  {
    question: "Which code snippet creates a deep copy of an object?",
    answers: [
      { text: "const copy = Object.assign({}, original)", correct: false },
      { text: "const copy = { ...original }", correct: false },
      { text: "const copy = JSON.parse(JSON.stringify(original))", correct: true },
      { text: "const copy = original.slice()", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "What is the output of: console.log([] == ![])?",
    answers: [
      { text: "true", correct: true, explanation: "Due to type coercion: [] == false → '' == false → 0 == 0" },
      { text: "false", correct: false },
      { text: "undefined", correct: false },
      { text: "ReferenceError", correct: false },
    ],
    difficulty: "hard"
  },
  {
    question: "Which method is used to handle multiple promises and return when all complete?",
    answers: [
      { text: "Promise.race()", correct: false },
      { text: "Promise.all()", correct: true },
      { text: "Promise.resolve()", correct: false },
      { text: "Promise.catch()", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "What does the 'debounce' function pattern help with?",
    answers: [
      { text: "Memory leaks", correct: false },
      { text: "Rate-limiting function calls (e.g., search input)", correct: true },
      { text: "Promise chaining", correct: false },
      { text: "Event bubbling", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "What is the purpose of the 'use strict' directive?",
    answers: [
      { text: "Enables ES6 features", correct: false },
      { text: "Makes JavaScript run faster", correct: false },
      { text: "Enforces stricter parsing and error handling", correct: true },
      { text: "Enables TypeScript features", correct: false },
    ],
    difficulty: "easy"
  },
  {
    question: "Which is NOT a falsy value in JavaScript?",
    answers: [
      { text: "0", correct: false },
      { text: "''", correct: false },
      { text: "null", correct: false },
      { text: "'0'", correct: true, explanation: "String '0' is truthy" },
    ],
    difficulty: "easy"
  },
  {
    question: "What does the following code log: console.log(1 + '2' + 3 - 4)?",
    answers: [
      { text: "10", correct: false },
      { text: "119", correct: true, explanation: "'12' + 3 = '123', then '123' - 4 = 119" },
      { text: "8", correct: false },
      { text: "NaN", correct: false },
    ],
    difficulty: "hard"
  },
  {
    question: "What is a closure in JavaScript?",
    answers: [
      { text: "A function bundled with its lexical environment", correct: true },
      { text: "A way to close database connections", correct: false },
      { text: "A method to close modal windows", correct: false },
      { text: "A technique for memory optimization", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "Which method adds elements to the beginning of an array?",
    answers: [
      { text: "push()", correct: false },
      { text: "unshift()", correct: true },
      { text: "prepend()", correct: false },
      { text: "addFirst()", correct: false },
    ],
    difficulty: "easy"
  },
  {
    question: "What is the event loop responsible for?",
    answers: [
      { text: "Memory allocation", correct: false },
      { text: "Executing async callbacks when the call stack is empty", correct: true },
      { text: "Looping through arrays", correct: false },
      { text: "Event delegation", correct: false },
    ],
    difficulty: "medium"
  },
  {
    question: "What does the 'Symbol' data type represent?",
    answers: [
      { text: "A unique and immutable primitive value", correct: true },
      { text: "A special character in strings", correct: false },
      { text: "A mathematical symbol", correct: false },
      { text: "A type of iterator", correct: false },
    ],
    difficulty: "hard"
  }
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
