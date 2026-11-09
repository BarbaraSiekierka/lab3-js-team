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
