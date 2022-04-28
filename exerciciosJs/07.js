function bhaskara(a,b,c){
    let arr = []
    let delta = (b**2) - 4*(a*c)
    if(delta < 0){
        console.log('Delta é negativo')
    }
    else{
        let raizQuadrada = Math.sqrt(delta)
        let x = (-b + raizQuadrada) / 2 * a
        let y = (-b - raizQuadrada) / 2 * a
        arr.push(x,y)
        console.log(arr)
    }
}

bhaskara(3,-5,12)
