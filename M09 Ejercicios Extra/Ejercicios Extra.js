/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
    for (const clave in objeto){
      array.push ([clave,objeto[clave]])
    }
    return array;
}

//console.log(deObjetoAarray());

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
let obj = {};
for (let i = 0; i < string.length; i++) {
   if(!obj[string[i]]){

      obj[string[i]]= 0
   }
   obj[string[i]]++
}
return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let str1 = '';
   let str2 = '';
   for (let i = 0; i < string.length; i++) {
   str1 += string[i] === string[i].toUpperCase()
      
   }
   
   }


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   let stringInvertido = '';
   let nuevaString = [];

   for (let i = frase.length-1; i >= 0; i--) {
      stringInvertido += frase[i]   
   }
   stringInvertido = stringInvertido.split('');

   for (let i = stringInvertido.length-1; i >= 0; i--) {
      nuevaString.push(stringInvertido[i])

   }
console.log(stringInvertido);
console.log(nuevaString.join(''));
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let num = numero.toString()
   let numInvertido = '';

   for (let i = num.length-1; i >= 0; i--) {
      numInvertido += num[i]
      
   }
 numInvertido = parseInt(numInvertido)
 if(numero === numInvertido) return "Es capicua";
 else return "No es capicua";
}

//console.log(capicua(121));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let str1 = string.split('');

   str1 = str1.filter(function(elemento){
   
      return elemento !== 'a'
         && elemento !== 'b' 
         && elemento !== 'c';
   })
   return str1.join('');
}

//console.log()


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let nuevoArray = [];
   for (let i = 0; i < array.length; i++) {
      for (let i = 0; i < array.length; i++) {
      }
      
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
