console.log('a =', a)
var a = 2
console.log('a =', a)

//em js quando usamos o var ocorre o hoisting, no caso é o içamento e ela vai pra cima

function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}
teste()

console.log('b =', b)
let b = 2

//em js quando usamos o let não ocorre o hoisting

