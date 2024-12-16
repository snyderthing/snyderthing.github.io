"use strict";

// https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t


let currentQuestion = 0;
let correctAnswers = 0;

function showQuestion() {
    const questionText = document.getElementById("question-text");
    questionText.innerHTML = questions[currentQuestion].question;

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice, index) => {
        choice.innerHTML = questions[currentQuestion].choices[index];
    });

    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "<br>";
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.innerHTML = "<p>Right!</p>";
        correctAnswers++;
    } else {
        feedback.innerHTML = `Wrong. The correct answer was ${questions[currentQuestion].correct + 1}.`;
    }
    // Anonymous function (pg. 854). Arrow functions.
    // setTimeout syntax:   setTimeout(function, milliseconds, param1, param2, ...)

/*    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
        }
    }, 2500);
*/
    
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        const quizContainer = document.querySelector(".quiz-container");
        quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
    }
}

showQuestion();

