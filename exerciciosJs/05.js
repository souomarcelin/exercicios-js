function mudarParaMoeda(a,b){
    let soma = a + b
    console.log(`R$${soma.toFixed(2).replace('.', ',')}`)
}

mudarParaMoeda(0.1,0.2)
