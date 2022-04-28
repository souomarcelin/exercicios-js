function tipoTriangulo(a,b,c){
    if(a == b && b == c){
        console.log('É um triângulo equilátero')
    }else if(a==b || b ==c){
        console.log('É um triângulo isósceles')
    }else{
        console.log('É um triângulo escaleno')
    }
}

tipoTriangulo(1,2,3)