const frase= (" Estoy aprendiendo JavaScript en el CUROC");
const primeras6= frase.slice(0,6);


console.log(frase);
/*Muestra la longitud original*/
console.log(frase.length);

/*Elimina los espacios al inicio y final*/
console.log(frase.trimEnd());
console.log(frase.trimStart());

/**Convierte toda la frase a mayúsculas */
console.log(frase.toUpperCase());

/**Convierte toda la frase a minusculas*/ 
console.log(frase.toLowerCase());


/**Parte B*/
console.log(frase.includes('JavaScript'));
console.log(frase.match('CUROC'));

/**Parte C */
/*Extraer primeras 6*/ 
console.log(primeras6);

/**tomar solo JavaSript */
const soloJava = frase.slice(19,30);
console.log(soloJava);


