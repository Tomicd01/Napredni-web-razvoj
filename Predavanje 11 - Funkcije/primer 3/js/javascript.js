/**
 * Parametri funkcije
callback funkcije
anonimne funkcije
arrow funkcije

**/

// Parametri funkcije

function fn1(param1, param2){
    console.log(`Parametar 1: ${param1}`);
    console.log(`Parametar 2: ${param2}`);
}


fn1(1,2);

// Callback fja

function test(){
    console.log('setTimeout je pozvana');
}
function racunanje(callback){
    let zbir = 15 + 10;
    callback(zbir);

}
function prikaz(parametar){
    console.log(`Funkcija raacunanje je izvrsena tako sto je pozvala funkciju prikaz da prikaze ovaj tekst i prikaze broj ${parametar}`)
}


racunanje(prikaz);
// setTimeout(test, 3000);