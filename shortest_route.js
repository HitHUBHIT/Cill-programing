
// Funkcja oblicza odległość między dwoma punktami
function dlugosc(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Współrzędne punktów (A, B, C, D, E)
const punkty = [
    [1, 2], // A
    [3, 1], // B
    [3, 6], // C
    [6, 7], // D
    [5, 2]  // E
];

let start = 0; // Punkt startowy (indeks 0 to punkt A)
let odwiedzone = [start]; // Lista odwiedzonych punktów, zaczynając od punktu startowego
let dlugosc_trasy = 0; // Całkowita długość trasy

// Znajdowanie najkrótszej trasy
while (odwiedzone.length < punkty.length) {
    let ostatni = odwiedzone[odwiedzone.length - 1];
    let najblizszy = null;
    let najkrotsza_odleglosc = Infinity;

    // Szukamy najbliższego nieodwiedzonego punktu
    for (let i = 0; i < punkty.length; i++) {
        if (!odwiedzone.includes(i)) {
            let odleglosc = dlugosc(punkty[ostatni][0], punkty[ostatni][1], punkty[i][0], punkty[i][1]);
            if (odleglosc < najkrotsza_odleglosc) {
                najkrotsza_odleglosc = odleglosc;
                najblizszy = i;
            }
        }
    }

    // Dodajemy najbliższy punkt do trasy
    odwiedzone.push(najblizszy);
    dlugosc_trasy += najkrotsza_odleglosc;
}

// Powrót do punktu startowego
dlugosc_trasy += dlugosc(punkty[odwiedzone[odwiedzone.length - 1]][0], punkty[odwiedzone[odwiedzone.length - 1]][1], punkty[start][0], punkty[start][1]);
odwiedzone.push(start);

// Wyświetlenie wyniku
console.log("Trasa: " + odwiedzone.map(i => String.fromCharCode(65 + i)).join(" -> "));
console.log("Całkowita długość trasy: " + dlugosc_trasy.toFixed(2));
