function carregar() {
    var imagem = document.getElementById('foto');
    var msg = document.getElementById('msg');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são exatamente ${hora} horas.`;
    
    if (hora >= 6 && hora < 12) {
        // Manhã
        msg.innerHTML += ' Bom dia!';
        imagem.src = 'manhã.png'; // Altere para o caminho correto da imagem da manhã
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        msg.innerHTML += ' Boa tarde!';
        imagem.src = 'tarde.png'; // Altere para o caminho correto da imagem da tarde
    } else {
        // Noite
        msg.innerHTML += ' Boa noite!';
        imagem.src = 'noite.png'; // Altere para o caminho correto da imagem da noite
    }
}

