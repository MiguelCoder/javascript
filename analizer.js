let numero = document.querySelector('select#flista')
let lista = document.querySelector('input#fnumber')
let resultado = []
let result = document.querySelector('div#result')

function adicionar() {
    if (lista.value.length == 0) {
        alert('Por favor, digite um número.')

    } else if (lista.value <= 0 || lista.value > 100) {
        alert('Por favor digite um número entre 1 a 100.')

    } else if (resultado.indexOf(Number(lista.value)) == -1) {
        resultado.push(Number(lista.value))
        let string = document.createElement('option')
        string.text = `o número ${lista.value} foi adicionado.`
        numero.appendChild(string)
        result.innerHTML = ''

    } else {
        alert(`O número ${lista.value} já está adicionado.`)
    }
    lista.value = ''
    lista.focus()
}

function submit() {
    if (resultado.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        let total = resultado.length
        let max = resultado[0]
        let min = resultado[0]
        let soma = 0
        for (i in resultado) {
            soma += resultado[i]
            if (resultado[i] > max) {
                max = resultado[i]
            } else if (resultado[i] < min) {
                min = resultado[i]
            }
        }
        let mean = soma / total

        result.innerHTML = ''
        result.innerHTML += `<p>Tem um total de ${total} numeros(s).</p>`
        result.innerHTML += `<p>O maior número é: ${max}.</p>`
        result.innerHTML += `<p>O menor número é: ${min}.</p>`
        result.innerHTML += `<p>A soma dos números é: ${soma}.</p>`
        result.innerHTML += `<p>A média dos números é ${mean.toFixed(2)}.</p>`
    }
}