let questions = [
    {
        "question": "Wie beginnt Artikel 1 des deutschen Grundgesetzes?",
        "answer1": "Alle Menschen sind vor dem Gesetz gleich.",
        "answer2": "Jeder hat das Recht auf die freie Entfaltung seiner Persönlichkeit.",
        "answer3": "Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern.",
        "answer4": "Die Würde des Menschen ist unantastbar.",
        "right_answer": "4",
    },
    {
        "question": "Wofür steht das „L“ im Sender RTL?",
        "answer1": "London",
        "answer2": "Luxenbourg",
        "answer3": "Los Angeles",
        "answer4": "Liechtenstein",
        "right_answer": "2",
    },
    {
        "question": "Wer verbreitete das heliozentrische Weltbild?",
        "answer1": "Galileo Galilei",
        "answer2": "Nikolaus Kopernikus",
        "answer3": "Leonardo da Vinci",
        "answer4": "Aristoteles",
        "right_answer": "2",
    },
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Donald Trump",
        "answer2": "Angela Merkel",
        "answer3": "Capital Bra",
        "answer4": "Tim Berners-Lee",
        "right_answer": "4",
    },
    {
        "question": "An welchem Datum fiel die Berliner Mauer?",
        "answer1": "3. Oktober 1990",
        "answer2": "2. November 1990",
        "answer3": "9. November 1989",
        "answer4": "8. Oktober 1989",
        "right_answer": "3",
    },
    {
        "question": "Wo fanden die Olympischen Spiele 1996 statt? ",
        "answer1": "Atlanta",
        "answer2": "Turin",
        "answer3": "Barcelona",
        "answer4": "Los Angeles",
        "right_answer": "1",
    },
    {
        "question": "Wie heißt die Hauptstadt von Äthiopien?",
        "answer1": "Nairobi",
        "answer2": "Mogadischu",
        "answer3": "Harare",
        "answer4": "Addis Abeba",
        "right_answer": "4",
    },
    {
        "question": "Wer gilt als Verfasser der amerikanischen Unabhängigkeitserklärung?",
        "answer1": "Thomas Jefferson",
        "answer2": "Benjamin Franklin",
        "answer3": "George Washington",
        "answer4": "John Adams",
        "right_answer": "1",
    },
    {
        "question": "Wie viele Planeten hat unser Sonnensystem?",
        "answer1": "8",
        "answer2": "9",
        "answer3": "10",
        "answer4": "11",
        "right_answer": "1",
    },
    {
        "question": "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
        "answer1": "Troposphäre",
        "answer2": "Stratosphäre",
        "answer3": "Mesosphäre",
        "answer4": "Thermosphäre",
        "right_answer": "1",
    }
];

let currentQuestion = 0;
let counter = 0;

let AUDIO_RIGHT = new Audio('audio/right.mp3');
let AUDIO_WRONG = new Audio('audio/wrong.mp3');

function init() {
    showStartscreenBody();
}

function showStartscreenBody() {
    document.getElementById('endscreen').style = 'display:none';
    document.getElementById('question-body').style = 'display:none';
    document.getElementById('startscreen').style = '';
}

function showQuestionBody() {
    document.getElementById('endscreen').style = 'display:none';
    document.getElementById('startscreen').style = 'display:none';
    document.getElementById('question-body').style = '';
}

function showEndscreenBody() {
    document.getElementById('endscreen').style = '';
    document.getElementById('question-body').style = 'display:none';
    document.getElementById('startscreen').style = 'display:none';
    document.getElementById('right-answer-count').innerHTML = counter;
}

function startQuizGeneralKnowledge() {
    document.getElementById('question-count').innerHTML = questions.length;
    document.getElementById('question-count-endscreen').innerHTML = questions.length;

    showQuestionBody();
    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndscreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function updateToNextQuestion() {
    updateProgressBar();

    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
    document.getElementById('number-of-question').innerHTML = currentQuestion + 1;
}

function updateProgressBar() {
    let percent = Math.round(currentQuestion / questions.length * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
}

function answer(selection) {
    let question = questions[currentQuestion];

    if (selection.slice(-1) == question['right_answer']) {
        returnRight(selection);
    } else {
        returnWrong(selection);
    }
    aktivateNextQuestionButton();
}

function deaktivateNextQuestionButton() {
    document.getElementById('next-button').disabled = true;
}

function aktivateNextQuestionButton() {
    document.getElementById('next-button').disabled = false;
}

function returnRight(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
    AUDIO_RIGHT.play();
    counter++;
}

function returnWrong(selection) {
    let idOfRightAnswer = `answer${questions[currentQuestion]['right_answer']}`;
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    AUDIO_WRONG.play();
}

function nextQuestion() {
    currentQuestion++;
    deaktivateNextQuestionButton();
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-danger');
        document.getElementById(`answer${i}`).parentNode.classList.remove('bg-success');
    }
}

function newstart() {
    currentQuestion = 0;
    counter = 0;
    init();
    showStartscreenBody();
}
