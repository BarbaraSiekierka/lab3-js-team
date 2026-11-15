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
