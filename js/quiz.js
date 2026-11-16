function startQuiz() {
//let score = 0 przed pętlą, aby wynik za każdym razem sie nie zerował
let score = 0;
const liczba = questions.length;
const bladne = [];
for(let j=0;j<liczba;j++){
let question = questions[j]
let answer = prompt(question[0],'');
if (Number(answer) === question[1]){
if(answer === null || answer === ''){
alert('Błąd. Prawidłowa odpowiedź to '+question[1]);}
else{
alert('Prawidłowa odpowiedź!');
score++;
}
}
 else {
alert('Błąd. Prawidłowa odpowiedź to ' +question[1]);
bladne.push(question[0])
}
}
document.getElementById('wynik').append('Wynik '+score+'/'+questions.length);
for(let i=0;i<bladne.length;i++){
let nowy=document.createElement('li');
nowy.innerHTML=bladne[i];
document.getElementById('lis').append(nowy);
}
}

document.getElementById('startQuiz').addEventListener('click',startQuiz);

const questions = [
['Ile razy Faker wygrał Mistrzostwa Świata w League of legends (Worlds)?', 6],
['W krórym roku miała premierę Kraina Lodu?',2013],
['Które głodowe igrzyska odbywają się w pierwszej części Igrzysk Śmierci?',74],
['Ile przyjaciółek ma Twilight Sparkle?',5],
['I love you ...',3000]
];
