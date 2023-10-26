// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (non usare funzioni predefinite di js).

const userWord = prompt("Inserisci una parola")
palindrom(userWord);

/***********************************************************************/
// FUNCTIONS

function palindrom(word) {
    let flag = false;
    let i = 0;
    let j = word.length - 1;

    if (word !== "") {
        while (i <= j && !flag) {
            i++;
            j--;
            if (word[i] !== word[j]) {
                flag = true;
            }
        }

        if (flag) {
            alert("NON Palindroma");
        } else {
            alert("Palindroma");
        }
    } else {
        alert("Vuota");
    }


}