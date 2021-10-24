let num = [2,6,9,4]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor é ${num[1]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    
console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos} `)
}
