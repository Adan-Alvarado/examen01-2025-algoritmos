/*Parte A: Calculadora Básica
1. Declara dos números: num1 = 15.7 y num2 = 4.3
2. Realiza y muestra:
a. Suma
b. Resta
c. Multiplicación
d. División
e. Módulo*/

const num1 =15.7;
const num2 = 4.3;

console.log(`La suma del primero y el segundo es: ${num1+num2}`);
console.log(`La resta del primero y el segundo es: ${num1-num2}`);
console.log(`La multiplicación del primero y el segundo es: ${num1*num2}`);
console.log(`La division del primero y el segundo es: ${num1/num2}`);


/**Redondear */

const multiplicacion = num1 * num2;
const redondearCerca = Math.round(multiplicacion);
console.log(`El resultado redondeado al entero mas cerca es : ${redondearCerca}`);

const multiplicacion1 = num1 * num2;
const redondearArriba = Math.ceil(multiplicacion1);
console.log(`El resultado de redondear hacia arriba es : ${redondearArriba}`);

const division = num1 / num2;
const redondearAbajo = Math.floor(division);
console.log(`El resultado de redondear hacia arriba es : ${redondearAbajo}`);

const division1 = num1/num2;
const raiz = Math.sqrt(division1);
console.log(`La raiz cuadrada de la divison es: ${raiz}`);