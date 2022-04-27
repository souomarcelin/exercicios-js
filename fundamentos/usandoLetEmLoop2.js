const funcs = []
for(let i=0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// aparece o valor correto pois let funciona com blocos
