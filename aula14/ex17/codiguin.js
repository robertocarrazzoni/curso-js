function tabuada() {
    let num = window.document.querySelector('input#txtn')
    let select = window.document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('Digita o número mula.')
    } else {
        let numero = Number(num.value)
        select.innerHTML = ''

        for (let contador = 1; contador <= 10; contador++) {

            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}`
            select.appendChild(item)
            
        }
    }
}