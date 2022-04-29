const pai = {
    nome: 'Marcelo',
    corCabelo: 'Preto'
}

const filho1 = Object.create(pai)
filho1.nome = 'Heitor'
console.log(filho1.corCabelo)

const filho2 = Object.create(pai,{
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filho2.nome)
filho2.nome = 'Carla'
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

for(let key in filho2){
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
