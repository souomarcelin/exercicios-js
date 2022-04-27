let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'Teste'


console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//criando uma variavel maluca: sem var e let!

abc = 3 //não faça isso em casa!!
console.log(global.abc)

//module.exports = { f: 456, g: false, h: 'Teste' }
/// dentro do node cada arquivo é um modulo diferente
