function carregar() {
    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('msg')
    var agora = new Date()    
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 8 && hora < 12) {
        img.src = 'manha.png'
        
    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.png'
        
    } else {
        img.src = 'noite.png'
        document.body.style.background = "black"
    }
}