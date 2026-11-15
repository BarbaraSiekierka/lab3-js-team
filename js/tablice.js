const tablica = [
	'Thunderbolts*',
	'Merida Waleczna',
	'Kpop Demon Hunters',
	'Rekiny w Sekwanie',
	'Strażnicy Galaktyki'
];

tablica[tablica.length - 1] = 'Spider-Man: Całkiem Nowy Dzień';
tablica[5]='Demon Slayer: Infinity Castle';
console.log(tablica.length)
tablica[tablica.length]='Kraina Lodu';
console.log(tablica.length)
tablica.push('Igrzyska Śmierci: W pierścieniu ognia', 'Harry Potter i czara ognia', 'Wielka Szóstka', 'Smerfy 2');
console.log(tablica.length)
//tablica[20]='daleko';
//console.log(tablica.length)
//console.log(tablica[15])
//tablica.length wyświetla liczbę 21, a tablica[15] jest undefined
const nowaDlugosc=tablica.unshift('Avengers: Doomsday', 'Diuna: Część druga');
console.log(nowaDlugosc);
document.write('<p>Tablica: ' + tablica.join(', '));
document.write(' (elementów: ' +tablica.length + ')</p>');
document.write('<p> Sprawdzenie czy element Thunderbolts* znajduje się w tablicy: '+tablica.includes('Thunderbolts*'));
document.write(' i na jakiej pozycji się znajduje: ' +tablica.indexOf('Thunderbolts*')+'</p>');

document.write('<p><strong>Nowa tablica:</strong></p>');
const nowaTablica = [
	'Harry Potter i Kamień Filozoficzny',
	'Chłopi',
	'Lalka',
	'Dziady cz III'
];
document.write('<p>Pierwszy element to <strong>');
document.write(nowaTablica[0] + '</strong></p>');
document.write('<p>Ostatni element to <strong>');
document.write(nowaTablica[nowaTablica.length-1]);
nowaTablica.unshift('Katedra');
const removedItem1 = nowaTablica.pop();
const removedItem2 = nowaTablica.shift();
document.write('<p>Pierwszy usuniety element metodą pop(): <strong>');
document.write(removedItem1 + '</strong></p>');
document.write('<p>Drugi usuniety element metodą shift(): <strong>');
document.write(removedItem2 + '</strong></p>');
document.write('<p> Nowa tablica po usunięciu elementów:'+ nowaTablica.join(',') + '</p>');

document.write('<p><strong>Tablica tablic:</strong></p>');
const oceny = [
	['JavaScript',5],
	['Git',4],
	['HTML',5]
];
console.log(oceny[1]);		//['Git',4]
console.log(oceny[1][0]); 	//'Git' - pierwszy indeks: który wiersz,
				//drugi: która kolumna
console.log(oceny[1][1]);	//4
document.write('<p>Drugi element: ');
document.write('nazwa: <strong>');
document.write(oceny[1][0] + '</strong>');
document.write(' ,ocena: <strong>');
document.write(oceny[1][1] + '</strong></p>');


