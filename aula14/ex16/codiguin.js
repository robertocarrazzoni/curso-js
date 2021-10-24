function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossivel contar'
    } else {

    resultado.innerHTML = 'Contando: '    
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    
    var c = i
    
    if (p <= 0) {
        alert('Passo invalido, considerando passo = 1.')
        p = 1
    }

    

    if (c <= f) {
        while (c <= f) {
        resultado.innerHTML += `${c} `
        c += p
    }
    } else {
        while (c >= f) {
        resultado.innerHTML += `${c} `
        c -= p
    }
    }
    
    }
}