let broj = 10;

let brojKaoString = broj.toString();
document.write(`Broj ${broj} predstavljen kao string: `, brojKaoString);
console.log(broj,brojKaoString);

let decimalnibroj = 1.865998;
let zaokruzenBroj = decimalnibroj.toFixed(2);

document.write(`<br> Broj ${decimalnibroj} zaokružen na dve decimale iznosi : ${zaokruzenBroj}`);


let randomBroj = parseInt('b', 16);
console.log(randomBroj);

let boja1;
let boja2;
let boja3;



function onClick(){
    
    boja1 = parseInt(Math.random() * 256);
    boja2 = parseInt(Math.random() * 256);
    boja3 = parseInt(Math.random() * 256);


    boja = `#${boja1.toString(16)}${boja2.toString(16)}${boja3.toString(16)}`;
    
    document.querySelector('body').style.backgroundColor = boja;
}
document.write('<br><button onclick="onClick()">Postavi pozadinu</button>');