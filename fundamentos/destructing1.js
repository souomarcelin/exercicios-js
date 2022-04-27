/// novo recurso ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    enderedeco : {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome,idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, BemHumorada = true} = pessoa 
console.log(sobrenome, BemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
