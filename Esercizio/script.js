/* Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere,
Età del passeggero,
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole. */

//Selezione valori Input
const nomeUser = document.querySelector(".nomeUser")
const cognomeUser = document.querySelector(".cognomeUser")
const kmUser = document.querySelector(".kmUser")
const ageUser = document.querySelector(".etàUser")
const nuovoBiglietto = document.querySelector(".boxOutput")

const mioForm = document.querySelector(".mioForm")
console.log(mioForm);


//Selezione Output
const outputNominativo = document.querySelector(".outputNominativo")
const outputKm = document.querySelector(".outputKm")
const outputAge = document.querySelector(".outputEtà")
const outputPrezzobiglietto = document.querySelector(".prezzoBiglietto")
const outpuScontoApplicato = document.querySelector(".scontoApplicato")
let bigliettoNum = document.querySelector(".nBiglietto")

let totBiglietto 

mioForm.addEventListener("submit",
    function (evento) {
        evento.preventDefault();
        //Sposto ogni valore di Input in Output (Biglietto)
        outputNominativo.innerHTML = `${nomeUser.value} ${cognomeUser.value}`
        outputKm.innerHTML = `Km richiesti: ${kmUser.value}`
        outputAge.innerHTML ="Età: " + ageUser.value 
        /* Dichiaro la funzione */
        totBiglietto = calcoloPrezzo(kmUser.value, ageUser.value)
        outputPrezzobiglietto.innerHTML = `Il prezzo del biglietto è di: ${totBiglietto} €` 
        /* Generatore numero biglietto */
        let numeroRandom = Math.floor((Math.random()* 10000 - 1000 + 1) +1000)
        bigliettoNum.innerHTML = `Biglietto n: ${numeroRandom}`

        /* Dischiarazione sconto applicato */
        if (ageUser.value < 18) {
            outpuScontoApplicato.innerHTML = `Sconto minorenni = 20%`
        } else if (ageUser.value >= 65){
            outpuScontoApplicato.innerHTML = `Sconto over 65 = 40%` 
        } else {
            outpuScontoApplicato.innerHTML = `` 
        }
        nuovoBiglietto.classList.remove("none")
}
)


/* Funzione per calcolo prezzo biglietto */
function calcoloPrezzo (kmUser,ageUser) {
    const prezzo = 0.21
    const prezzoPieno = kmUser * prezzo
    if (ageUser < 18) {
        totBiglietto = prezzoPieno - ((kmUser * prezzo * 20) / 100)
        console.log(totBiglietto)
    }
    else if (ageUser > 65) {
        totBiglietto = prezzoPieno -  ((kmUser * prezzo * 40) / 100)
        console.log = totBiglietto
    } else {
        totBiglietto = prezzoPieno
        console.log = totBiglietto
    }

    return totBiglietto.toFixed(2)
}
