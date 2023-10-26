### PROBLEMA
**L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.**

### DATI
INPUT: pari o dispari
INPUT: numero

### LOGICA
- Viene create la funzione per la generazione di un numero randomico;
- Viene creata la funzione che dato un numero come parametro:
    - SE il numero è divisibile per 2 ritorna "even"
    - ALTRIMENTI ritorna "odd"
- Si chiede all'utente di inserire la stringa "even" oppure "odd" e viene controllato se ha scritto effettivamente "even" o "odd" se no si richiede;
- Si chiede all'utente di inserire un numero da 1 a 5 e viene controllato se l'utente ha scritto effettivamente un numero e se questo numero è tra 1 e 5 se no viene chiesto di nuovo;
- Viene estratto un numero per il pc da  1 a  5 tramite la funzione del numero randomico;
- Viene fatta la somma dei due numeri;
- Viene passata la somma come parametro alla funzione che restutuisce "even" o "odd";
    - SE la scelta dell'utente è uguale al risultato della funzione allora stampa a schermo al scritta "You Win";
    - ALTRIMENTI stampa a schermo la scritta "You lose"



