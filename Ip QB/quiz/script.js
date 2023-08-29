const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    }
    // Add more questions...
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;

    answersElement.innerHTML = "";
    question.answers.forEach((answer) => {
        const answerButton = document.createElement("button");
        answerButton.classList.add("answer");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => checkAnswer(answer, question.correctAnswer));
        answersElement.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
    }
    scoreElement.textContent = `Score: ${score}`;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        displayResults();
    }
}

function displayResults() {
    questionElement.textContent = "Quiz completed!";
    answersElement.innerHTML = "";
    feedbackElement.textContent = `Your score is ${score} out of ${questions.length}.`;

    if (score === questions.length) {
        feedbackElement.textContent += " Perfect!";
    } else if (score >= questions.length / 2) {
        feedbackElement.textContent += " Well done!";
    } else {
        feedbackElement.textContent += " Keep practicing!";
    }
}

displayQuestion(currentQuestionIndex);
