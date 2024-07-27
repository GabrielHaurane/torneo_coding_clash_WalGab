# Cadena de divisores

Agustín estaba pensando en el número 60, que es un número con muchos divisores. De repente se le ocurrió crear una cadena de divisores, en la que el primer elemento sea 60 y a partir de ahí cada elemento sea un divisor del anterior.

Por ejemplo, una posible cadena sería 60 - 20 - 10 - 2.

A Agustín le interesa que la suma de los elementos de la cadena sea lo más grande posible.

Probó todas las cadenas de divisores que comienzan en 60, y descubrió que la cadena de divisores encabezada por 60 con la mayor suma posible de sus elementos es 60 - 30 - 15 - 5 - 1, cuya suma es 111.

Agustín comenzó con un número a = 60 en el ejemplo anterior, pero la cadena podría comenzar con cualquier entero positivo a.

Debes escribir una función que calcule la máxima suma posible en una cadena de divisores, dado el número inicial a de la cadena.

### Objetivo

- Debes implementar la función `cadenas(a)`
- El único parámetro indica el número inicial `a` de la cadena.
- La función debe retornar la máxima suma posible de los elementos de una cadena que comience con el número `a`.
- 
- # Dieta Kosaraju

El Doctor Kosaraju es un no muy conocido, autodenominado “experto” en dietas.

Acaba de crear la dieta ideal para el programador.
Por cuestiones de rima, márketing y términos pegadizos, la llama la “Zetadieta”.

La propuesta busca resolver el problema central de que cada persona tendrá un objetivo diferente para la cantidad de carbohidratos, proteínas, y grasas (en gramos) que desea ingerir diariamente, de acuerdo a lo que le recomiende una evaluación personalizada con un nutricionista.

Como cada alimento tiene una combinación diferente de carbohidratos, proteínas y grasas, es muy complicado elegir cómo combinarlos para terminar alcanzando el objetivo. ¡Y todo esto sin hablar todavía de las calorías!
A pesar de que otros profesionales consideran muy peligrosa su propuesta, la zetadieta del Doctor Kosaraju es muy simple: ha elegido 3 “alimentos canónicos”, y la dieta consistirá exclusivamente de esos 3 alimentos:

- Banana, fuente de carbohidratos. Cada banana aporta:
  • 27 gramos de carbohidratos
  • 105 calorías
- Atún, fuente de proteínas. Cada lata de atún aporta:
  • 30 gramos de proteínas
  • 120 calorías
- Aceite de oliva, fuente de grasas. Cada gramo de aceite de oliva aporta:
  • 1 gramo de grasas
  • 9 calorías

Por más que no sea totalmente correcto, el Doctor Kosaraju considera para su zetadieta que es despreciable lo que aporta cada uno de estos alimentos a las otras categorías (por ejemplo considera que el atún tiene 0 carbohidratos y 0 grasas).

Debes escribir una función que calcule la cantidad total de calorías que ingerirá diariamente una persona que sigue la zetadieta, sabiendo que desea ingerir cada día `C` gramos de carbohidratos, `P` gramos de proteínas, y `G` gramos de grasas.
Para esto debes tener en cuenta que al ser un líquido, la persona puede fraccionar y medir el aceite de oliva con precisión de gramos, pero en cambio por practicidad utilizará siempre de a latas enteras de atún, y similarmente comerá cada día una cantidad entera de bananas. Las cantidades de bananas y de latas de atún a ingerir cada día serán las mínimas posibles que aseguren al menos `C` gramos de carbohidratos y al menos `P` gramos de proteínas, respectivamente.

### Objetivos

- Debes implementar la función `zetadieta(C, P, G)`
- Sus parámetros son tres enteros `C`, `P`, `G` con las cantidades en gramos de carbohidratos, proteínas y grasas respectivamente.
- La función debe retornar un entero: la cantidad total de calorías
