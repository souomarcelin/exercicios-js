// par nome/valor

const saudacao = 'Opa' //contexto léxico 1 é o local no qual a sua variavel foi definida fisicamente no código


function exec(){
    const saudacao = 'falaaaa' //contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadoduro: 'Rua Teofilo Mosqueira',
        numero: 142
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)