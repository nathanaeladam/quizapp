let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat css erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "tim berners-lee",
        "right_answer": "4",
    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('question-count').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showEndscreen();
    } else {

        let question = questions[currentQuestion];
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer1').innerHTML = question['answer1'];
        document.getElementById('answer2').innerHTML = question['answer2'];
        document.getElementById('answer3').innerHTML = question['answer3'];
        document.getElementById('answer4').innerHTML = question['answer4'];
        document.getElementById('number-of-question').innerHTML = currentQuestion + 1;
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer${questions[currentQuestion]['right_answer']}`;

    if (selection.slice(-1) == questions[currentQuestion]['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-success');
    }
}

function showEndscreen(){
    document.getElementById('card').innerHTML = `
        <div>
        </div>
    `;
}