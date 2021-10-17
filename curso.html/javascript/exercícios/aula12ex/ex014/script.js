function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#472f16'
        // Bom Dia!
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ddcab2'
        //Boa tarde!
    }else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#05254e'
        //Boa noite!
    }

}