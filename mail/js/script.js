//chiedi all'utente la sua mail
//crea una lista di chi puo accedere
//controlla che l'email dell'utente sia nella lista che hai creato
//SE
// e nella lista scrivi si puoi accedere
//ALTRIMENTI
// scrivi scusa non hai accesso 

const userMail = prompt(" qual'e' la tua email?");

const mailList = ['bianchi@mail.com', 'rossi@mail.com', 'verdi@mail.com'];
console.log(mailList);

let youHaveAccess = false;

for (let i = 0; i < mailList.length; i++){
    const currentMail = mailList[i];
    // console.log(currentMail);
    if (currentMail.toLowerCase() === userMail.toLowerCase()) {
        youHaveAccess = true;
    }
    
}

let result = "Sorry try again"
if (youHaveAccess === true) {
    result = "Yeah!! you have access to this content";
} 

const containerElem = document.getElementById("container");
containerElem.innerHTML = result