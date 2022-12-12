const chk = document.querySelector("#checkbox")
const estilo = document.querySelector("#estilo")


chk.addEventListener('change', () => {
    console.log(chk.checked)
    if(chk.checked) {
        estilo.setAttribute('href', 'estilo/preto.css')
        document.getElementById('historicoimg').setAttribute('src', 'imagens/historicoBranco.svg')
    } else {
        estilo.setAttribute('href', 'estilo/style.css')
        document.getElementById('historicoimg').setAttribute('src', 'imagens/historico.svg')
    }
})


function inserir(num) {

    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado + num

}

function calcular() {
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = '';
}

function apagar() {
    document.getElementById('resultado').innerHTML = resultado.textContent.substring(0, resultado.textContent.length -1)
}