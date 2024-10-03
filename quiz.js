const submit = document.getElementById('submit-answer');

submit.addEventListener("click", checkAnswer);

function checkAnswer(){
    let feedBack = document.getElementById('feedback');
    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer){
        feedBack.innerText="Correct! Well done.";
    }else {
        feedBack.innerText="That's incorrect. Try again!";
    }
}
