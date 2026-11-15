const zespol = [
	['Siekierka', 'Barbara', '2', '21555@student.ans-elblag.pl', '21555'],
	['???', '???', '?', '???', '???']
];
const nazwiska = zespol[0][0] + ', ' + zespol[1][0]; 
document.getElementById('nazwisko').textContent = nazwiska; 

const imiona = zespol[0][1] + ', ' + zespol[1][1]; 
document.getElementById('imie').textContent = imiona;

const grupy = zespol[0][2] + ', ' + zespol[1][2]; 
document.getElementById('grupa').textContent = grupy;  

const emaile = zespol[0][3] + ', ' + zespol[1][3]; 
document.getElementById('email').textContent = emaile;

const indeksy = zespol[0][4] + ', ' + zespol[1][4]; 
document.getElementById('indeks').textContent = indeksy;  
