// Sortiranje niza imena po abecedi

let imena = ["Dušan", "Marko", "Bogdan", "Stefan", "luka"];

imena.sort(function(first, second) {
    const prvoIme = first.toLowerCase();
    const drugoIme = second.toLowerCase();

    if (prvoIme < drugoIme){
        return -1;
    }
    if (prvoIme > drugoIme){
        return 1;
    }
    
    console.log(prvoIme, drugoIme);
    return 0;

});

console.log(imena);


// sortiranje niza imena po dužini reči

let imena2 = ["Dušan", "Marko", "Bogdan", "Stefan", "luka", "Ma", "Lol"];

imena.sort(function(first, second) {
    const prvoIme = first.toLowerCase().length;
    const drugoIme = second.toLowerCase().length;

    if (prvoIme < drugoIme){
        return -1;
    }
    if (prvoIme > drugoIme){
        return 1;
    }
    
    console.log(prvoIme, drugoIme);
    return 0;

});

let object =[
    { name: "A", value: 10},
    { name: "AA", value: 5},
    { name: "AAA", value: 6},
    { name: "AAAA", value: 1},
     { name: "AAAAA", value: 15}

]


object.sort(function(first, second) {  // Sortiranje niza object prema vrednošću atributa value
    const prvaVrednost = first.value;
    const drugaVredonst = second.value;

    if (prvaVrednost < drugaVredonst){
        return -1;
    }
    if (prvaVrednost > drugaVredonst){
        return 1;
    }
    
    console.log(prvaVrednost, drugaVredonst);
    return 0;

});
console.log(object);

console.clear();

// Datumi
let datum = new Date();
let formatiranDatum = datum.toLocaleDateString();
console.log(datum.getTime() / 1000);

console.log(formatiranDatum);

console.clear();


let niz = [3, 5, 12, 59, 33, 4, 8];
let span1 = document.getElementById('niz');
span1.innerText = niz.toString();

function odaberiElement(){
    let nasumicniIndex = Math.floor(Math.random() * niz.length);
    let element = niz[nasumicniIndex];
    let span2 = document.getElementById('pozicija');
    let span3 = document.getElementById('element');
    span2.innerText = nasumicniIndex;
    span3.innerText = element;
}