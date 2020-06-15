var prezzoFinale

// chiedere all'utente il numero di km che vuole percorrere
var km = parseInt(prompt("Quanti km vuoi percorrere?"), 10);

// chiedere all'utente l'età del passeggero
var eta = parseInt(prompt("Quanti anni hai?"), 10);

// moltiplico il numero di km per il costo/km

var prezzoKm = km * 0.21;
console.log(prezzoKm);

// aggiungo gli sconti
if (eta < 18) {
  prezzoFinale = (prezzoKm / 100) * 80;
} else if (eta > 65) {
  prezzoFinale = (prezzoKm / 100) * 60;
} else {
  prezzoFinale = prezzoKm;
}

document.getElementById('ticket').innerHTML = "Il tuo biglietto costa " + Math.round((prezzoFinale + 0.00001) * 100) / 100 + "€ invece che " + prezzoKm + "€";
