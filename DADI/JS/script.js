//Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
//Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).



// crea una lista di mail invitati
const invitedMail = ["pippo@gmail.com", "carlo@gmail.com", "federica@gmail.com", "camilla@gmail.com", "laura@gmail.com", "sergio@gmail.com",]

// chiedi all'utente di inserire la sua mail
const userMail = prompt("Inserisci la tua mail")

// variabile che segnala se la mail è stata trovata
let found = false;

// ciclo per controllare se la mail è presente nella lista degli invitati
for (let i = 0; i < invitedMail.length; i++) {
    if (invitedMail[i] === userMail) {
        console.log("Benvenuto alla festa");
        found = true; //segnala che la mail utente si trova nella lista
        break; //esce dal ciclo
    } 
}

//verifica se la mail non è stata trovata nella lista
if (!found) {
    console.log("Mi spiace ma la tua mail non è presente nell'elenco degli invitati");
    
}
