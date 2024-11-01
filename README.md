# Oddaj Rzeczy


## Wprowadzenie

Witam w moim projekcie **Oddaj Rzeczy**, stworzonym w ramach modułu **Portfoliolab**. Celem tego projektu jest umożliwienie użytkownikom oddania niepotrzebnych rzeczy zaufanym instytucjom charytatywnym. Strona internetowa oferuje prosty formularz, który znacząco ułatwia proces przekazywania rzeczy.

## Opis Projektu

**Oddaj Rzeczy** to aplikacja webowa zaprojektowana, aby wspierać ludzi w oddawaniu niepotrzebnych przedmiotów. Dzięki stronie każdy może szybko i łatwo znaleźć instytucje, które potrzebują darowizn, oraz zorganizować przekazanie rzeczy.

## Funkcjonalności

- **Tworzenie nowego użytkownika**: Użytkownicy mogą założyć nowe konto, aby korzystać z funkcjonalności strony.
- **Logowanie**: Zarejestrowani użytkownicy mogą się zalogować na swoje konto.
- **Wylogowanie**: Użytkownicy mogą się wylogować ze swojego konta.
- **Oddawanie rzeczy**: Formularz umożliwiający użytkownikom oddanie rzeczy zaufanym instytucjom.
  - **Wybór rzeczy do oddania**: Użytkownicy mogą wybrać, jakie rzeczy chcą oddać.
  - **Wybór instytucji**: Użytkownicy mogą wybrać, komu chcą przekazać swoje rzeczy.
- **Formularz kontaktowy**: Umożliwia użytkownikom kontakt z zespołem wsparcia.
- **Paginacja**: Ułatwia nawigację po stronie, dzieląc treści na mniejsze części.
- **Widok mobilny**: Responsywna strona dostosowana do urządzeń mobilnych.

## Technologie

Projekt został zbudowany z wykorzystaniem następujących technologii:

- **React**: Biblioteka do budowy interfejsów użytkownika.
- **TypeScript**: Superset JavaScriptu, który zapewnia statyczne typowanie, co poprawia niezawodność i stabilność aplikacji.
- **React Router**: Narzędzie do zarządzania routingiem w aplikacji React.
- **React Scroll**: Biblioteka umożliwiająca płynne przewijanie w aplikacjach React.
- **Sass**: Preprocesor CSS, który pozwala na bardziej zorganizowane i efektywne pisanie stylów.
- **easy-peasy**: Biblioteka do zarządzania stanem w aplikacjach React.
- **supabase**: Backend-as-a-Service (BaaS), który zapewnia funkcjonalności uwierzytelniania urzytkownika.

### Instalacja

Aby zainstalować projekt, wykonaj poniższe kroki:

1. **Sklonuj repozytorium:**
    ```sh
    git clone https://github.com/ozematt/Oddaj-Rzeczy.git
    ```
2. **Przejdź do katalogu projektu:**
    ```sh
    cd Oddaj-Rzeczy
    ```
3. **Zainstaluj zależności:**
   Upewnij się, że masz zainstalowany Node.js i npm. Następnie uruchom poniższą komendę, aby zainstalować wszystkie zależności projektu.
    ```sh
    npm install
    ```
4. **Konfiguracja Supabase:**
   - Utwórz konto i projekt na Supabase.
   - Skopiuj klucze API i URL projektu z dashboardu Supabase.
   - Utwórz plik .env w katalogu projektu i dodaj następujące zmienne środowiskowe (zawartość pliku):
   
    ```sh

     VITE_SUPABASE_URL=YOUR_SUPABASE_URL
     VITE_SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY

    ```
5. **Uruchom aplikacje:**
   ```sh
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem: http://localhost:5173/


## Podsumowanie
Oddaj Rzeczy to intuicyjna i przyjazna użytkownikowi aplikacja webowa, która ułatwia proces oddawania niepotrzebnych rzeczy potrzebującym instytucjom. Dzięki zastosowanym technologiom i prostemu formularzowi, każdy użytkownik może szybko i efektywnie wesprzeć osoby potrzebujące. Strona jest w pełni responsywna, zawiera paginację oraz formularz kontaktowy, aby jeszcze bardziej ułatwić użytkowanie. Dziękujemy za zainteresowanie naszym projektem i zachęcamy do korzystania z aplikacji!

