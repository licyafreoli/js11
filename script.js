const questions = [
    {
        question: "Quem foi o primeiro presidente do Brasil?",
        options: ["Getúlio Vargas", "Dom Pedro I", "Juscelino Kubitschek", "Deodoro da Fonseca"],
        answer: "Deodoro da Fonseca"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
        answer: "Pacífico"
    },
    {
        question: "Em que ano ocorreu a Revolução Francesa?",
        options: ["1789", "1776", "1799", "1804"],
        answer: "1789"
    },
    {
        question: "Quem foi a primeira mulher a ganhar um Prêmio Nobel?",
        options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        answer: "Marie Curie"
    }
];

let currentQuestionIndex = 0;

function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function displayQuestion() {
    const question = getRandomQuestion();
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button';
        button.onclick = () => checkAnswer(option, question.answer);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    const feedbackElement = document.getElementById('feedback');
    const reloadButton = document.getElementById('reload-btn');

    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Acertou!!!";
    } else {
        feedbackElement.textContent = `Errado! A resposta correta é: ${correctAnswer}`;
    }

    reloadButton.style.display = 'block';
}

document.getElementById('reload-btn').addEventListener('click', () => {
    displayQuestion();
    document.getElementById('reload-btn').style.display = 'none';
});

// Initialize the quiz
displayQuestion();
