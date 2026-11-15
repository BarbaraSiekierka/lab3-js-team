function startQuiz() {
let score = 0;
const question = questions[0];
const answer = prompt(question[0],'');
if (Number(answer) === question[1]){
alert('Prawidłowa odpowiedź!');
score++;
} else {
alert('Błąd. Prawidłowa odpowiedź to ' +question[1]);
}
}
document.getElementById('startQuiz').addEventListener('click',startQuiz);

const questions = [
['Ile razy Faker wygrał Mistrzostwa Świata w League of legends (Worlds)?', 6],
['W krórym roku miała premierę Kraina Lodu?',2013],
['Które głodowe igrzyska odbywają się w pierwszej części Igrzysk Śmierci?',74]
];
