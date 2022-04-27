function criarProduto(nome,preco,desconto = 0.1){
    return{
        nome, 
        preco,
        desconto
    }
}

console.log(criarProduto('Notebook', 1499.90))
console.log(criarProduto('Iphone', 4499.90))