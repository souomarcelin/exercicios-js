function gerarCapitalSimples(capitalInicial, taxaJuros){
    let montante =  (capitalInicial * taxaJuros) + capitalInicial
    console.log(`O valor do montante = ${montante}`)
}

gerarCapitalSimples(1000, 0.2)

function gerarCapitalComposto(capitalInicial, taxaJuros, tempoAplicacao){
    let montante = capitalInicial * ((1 - taxaJuros) ** tempoAplicacao)
    console.log(`O valor do montante é = ${montante}`)
}

gerarCapitalComposto(1000,0.2,12)

//taxa de aplicação em meses