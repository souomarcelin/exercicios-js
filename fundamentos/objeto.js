const prod1 = {}
prod1.nome = 'iPhone 13 Pro Max 512GB'
prod1.preco = 7859.90
prod1['Desconto Legal'] = 0.4 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 289.90
}

console.log(prod2)


const a = {name: "Teste"}
console.log(a)

const b = a // quando fazemos isso pegamos o endereço de memória, não o valor em si
b.name = "Opa"
console.log(a)

let c = 3
let d = c

d++

console.log(d)
console.log(c)

// quando trabalhamos com tipos primitivos é feita a cópia por valor, quando é com objetivos a atribuição é feita por referência
