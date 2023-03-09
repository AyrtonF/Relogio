const ponteiroHr = document.querySelector(".ponteiro.hr");
const ponteiroMin = document.querySelector(".ponteiro.min");
const ponteiroSec = document.querySelector(".ponteiro.sec");

const setRotacao = (element, rotacaoPorcentagem) => {
    element.style.setProperty("--rotacao", rotacaoPorcentagem * 360);
}

const setRelogio = () => {
    const atualData = new Date();

    const secPorcentagem = atualData.getSeconds() /60;
    const minPorcentagem = (secPorcentagem + atualData.getMinutes()) / 60;
    const hrPorcentagem = (minPorcentagem + atualData.getHours()) / 12;

setRotacao(ponteiroSec, secPorcentagem);
setRotacao(ponteiroMin, minPorcentagem);
setRotacao(ponteiroHr, hrPorcentagem);
}

setRelogio();

setInterval(setRelogio, 1000);