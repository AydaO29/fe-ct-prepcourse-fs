/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   //opcion uno con el math.pow 
   //return Math.pow(num,2)
   //opcion dos con operador aritmetico de potenciacion
   return num ** 2;

}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:

   //opcion 1 con operador aritmetico de potenciacion
   return num ** 3;

   //opcion 2 con el math.pow 
   //return Math.pow(num,2);
}
//console.log(elevarAlCubo(3 ))

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   //opcion 1 con operador aritmetico de potenciacion
   //return num ** exponent;

   //opcion 2 con el math.pow 
   return Math.pow(num, exponent);
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
  return Math.round(num);
   
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);

}
//console.log(redondearHaciaArriba(14.3))

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   return Math.random();
  
}
//console.log(numeroRandom())

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
