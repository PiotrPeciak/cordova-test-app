# CordovaTest #

Moja testowa aplikacja w cordovie. Głównym celem projektu jest stworzenie sprawnej usługi działającej w tle (z użyciem AlarmManager).
Aplikacja ta raczej nigdy nie doczeka się wersji finalnej. Jej celem jest zbieranie ciekawych przykładów i rozwiązań. Może posłużyć jako źródło nauki czy też podstawa do tworzenia innych, nowych i lepszych aplikacji.

### Start ###

Przygotowano skrypt do budowy aplikacji (usuwa platform i buduje na nowo)
wystarczy z wiersza poleceń wywołać skrypt `build.bat`

Zawsze można sobie alternatywnie wywołać cordova build

### Uruchamianie ###

Do uruchomienia aplikacji również przygotowano skrypt `.bat`. Uruchamia on emulator a także przekierowywuje strumień Loga do pliku log.txt
`run.bat`

### Plany rozwoju? ###

* Główny temat czyli usługa działająca w tle
* Powiadomienia generowane przez usługę odbierane z serwera
* Rozpoznawanie czy aplikacja jest uruchomiona czy nie
* Inne ciekawe rzeczy do testowania na Cordovie