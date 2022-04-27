let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) //ERRO!!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixe para a linguagem atribuir quando for undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)