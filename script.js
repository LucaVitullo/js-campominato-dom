
/*creare una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range compreso tra 1 e 100
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

/*BONUS:
L'utente indica un livello di difficoltà, in base al livello scelto la griglia conterrà un range diverso:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49*/



/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/

let richiestaUtente =parseInt(prompt("richiesta difficolta 1,2,3"));
let rows =0;
let colums =0;

if(richiestaUtente == 1){
    rows = 10;
    colums=10;
}else if(richiestaUtente==2){
    rows=9;
    colums=9;
}else{
    rows=7;
    colums=7;
}

//creare in javascript una griglia 10x10

const grid = document.getElementById('grid');

//calcolo il totale delle celle da generare

const totalCells = colums * rows;

//console.log(totalCells);

//creo un ciclo per ogni cella della griglia

for(let i = 0; i<totalCells;i++){

    const cell = document.createElement('div');
    grid.appendChild(cell);

    if(richiestaUtente==1){
        cell.classList=('cell-100')
    }else if(richiestaUtente==2){
        cell.classList=('cell-81')
    }else{
        cell.classList=('cell-49')
    }

    cell.innerText=i+1;
    cell.addEventListener('click',function(event){
        cell.classList.toggle("bg-cyan")
    })
}
