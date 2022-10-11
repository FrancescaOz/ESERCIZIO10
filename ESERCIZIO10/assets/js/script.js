var nome = 'Aldo';
let cliente = 'cliente';
const numero = 3.14;

//1
document.getElementById('concatena').innerHTML = ` ${nome}, ${cliente}, ${numero}`;
//document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + numero;

//2

var concatenazione = ` ${nome}, ${cliente}, ${numero}`;
document.getElementById('concatena2').innerHTML = concatenazione;

//3.1

var persona = 'Mario';
document.getElementById('var').innerHTML = persona; //nelle () metti l'ID

{
    let persona = 'Carla';
    document.getElementById('let').innerHTML = persona;

}

document.getElementById('final').innerHTML = persona;

//3.2

var persona = 'Mario';
document.getElementById('let2').innerHTML = persona; //nelle () metti l'ID

{
    let persona = 'Carla';
    document.getElementById('let3').innerHTML = persona;
    document.getElementById('final2').innerHTML = persona;
}

//4.1

var valore = 15; //valore iniziale
document.getElementById('iniziale').innerHTML += valore;

document.getElementById('valore1').innerHTML += `${(valore + 15)}, ${(++valore) + 15}`;

//4.2

document.getElementById('valore2').innerHTML += `${(valore - 11)}, ${(--valore) - 11}`;

//4.3

document.getElementById('valore3').innerHTML += `${valore*3}`;

//4.4

document.getElementById('valore4').innerHTML += `${valore/3}`;

//4.5
document.getElementById('valore5').innerHTML += `${valore} è un numero`;











