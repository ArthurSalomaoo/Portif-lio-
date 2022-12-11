let chk = document.querySelector("#checkbox")
let estilo = document.querySelector("#estilo")


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

