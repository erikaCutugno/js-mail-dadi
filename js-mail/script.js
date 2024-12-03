const mail = ["marco.scarpaci@gmail.com", "maria.agnello@gmail.com", "giada-firenze@libero.it"]

const userMail = prompt("Inserisci la tua mail") 

let isMailFind = false;

for (let i = 0; i < mail.length; i++){
    if(mail[i] === userMail){
        isMailFind= true
        console.log(mail)
        console.log(userMail)
    }
}
if(isMailFind){
    alert("Puoi accedere")
} else {
    alert("Non puoi accedere")
}