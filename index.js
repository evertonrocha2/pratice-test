//Ex 01
function fibonacci(n) {
    const numbers = [0, 1];
    for (let i = 2; i <= n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers;
}

function verifyFibonacci(number) {
    const fiboSequency = fibonacci(20);
    console.log("Sequência de Fibonacci até 20 números:", fiboSequency);
    if (fiboSequency.includes(number)) {
        console.log(`O número ${number} pertence a sequência de Fibonacci.`);
    } else {
        console.log(`O número ${number} NÃO pertence a sequência de Fibonacci.`);
    }
}

verifyFibonacci(8);
verifyFibonacci(12);



//Ex 02
let string = "Target Sistemas";
let quantity = 0;

for(let i = 0; i < string.length; i++){
    if(string.toLocaleLowerCase().charAt(i) === 'a'){
       quantity = quantity + 1;
    }
 
}

if(quantity !== 0){
    console.log("A letra 'a' é presente na String e aparece", quantity, "vezes")
}



//Ex 03
let indice = 12;
let soma = 0;
let k = 1;

while (k <= indice) {  
    soma = soma + k; 
    k = k + 1;         
}

console.log(soma);
//Ao final, o valor será 78!

//Ex 04
//a) 9, b) 128, c)49, d)100, e)13, f)200

//Ex05 
//Ligo o segundo interruptor, nisso deixo ele ligado por alguns minutos pra ele esquentar, em seguida desligo ele e acendo o terceiro interruptor, aí vou e verifico uma das salas, se a lâmpada estiver apagada e quente significa que o interruptor é o segundo, vou em outra sala, se a lâmpada estiver ligada significa que é o terceiro interruptor e se estiver apagada entendo que é o primeiro interruptor, que ficou desligado e assim consigo identificar qual é o interruptor que está ligado.

