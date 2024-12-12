"use strict";

// https://webdesign.tutsplus.com/multiple-choice-quiz-app-with-javascript--cms-107756t

/*const questions = [
    {
        question: "Which of the following statements about the British Columbia civil court system would be considered accurate?",
        choices: ["The next step for a disappointed litigant in a small claims dispute would be to appeal the small claims court decision to the BC Court of Appeal.",
            "A matter brought before the BC Court of Appeal will be settled by a decision delivered by the majority of the judges after they have listened again to all of the evidence.",
            "A BC Supreme Court judge can only hear cases involving amounts over $35,000.", "A litigant can bring their case no further than the BC Court of Appeal, unless leave to appeal to the Supreme Court of Canada is granted."],
        correct: 3
    },
    {
        question: "After buying her fourth car, Jessie decides that it is time to build a new garage. Although she is not a professional, she is handy with tools and decides to design and build the garage herself. Once the garage is built, Jessie invites her neighbour, Steve, to her house to view her new garage. Steve thinks that the garage is unsightly and demands that she tear it down. Jessie, of course, refuses. That night, Steve drives his car through the garage, destroying months of hard work. Jessie successfully sues Steve and obtains an award of $80,000 for damages. Steve feels that the decision of the court is unfair and refuses to pay it. Which of the following steps may Jessie take?",
        choices: ["Jessie can send a writ of execution to Steve and then personally seize and sell enough of his property to pay the judgment.",
            "Jessie can apply to have a garnishing order served on Steve’s employer, ordering the employer to pay all of his wages into the court. She can then apply to have all of the money paid out to her.",
            "Jessie can register her judgment in the land title office against Steve's title and apply to the land title registrar for a judicial sale of Steve’s property; after the payment of prior charges on title, the proceeds will go towards paying the judgment.",
            "Jessie may do none of the above."],
        correct: 3
    },
    {
        question: "Which of the following statements concerning disclosure statements in British Columbia is FALSE?",
        choices: [" A disclosure statement must be provided by a developer to a buyer where an offer of sale or lease relates to a time share interest in a development unit.",
            "A disclosure statement must indicate that the purchaser has the right to rescind the purchase agreement by serving written notice of the rescission on the developer.",
            "A disclosure statement must be in the form and include the content required by the BC Financial Services Authority.",
            "One of the supporting documents which must accompany the disclosure statement is a certificate from a lawyer who is a member of the Law Society of British Columbia confirming that a true copy of the disclosure statement will be delivered to the prospective purchaser or lessee."],
        correct: 3
    } //,
    // add more questions here...
];*/

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
    feedback.innerHTML = "";
}

function checkAnswer(selected) {
    const feedback = document.getElementById("feedback");
    if (selected === questions[currentQuestion].correct) {
        feedback.innerHTML = "Right!";
        correctAnswers++;
    } else {
        feedback.innerHTML = `Wrong. The correct answer was ${questions[currentQuestion].correct + 1}.`;
    }
    // Anonymous function (pg. 854). Arrow functions.
    // setTimeout syntax:   setTimeout(function, milliseconds, param1, param2, ...)
    setTimeout( () => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const quizContainer = document.querySelector(".quiz-container");
            quizContainer.innerHTML = `<p>You got ${correctAnswers} out of ${questions.length} questions.</p>`;
        }
    }, 5000);
}

showQuestion();

