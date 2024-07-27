'use strict'

// función que suma todas las divisiones
const sumaMaximaDeDivisores = (numeroUsuario) => {

    const primerDivisor = (dividendo) => {
        for (let i = dividendo - 1; i >= 0; i--) {
            if(numeroUsuario % i === 0 ){
                return i
            }
        }
    }

    const divisorInicial = primerDivisor(numeroUsuario);
    let divisorActual = divisorInicial;
    let divisores = [divisorActual]
    

    // divisorActual = primerDivisor(divisorInicial)


    while(divisorActual !== 1){
        divisorActual = primerDivisor(divisorInicial)
        divisores.push(divisorActual)
    }


    return divisorActual

}

console.log(sumaMaximaDeDivisores(15));
