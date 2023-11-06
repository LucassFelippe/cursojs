function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançahomem.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovemhomem.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'homemvelho.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançamulher.jpg')
            }else if(idade < 21){
                //jovem
               img.setAttribute('src', 'jovemmulher.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'mulhervelha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}