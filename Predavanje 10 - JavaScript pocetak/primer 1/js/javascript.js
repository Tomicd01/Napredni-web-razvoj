// js kod primer 1

// selektovanje h2 elementa na osnovu id

let h2 = document.getElementById('title');
h2.style.color = 'red';

console.log(h2);

let automobil = {
    godinaProizvodnje: 2018,
    model: '',
    proizvodjac: '',
    boja: ''

};

let osoba = {
    ime: 'Dušan',
    prezime: 'Tomić',
    godinaRodjenja: '2001.',
    hobi: 'Košarka, kodiranje',
    omiljenaBoja: 'plava'
};







automobil.model = 'X5';
automobil.proizvodjac = 'BMW';
automobil.boja = 'red';

let span1 = document.getElementById('godinaProizvodnje');
let span2 = document.getElementById('proizvodjac');
let span3 = document.getElementById('model');
let span4 = document.getElementById('boja');

span1.innerText = automobil.godinaProizvodnje;
span2.innerText = automobil.proizvodjac;
span3.innerText = automobil.model;
span4.innerText = automobil.boja;

let span5 = document.getElementById('ime');
let span6 = document.getElementById('prezime');
let span7 = document.getElementById('godinarodjenja');
let span8 = document.getElementById('hobi');
let span9 = document.getElementById('omiljenaboja');

span5.innerText = osoba.ime;
span6.innerText = osoba.prezime;
span7.innerText = osoba.godinaRodjenja;
span8.innerText = osoba.hobi;
span9.innerText = osoba.omiljenaBoja;

// Nizovi

