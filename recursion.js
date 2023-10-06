/*
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

const isEven = (num) => {
    if (num === 0) {
        return true
    } else if (num === 1) {
        return false
    } else if (num < 0) {
        return isEven(-num) // Se "num" for negativo, converte para positivo e chama recursivamente. Esta medida evita que fique subtraindo 2 repitidamente de -1, formando um loop, resultando em um erro de estouro de pilha.
    } else {
        return isEven(num - 2) // Se "num" for positivo e diferente de 0 e 1, subtrai 2 e chama recursivamente
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false