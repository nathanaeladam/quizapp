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

function showQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer1'];
    document.getElementById('answer2').innerHTML = question['answer2'];
    document.getElementById('answer3').innerHTML = question['answer3'];
    document.getElementById('answer4').innerHTML = question['answer4'];
}