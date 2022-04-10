# pc-builder-webpack

Aplikacja domyślnie została stworzona do skonfigurowania zestawu sprzętu, w celu lepszej organizacji np. zakupu danych elementów.
Domyślnie odnosi się do sprzętu PC, ale można ją dostosować do innych potrzeb.

Istotne funkcjonalności:
- zapisywanie danych w localStorage - po odświeżeniu strony dane takie jak zapisane kategorie i dodane pozycje w tabeli pozostają nienaruszone.
- podsumowanie kosztów ogólnych, lub kosztów danej kategorii.
- opcja edytowania dodanej pozycji - aby z niej skorzystać, należy kliknąć dwa razy w element tabeli, który chcemy zmienić.
- możliwość filtrowania po kategorii
- możliwość dodania nowej kategorii
- możliwość usunięcia starych kategorii
- dwie podpowiedzi dla użytkownika uruchamiane po najechaniu na ikonę 'i'


Aplikacja nie pozwala na:
- usunięcie kategorii, jeśli istnieją przedmioty posiadające tę kategorię
- dodanie kategorii bez nazwy
- wpisanie liter do pozycji "cena"
- dodanie przedmiotu, jeśli jakieś pole nie jest uzupełnione - puste pole są podświetlone na czerwono
- usunięcia kategorii "inne"



![preview image](preview.PNG?raw=true "Title")
