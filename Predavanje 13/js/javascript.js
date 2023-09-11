const inputPrveVrednosti = document.getElementById('prva_vrednost');
const inputDrugeVrednosti = document.getElementById('druga_vrednost');
const inputTreceVrednosti = document.getElementById('treca_vrednost');
const spanRezultat = document.getElementById('span2');

function racSrVr(a, b, c, callback){
    let vrednost = (a + b + c) / 3;

    callback(vrednost);
}

function odstampajPodatke(rezultat){
    spanRezultat.innerText = rezultat;
}



function sakupiPodatke(){
    const a = parseInt(inputPrveVrednosti.value);
    const b = parseInt(inputDrugeVrednosti.value);
    const c = parseInt(inputTreceVrednosti.value);

    racSrVr(a , b, c, odstampajPodatke);
}