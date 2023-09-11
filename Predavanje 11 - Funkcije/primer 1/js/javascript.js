// PRIMER 1

function nazivFunkcije (parametri){
    //naredbe 
}

function zbir(a,b){
    zbir = a + b;
    console.log(zbir);
}

zbir(6,4);

function zbirReturn(c,d){
    let zbir = c + d;
    return zbir;
}

let resenje = 5 * zbirReturn(2,3);
console.log(resenje);

// PRIMER 2
console.clear;
let informacije = ["Dušan", "Tomić", 100, "6/9/2023", 1548721321848];

let priprema = {
    imeiprezime: "",
    brojBodova: 0,
    datumPolaganja: "",
    regBroj: null
};




const poruka = document.getElementById('poruka');

function parse() {
    priprema.imeiprezime = `${informacije[0]} ${informacije[1]}`;
    priprema.brojBodova = informacije[2];
    priprema.datumPolaganja = informacije[3];
    priprema.regBroj = informacije[4];


    poruka.innerText = "Vaši podaci su spremni za prikaz."
}

function print() {
    const span1 = document.getElementById('imeiprezime');
    span1.innerText = priprema.imeiprezime;
    const span2 = document.getElementById('brojbodova');
    span2.innerText = priprema.brojBodova;
    const span3 = document.getElementById('datumpolaganja');
    span3.innerText = priprema.datumPolaganja;
    const span4 = document.getElementById('regbroj');
    span4.innerText = priprema.regBroj;

    poruka.innerText = 'Podaci prikazani.'
}
// parse();
// print();
