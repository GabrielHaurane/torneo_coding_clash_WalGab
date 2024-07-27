"use strict";

// función que retorna todos los números divisibles
const cadenas = (a) => {
    // error si el dato ingresado no es un numero
  if (typeof a !== "number") {
    throw new Error(`el numero tiene que ser de tipo Number`);
  }

  // fusion que devuelve el primer divisor
  const primerDivisorEncontrado = (dividendo) => {
    let divisor;
    for (let i = dividendo - 1; i >= 0; i--) {
      if (a % i === 0) {
        divisor = i;
        break;
      }
    }
    return divisor;
  };

  // variables 
  const divisorInicial = primerDivisorEncontrado(a);
  let divisorActual = divisorInicial;
  let divisores = [divisorActual];

  while (divisorActual !== 1) {
    let divisor = divisorActual;
    divisorActual = primerDivisorEncontrado(divisor);
    divisores.push(divisorActual);
  }

  return divisores;
};

// función que suma todas las divisiones
const sumaMaximaDeDivisores = (listaDeDivisores) => {
  return listaDeDivisores.reduce((acc, divisorActual) => {
    return acc + divisorActual;
  }, 0);
};

console.log(sumaMaximaDeDivisores(cadenas(60)));
