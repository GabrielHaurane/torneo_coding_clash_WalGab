'use strict'

// función que suma todas las divisiones
const sumaMaximaDeDivisores = (numeroUsuario) => {

    const primerDivisorEncontrado = (dividendo) => {
        let divisor;
        for (let i = dividendo - 1; i >= 0; i--) {
            if(numeroUsuario % i === 0 ){
                divisor = i;
                break
            }
        }
        return divisor
    }

    const divisorInicial = primerDivisorEncontrado(numeroUsuario);
    let divisorActual = divisorInicial;
    let divisores = [divisorActual]
    

    while(divisorActual !== 1){
        let divisor = divisorActual
        divisorActual = primerDivisorEncontrado(divisor)
        divisores.push(divisorActual)
    }

    // do{
    //     divisores.push(divisorActual)
    //     divisorActual = primerDivisor(divisorActual)
    //     console.log(divisorActual);
    // }
    // while(divisorActual !== 1)


    return divisores

}

console.log(sumaMaximaDeDivisores(60));
