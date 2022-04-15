// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriacas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

let adultos = inputAdultos.value;
let criancas = inputCriacas.value;
let duracao = inputDuracao.value;

let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
let qdtTotalCerveja = cervejaPP(duracao) * adultos;
let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

resultado.innerHTML = `<h2> Você vai precisar de:</h2><div class="result">
<img src="./image/carne.svg"/><p>${qdtTotalCarne/1000} kg de Carne</p>
</div>`
resultado.innerHTML += `<div class="result">
<img src="./image/cerveja.svg"/><p>${Math.ceil(qdtTotalCerveja/355)} Latas de Cerveja</p>
</div>`
resultado.innerHTML += `<div class="result">
<img src="./image/refri.svg"/<p>${Math.ceil(qdtTotalBebidas/2000)} Garrafas de Refrigerante</p>
<div>`

}

function carnePP (duracao) {
    let carne = 400;
    if(duracao >=6) {
        return  650;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {
    let carne = 400;
    if(duracao >=6) {
        return  2000;
    } else {
        return 1200;
    }
}

function bebidasPP (duracao) {
    let carne = 400;
    if(duracao >=6) {
        return  1500;
    } else {
        return 1000;
    }
}