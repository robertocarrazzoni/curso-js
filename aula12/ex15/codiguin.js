function verificar() {
        var data = new Date()
        var atual = data.getFullYear()
        var ano = window.document.getElementById('ano') 
        var res = window.document.querySelector('div#res')
    
      if (ano.value.length <= 3 || Number(ano.value) > atual) {
          alert('Erro! Verifique os dados e tente novamente.')
      } else {
          var sex = document.getElementsByName('radsex')
          var idade = atual - Number(ano.value)
          var genero = ''
          var img = document.createElement('img')
          img.setAttribute('id','foto')
          if (sex[0].checked) {
          genero = 'Homem'
          if (idade >=0 && idade < 12) {
              // Criança
              img.setAttribute('src', 'criança-masculino.png')
          } else if (idade < 21) {
               // Jovem
               img.setAttribute('src', 'jovem-masculino.png')
          } else if (idade < 50 ) {
              //Adulto
              img.setAttribute('src', 'homem.png')
          } else {
              //velho
              img.setAttribute('src', 'velho.png')
          }
          } else if (sex[1].checked) {
              genero = 'Mulher'
              if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'criança-feminino.png')
            } else if (idade < 21) {
                 // Jovem
                 img.setAttribute('src', 'jovem-feminino.png')
            } else if (idade < 50 ) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //velho
                img.setAttribute('src', 'velha.png')
            }
          }
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos  ${genero} com ${idade} anos`
          res.appendChild(img) 
      }
}