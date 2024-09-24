function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playSound() {
    let clickSound = document.getElementById('selecionasom');
    clickSound.play();
}

function submitQuiz() {
    // Desabilita o botão de envio após ser clicado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = true;

    // Habilita o botão de "Responder novamente"
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = false;

    let correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "A",
        q4: "A",
        q5: "A",
        q6: "A",
        q7: "A",
        q8: "A",
        q9: "A",
        q10: "A"        
    };


let form = document.getElementById('quiz-form');
let score = 0;

for (let key in correctAnswers) {
    let userAnswers = form.elements[key].value;
    if (userAnswers === correctAnswers[key]) {
        score++;
    }
}

// let result = document.getElementById('result');
// result.innerHTML = `Você acertou ${score} de 3 perguntas.`;

// if (score === 3){
//     let sucessSound = document.getElementById('venceusom');
//     sucessSound.play();
// }

// else {
//     let perdeuSound = document.getElementById('erradosom');
//     perdeuSound.play();
// }

let result = document.getElementById('result');
let discount = 70 - (10 - score) * 7;
result.innerHTML = `Você assinalou ${score} de 10 perguntas! Você receberá ${discount}% de desconto.`;

if (score >= 1 && score <= 10){
    let sucessSound = document.getElementById('venceusom');
    sucessSound.play();
} else {
    let perdeuSound = document.getElementById('erradosom');
    perdeuSound.play();
}

}

function resetQuiz() {
    // Reabilita o botão de envio quando o quiz é reiniciado
    let enviarBtn = document.getElementById('enviarBtn');
    enviarBtn.disabled = false;

    // Desabilita o botão de "Responder novamente" novamente
    let resetBtn = document.getElementById('resetBtn');
    resetBtn.disabled = true;

    // Limpa as respostas e reseta o formulário
    document.getElementById('quiz-form').reset();

    // Reabilita as opções de resposta
    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    // Limpa o resultado
    let result = document.getElementById('result');
    result.innerHTML = "";
}
