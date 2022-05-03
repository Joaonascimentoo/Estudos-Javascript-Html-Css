function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
       img.src = 'Manhã.png'
       document.body.style.background = '#f6d1a5' 
    }else if (hora >= 12 && hora <= 18){
       img.src = 'tarde.png'
       document.body.style.background = '#c47e66'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#0b4060'
    }
}
