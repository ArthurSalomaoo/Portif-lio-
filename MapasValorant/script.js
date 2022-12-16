function comecar() {
    let escolhido = parseInt(Math.random() * (8 - -1) + -1)
    console.log(escolhido)
    let imgEscolhida = document.querySelectorAll('img')[escolhido]
    console.log(imgEscolhida)

    let i = 0
    let i2 = 0
    let rodou = 0
    let myInterval = setInterval(() => {
        document.querySelectorAll('img')[7].style = 'box-shadow: 0;'
        
        if(i == 8){ 
            i = 0
            rodou++
        }
        i2--
        if(i <= 0) {
            i2 = 0
        }   

        document.querySelectorAll('img')[i2].style = 'box-shadow: 0;'
        document.querySelectorAll('img')[i].style = 'box-shadow: 0 0 10px 6px #04D976;'
    
        if(rodou == 2 && i == escolhido) {
                imgEscolhida.style = `    
            position: relative;
            display: block;
            margin: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);`
            clearInterval(myInterval)
        }
        i++
        i2 = i

        console.log(i)
        
    }, escolhido + 500 );
}