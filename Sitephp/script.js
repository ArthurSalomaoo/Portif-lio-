function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/menuFechar.svg";
    }
}

function copiar() {
    const email = document.getElementById('email')
    
    navigator.clipboard.writeText(email.innerHTML)
}