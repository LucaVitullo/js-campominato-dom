/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
3- L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
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

//creo array bombe
const positionBombs = [];
let bombsToCreate=16;
let points= 0;
//creo un ciclo per ogni cella della griglia

for(let i = 0; i<totalCells;i++){
    const cell = createCell();
    grid.appendChild(cell);

    if(richiestaUtente==1){
        cell.classList=('cell-100')
    }else if(richiestaUtente==2){
        cell.classList=('cell-81')
    }else{
        cell.classList=('cell-49')
    }

    cell.innerText=i+1;
    
    cell.addEventListener('click', () => {
        const isBomb = positionBombs.includes(i);
        if (isBomb) {
            cell.classList.add('bg-red');
            grid.classList.add('game-over');
            showScore(points);
        
        } else {
            cell.classList.add('bg-cyan');
            cell.classList.toggle('block-click');
            points+=1;
            console.log(points);
           

        }

    });
}
function showScore(points){
    alert('Bravo! hai fatto ' + points + ' punti!');
}


//creo una funzione dove genero le celle
function createCell() {
    const item = document.createElement('div');
    item.classList.add('cell');
    return item;
}

//creo una funzione dove genero un numero casuale
function generateRandomNumber(min, max) {

    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}


//console.log(generateRandomNumber(1,16));


//creo un ciclo per le bombe
for(let i=1; positionBombs.length <16; i++){
    let bombs = numeroUnivoco(1, totalCells, positionBombs);
    positionBombs.push(bombs);
}
console.log(positionBombs);

//creo una funzione per il numero univoco
function numeroUnivoco (min, max, reused){
    let numeroUnivoco = generateRandomNumber(min, max);
    while(reused.includes(numeroUnivoco)){
        numeroUnivoco = generateRandomNumber(min, max);
    }
    return numeroUnivoco;
}


