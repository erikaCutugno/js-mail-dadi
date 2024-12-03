// Far generare un numero da 1 a 6 al gicatore
let userNumb;

do {
    userNumb = parseFloat(prompt("Inserisci un numero da 1 a 6"))
}
while(isNaN(userNumb) || userNumb > 6 || userNumb < 1)  
console.log(`Numero utente ${userNumb}`)
// Far generare un numero da 1 a 6 al computer

let computerNumb = Math.floor(Math.random() * 6) + 1;
console.log(`Numero computer ${computerNumb}`)

// Verifico il vincitore in base a chi fa il punteggio più alto

if(userNumb > computerNumb){
    alert("Hai vinto")
} else if (userNumb < computerNumb){
    alert("Hai perso")
} else {
    alert("Pareggio")
}