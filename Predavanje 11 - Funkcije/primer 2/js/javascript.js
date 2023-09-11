// funkcija za biranje random boje


let nasumicnaBoja;
const box = document.getElementById('box');
const spanRandomColor = document.getElementById('randomcolor');




function randomColor(){
    const naizmenicniBroj = Math.random(); // Uzima random broj od 0 do 1
    const hexBroj = Math.floor(naizmenicniBroj * 16777215);
    nasumicnaBoja = hexBroj.toString(16);
    spanRandomColor.innerText = `#${nasumicnaBoja}`; 
}
function setRandomColor(){
   box.style.backgroundColor = `#${nasumicnaBoja}`;
}

randomColor();