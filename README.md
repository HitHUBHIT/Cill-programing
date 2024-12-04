
# Problem najkrótszej trasy

Ten program w JavaScript rozwiązuje problem najkrótszej trasy dla danego zestawu punktów. 
Znajduje najkrótszą trasę przechodzącą przez wszystkie punkty, zaczynając i kończąc w punkcie początkowym.

## Wyjaśnienie kroków

### Funkcja `dlugosc(x1, y1, x2, y2)`
Oblicza odległość między dwoma punktami na płaszczyźnie korzystając ze wzoru Pitagorasa.

### Dane wejściowe
Tablica `punkty` zawiera współrzędne wszystkich punktów, np.:
```javascript
const punkty = [
    [1, 2], // A
    [3, 1], // B
    [3, 6], // C
    [6, 7], // D
    [5, 2]  // E
];
```

### Algorytm
1. Start w punkcie początkowym (domyślnie A).
2. Znalezienie najbliższego nieodwiedzonego punktu.
3. Dodanie punktu do listy odwiedzonych.
4. Powrót do punktu startowego po odwiedzeniu wszystkich punktów.
5. Wyświetlenie trasy i całkowitej długości.

### Wynik
Program wyświetla trasę w formacie czytelnym dla użytkownika (np. `A -> B -> C`) oraz długość trasy.

## Uruchamianie
Skopiuj kod z pliku `shortest_route.js` i uruchom go w dowolnym środowisku JavaScript (np. przeglądarce lub Node.js).
