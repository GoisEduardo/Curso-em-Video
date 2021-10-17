function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS DIGITADOS E TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.background = '#311ED9'
            if (idade >=0 && idade < 3) {
                img.setAttribute('src', 'bebe-m.png')
                //bebê
            } else if (idade >=3 && idade < 10){
                img.setAttribute('src', 'crianca-m.png')
                //crianca
            } else if (/*idade >= 10 &&*/ idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
                //jovem
            } else if (/*idade >= 21 && */idade < 50) {
                img.setAttribute('src', 'adulto-m.png')                
                //adulto
            } else {
                img.setAttribute('src', 'idoso-m.png')
                //idoso
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.background = '#D9236C'
            if (idade >=0 && idade < 3) {
                img.setAttribute('src', 'bebe-f.png')                 
                //bebê
            } else if (idade >=3 && idade < 10){
                img.setAttribute('src', 'crianca-f.png')
                //crianca
            } else if (/*idade >= 10 &&*/ idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
                //jovem
            } else if (/*idade >= 21 && */idade < 50) {
                img.setAttribute('src', 'adulto-f.png')
                //adulto
            } else {
                img.setAttribute('src', 'idoso-f.png')
                //idoso
            }
        }
        res. style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }




}