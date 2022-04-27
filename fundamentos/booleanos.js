let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) // !! é duas vezes a negação

console.log('Verdadeiro')
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Finalizando')

console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')



//todos os numeros sao verdadeiros com exceção do zero
