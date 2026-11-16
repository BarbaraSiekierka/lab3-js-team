const sekcja = document.getElementById('projekt1');
// wszystkie formularze na stronie
const formularze = document.forms.length;
console.log(formularze);
// wszystkie obrazki na stronie
const obrazki = document.images.length;
console.log(obrazki);
// wszystkie odnośniki na stronie
const odnosniki = document.links.length;
console.log(odnosniki);
// wszystkie akapity w sekcji projekt1
const akapity = document.querySelectorAll('#projekt1 p');
console.log(akapity.length);
document.getElementById('licznik').append(
formularze+": liczba formularzy na stronie; "+
obrazki+": liczba obrazków na stronie; "+
odnosniki+": liczba odnośników na stronie; "+
akapity.length+": liczba akapitów w sekcji projekt1 "
);
const naglowek=document.querySelector('#dom h3')
naglowek.textContent = 'Zadanie 4- elementy ze strony';
naglowek.classList.add('text-success');
const nowy1=document.createElement('li');
nowy1.innerHTML=formularze+": liczba formularzy na stronie";
document.getElementById('lista').append(nowy1);
const nowy2=document.createElement('li');
nowy2.innerHTML=obrazki+": liczba obrazków na stronie";
document.getElementById('lista').append(nowy2);
const nowy3=document.createElement('li');
nowy3.innerHTML=akapity.length+": liczba akapitów w sekcji projekt1";
document.getElementById('lista').append(nowy3);
//po usunięciu defer zmieniła się liczba formularzy i akapitów w projekcie,
//ponieważ parser się zatrzymał na skrypcie na bloku #dom, a formularz kontaktowy
//leży w dokumencie poniżej tego bloki

//zadanie 5
let i = 0;
let polowa = Math.floor(tablica.length/2);
let wynik_1 = "Wyświetlenie pierwszej połowy tablicy filmów (pętla while): ";
while(i<polowa){
	wynik_1 += tablica[i]+", ";
	i++; 
}

document.getElementById("while").textContent = wynik_1;

let wynik_2 = "Wyświetlenie drugiej połowy tablicy filmów (pętla for): ";
for(let i=polowa; i<tablica.length; i++){
 	wynik_2 += tablica[i]+", ";
}
document.getElementById("for").textContent = wynik_2;
