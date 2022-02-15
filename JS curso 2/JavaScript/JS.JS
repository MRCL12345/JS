//!-----------------------------OPERADORES-------------------------------------------------
//* Aritmeticos
//# En operadores aritmeticos se respetaran los signos, leyes y de mas que se aplican en las matematicas.
// A continuacion les representaremos en variables los signos para hacer operaciones.
let suma_resta_mutiplicacion = 5 + (5 - 10) * 3; // (el * te multiplica)
let division = 5 / 2;
let modulo = 5 % 2; // (el % te da el residuo de una division)
console.log(suma_resta_mutiplicacion);
console.log(division);
console.log(modulo);
//* Relacionales
// >, <,   >=, ==, ===, !=, !==
console.log(8 > 9);
console.log(8 < 9);
console.log(8 <= 9); // menor o igual a 9 o menor y poner resultado
console.log(8 >= 9);
console.log(7 < 7);
console.log(7 <= 7);
console.log(7 >= 7);
/*
= 1 igual es asignacion de variable
== 2 iguales es comparacion de valores
=== 3 iguales es comparacion de tipo de dato y de valor
  */
console.log(7 == 7);
console.log("7" == 7); // En realidad este es correcto, la unica diferencia es que uno es un boolean y otro es una cadena
console.log(0 == false);
/// Viene siendo mala practica usar el doble igual, es mejor usar el triple igual ya que es mas certero, en el ejemplo de la cadena de texto y el boolean, saldra ahora si a falso porque son distintos
console.log(7 === 7);
console.log("7" === 7);
console.log(0 == false);
//* Incremento - Decremento
//# El incremento es la capacidad que tiene una variable que va a controlar mi flujo dentro de la programacion de mi aplicacion para aumentar su valor ya sea en unidad o en +, El descremento hace al revez lo del incremento, osea resta
// En cada accion te pondre lo que significa cada signo
let i = 1;
i += 3; //suma y resultado
i -= 3; // resta y resultado
i *= 2; // multiplicacoin y resultado
i /= 2; // dividir y resultado
console.log(i);
//! Hay 2 casos especiales que es cuando vamos aumentando o disminuyendo un solo valor por cada vez y esto se conoce como operador unario
//* Operador Unario
i += 1;
// o
i++;
// o
i--;
console.log(i);
// o
console.log(i++ /*etc*/);
/*
 * Operadores Logicos
 ** !Not
 ** || Or
 ** &&And
 */
/*!Not: Niega, es decir lo que es verdadero lo vuelve falso y viceversa */
console.log(!true);
console.log(!false);
/*||Or: Cuando tengo 2 o mas condiciones con que una se cumpla, es decir sea verdadera, el OR validara a verdadero las otras*/
console.log(9 === 9 || "9" === 9);
console.log(9 === "9" || "9" === 9);
/* &&And: Cuando tengo 2 o mas condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide */
console.log(9 === 9 && "9" === 9);
console.log(9 === 9 && "9" === "9");
//!-----------------------------------------CONDICIONALES--------------------------------------------
//# Una estructura de control es el mecanismo que permite controlar el flujo de tu programacion de hecho todas las lineas de codigo han sido estructuras secuenciales pero llegara un momento en que tenemos que tomar ciertas acciones o no dependiendo de el resultado de evaluar una condicion
//Dentro de las estructuras de control hay distintos tipos, enfoquemonos en las condicionales que son las mas usadas
//* If - else
//# If else es una estructura de programacion que me premite tomar una desicion y si esta desicion se cumple pues entonces mostrar en la pantalla o ejecutar ciertas acciones.

let edad = 17;

if (edad > 17) {
  // Si (el valor de edad) es mayor a 17, imprime que eres mayor de edad, si no, imprime que eres menor de edad
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
//(Espero que entiendas la estructura del if, si no aqui te pongo como se hace)
/*
if () {

} else {

} */
/*
 **Pero tambien le podemos agregar mas cosas como mostramos
 */
//_ Intentemos poner "si tu edad es igua lo mayor a 17, eres mayor de edad"
if (edad <= 17) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
// Vas entendiendo?
// Aqui abajo pusimos "si el valor de edad es menor a 17, imprime que eres menor de dad, si no, imprime que eres mayor de edad"
if (edad > 17) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}
//* if-else if-else
// Imaginate que en tu sitio web quieres dar un saludo correcto segun el pais en el que este el usuario, ya que por ejemplo mientras un usuario de mexico esta en el dia, el usuario de china estara en la noche, queremos hacer que la consola salude a cada uno correctamente, a los que esten de dia "buenos dias" y a los de noche "buenas noches"
let hora = 5;
// Ahora fijense que como en cada pais tienen un horario distinto, pongamos un limite entre los numeros para que o diga buenos dias o buenas noches o diga que no sabe a que tiempo estan en su pais
// Para eso recuerda que vimos las opciones del NOT, OR y AND y aplicamos sus leyes aqui

if (hora >= 0 && hora <= 5) {
  console.log("Buenas madrugadas");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos dias");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas, nose que horas sean en tu pais");
}

//A continuacion te traduzco en lenguaje normal como se diria
/*
_Si la hora mayor a 0, o menor a las 5 horas, o igual,
_Entonces di "Buenas madrugadas"
_Si no es, pero si es mayor a las 6, y menor a las 11 o igual,
_Entonces di "Buenos dias"
_Pero si tampoco es eso, pero si es mayor a las 12, y menor a las 18 o igual,
_Entonces di "Buenas tardes"
_Si no es ninguna de todas esas, entonces di "Buenas, no se que horas sean en tu pais" 
*/
// Hay una simplificacion del IF ELSE y se llama Operador ternario
//*Operador Ternario
//# El Operador Ternario consta de una condicion (), si esa condicion se cumple a verdadero sigue un signo de interrogacion ? y la linea de codigo que quieras ejecutar si la condicion es verdadera y luego dos puntos : y la linea de codigo que quieres que se ejecute si es falsa.
console.log("Operador Ternario");
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de dedad";
console.log(eresMayor);
//* Switch - Case
//# El switch case nos servira cuando nosotros tengamos una situacion en donde tengamos diferentes valores para una misma variable.
/*Imaginense que yo quiero decir el dia 
domingo-0 
lunes-1 
martes-2 etc*/
let dia = 2;
switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  default:
    console.log("El dia no fue encontrado");
    break;
}
// dentro de los parentesis pon el nombre de la variable que quieras ponerle el switch
//Hagan de cuenta que dentro del switch, el case(valor): es la llave apertura de los {} del if y el breack; es el cierre de esta
// Y muy importante, el switch va a tener algo muy importante (el default) que significa que si la variable no cae en ninguno de los casos (case 1,2,3,4,5 lunes martes miercoles etc) entonces caera en este valor particular, podriamos poner ahi que el dia no fue encontrado
/// Entonces Los if else/Operador ternario se usaran cuando tengamos dos opciones o una, y el else if cuando necesitemos mas de dos opciones, y el switch-case cuando una variable pueda tomar diferentes casos o valores aunque en este caso se podia usar el else if en lo que hicimos del switch case.
//!------------------------------CICLOS (LOOPS)------------------------------------
//Los ciclos como lo dice son un ciclo de un codigo que se ejecutara hasta que se cumpla la condicion que necesita para parar
//# El ciclo o bucle mas utilizado es una estructura llamada for
for (let i = 0; i < 10; i++) {
  console.log("for" + i);
}
//__dentro de el for entre parentesis debes poner la incializacion de alguna variable (let i = 0;), luego escribes la condicion (i < 10), luego escribes el incremento o decremento del valor, lo que vimos en los operadores (i++)
//__ Dentro del juego de llaves {} pondras la sentencia que ejecutara el for (lo que quieras que ejecute)
//! Observa en la consola como el codigo se va repitiendo aumentando el valor de i hasta que vea que el valor sea 10
// Ahora imaginense que tengo un arreglo de numeros y quiero imprimirlos cada uno con el for, pues declaramos la variable i y vamos a decirle que mientras el valor de i sea menor al valor de los numeros de la variable numeros (pondremos el length para medir la longitud como lo vimos el curso anterior, este valor va a ser dinamico porque dependiendo del numero de elementos que tenga el arreglo es el numero de veces que se va a repetir pues este va imprimir siempre todos los elementos que tenga el arreglo), y luego le pongamos el i++ para que vaya recorriendo cada uno de esos arreglos
let numeros = [10, 20, 30, 40, 60, 70, 80];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // acuerdate de lo que aprendiste antes, estamos queriendo que imprima el arreglo numeros y la posicion i que es la variable con la condicion
}
//__ Luego llegaron variantes del for, el for of y el for in
//* For In
//# Un for in me va a permitir recorrer las prpiedades de un objeto, digamos que es un for especial para un objeto
const me = {
  nombre: "benz",
  apellido: "kingez",
  edad: 3,
};
for (const propiedad in me) {
  console.log(propiedad);
}
// De esta forma podemos acceder a ver sus propiedades pero si quieres ver sus valores tambien esta esta forma
for (const propiedad in me) {
  console.log(`Key: ${propiedad}, Value: ${me[propiedad]}`);
} // en el ${me[propiedad]} estamos accediendo a la constante llamada me y dentro de ella estamos accediendo a el valor de sus propiedades con Value: y [propiedad]
//* For of
//# el For of se puede utilizar para arreglos,cadenas de texto entre otras
for (const elemento of numeros) {
  console.log(elemento);
}
//Aqui estamos diciendole (recorreme cada elemento que se encuentra dentro de la variable llamada numeros) te imprimira los numeros dentro de el arreglo de la variable
//! O si queremos usarlo en cadenas de texto
//__ Cadenas de texto
let cadena_de_texto = "Holaaa";
for (const caracter of cadena_de_texto) {
  console.log(caracter);
}

//? Cual es la diferencia entre un FOR IN Y FOR OF? FOR IN es la variante del ciclo for que me va a permitir recorrer cada una de la propiedades de un objeto primitivo mientras que FOR OF me servira para recorrer cada uno de los elementos de cualquier objeto en javascript que sea iterable
//_
//? Que es iterable? Que yo pueda partir  en pequeños elementos como los objetos, arreglos o cadenas de texto
//!-----------------------MANEJO DE ERRORES----------------------------------
try {
} catch (error) {}
//---
try {
  console.log("En el try se agrega el codigo a evaluar");
  // dentro del try pones el codigo que quieras que pruebe el bloque para ver si no haya error
} catch (error) {
  console.log("Catch captura cualquier error seurgido o lanzado en el try");
  console.log(error); // el console error es para que te salga el mensaje de donde esta el error
} finally {
  console.log(
    "El bloque finally se ejecutara siempre al final de un bloque try-catch haya errores o no"
  );
}
// https://www.youtube.com/watch?v=SPVL8uAezaw&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA
//probemos con un error, pongamos una cadena de texto en vez de un numero
try {
  let numero = "si";
  if (isNaN(numero)) {
    // el isNaN te dice si no es un numero te regresara verdadero y si lo es sera falso
    throw new Error("El caracter introducido no es un numero"); // El throw new error es como para hacer tu error personalizado
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente error ${error}`);
}
//!----------------------BREACK-CONTINUE-----------------------
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (let index = 0; index < numeros.length; index++) {
  if (index === 5) {
    break; //el break te corta el numero que sigue del 5 en este caso
  }
  console.log(numeros[index]);
}
console.log("------------");
for (let index = 0; index < numeros.length; index++) {
  if (index === 5) {
    continue; //el continue no rompe el numero que sigue del 5 a diferencia del break
  }
  console.log(numeros[index]);
}
//!-------------------DESTRUCTURACION--------------------------
//Sin destructuracion
//Yo creo una constante con un arreglo de numeros, ahora creo tres variables en la que cada una de esas variables tendra un valor de la constante
const numbers = [1, 2, 3];
let uno = numeros[0],
  dos = numeros[1],
  tres = numeros[2];
console.log(uno, dos, tres);
//Con destructuracion
//De esta forma puede ser mas facil hacer lo mismo de arriba
const [one, two, three] = numbers;
console.log(one, two, three);
//O a lo mejor en vez de ser un arreglo, es un objeto la constante, hagamoslo
const person = {
  nombre: "benz",
  apellido: "kingez",
  edad: 35,
};
//Si yo quisiera destructurar esto, hago lo mismo que hice mas arriba, ahora mismo lo que esta dentro de el objeto, son propiedades
// Ahora hagamos lo mismo aca
let { nombre, apellido, edad } = person;
console.log(nombre, apellido, edad);
//Pues vean que he logrado esa destructuracion
//Es importante que sobre todo lo tengan bien claro a la hora que ustedes destructuren las propiedades de un arreglo u objeto en variables
//!------------------------OBJETOS LITERALES-----------------------------
//# Los objetos literales no son mas que nuevas formas de escribir atributos y metodos incluso designarlos en objetos
//__ Antiguamente:
let nombre00 = "hl_ez",
  edad00 = 7;
const noob = {
  nombre: nombre00,
  edad: edad00,
  gritar: function () {
    console.log("soy nub, soy nub");
  },
};
console.log(noob);
noob.gritar();
//* Objeto Literal:
const nub = {
  nombre00,
  edad00,
  gritar: function () {
    console.log("soy ez, soy ez");
  },
  raza: "Admin abuser",
};
console.log(nub);
nub.gritar();
//!-------------------------PARAMETROS REST&OPERADOR SPREAD
//* Parametros REST
//# Para definir los parametros REST se le ponen unos puntos suspensivos
function sumar(a, b, ...c) {
  let resultado = a + b;
  //Todo lo que este despues de c lo voy a tratar como si fuera un arreglo, usaremos el metodo for each digamos que esta funcion se ejecutara por cada uno de los elementos que venga dentro de c
  c.forEach(function (n) {
    resultado += n;
  });
  // entonces yo al num. en cuestion solo le dire que se lo sume a lo que ya vale el resultado
  return resultado;
}
console.log(sumar(1, 2)); // suma 1 + 2
console.log(sumar(1, 2, 3, 4)); // 1+2+3+4
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));
console.log(sumar(1, 2, 3, 4, 5, 6, 7));
//* Operador Spread
//# Nos permitira cuando una expresion la tengamos que expandir en situaciones donde tengamos que almacenar multiples elementos, tambien se utilizan los tres puntos suspensivos
// Imaginate que tu ya tienes un arreglo con cierto numero de elementos y luego recibes nuevos parametros, en lugar de estar haciendo concatenaciones o push a tu arreglo pues usaremos el spread operator
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);
//Ahora imaginense que yo tengo que crear un arreglo 3 a pártir de estos 2 elemengos (arr1 y 2)
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//!---------------------ARROW FUNCTION---------------------
//# Las arrow Function es una implemetacion que vino a mejorar la manera en que escribimos es mas expresivo, sintetico incluso para alguien que no sepa mucho de la sintaxis del lenguaje de programacion, digamos que se entiende mejor el objetivo que queremos mejorar
//# Es una nueva forma de definir funciones anonimas que sean expresadas
const saludar = function () {
  console.log("Si");
};
saludar();
// Al no ser una funcion declarada (function saludar) no se puede ejecutar antes de haber sido creada
//# Una arrow function es una forma de poder quitar las llaves que se hacen cuando declaras una funcion ( {} ) con el simbolo de una flecha =>, pero solo quitale las llaves si la linea de codigo es solo una.
const saluda = () => console.log("Hola");
//? Como una Arrow Function puede recibir parametros?
//De esta manera:
const saluda2 = (nombre12) => console.log(`Hola ${nombre12}`);
saluda2("Irma");
// Incluso puedes quitarle los parentesis al lado del =, aunque solo quitaselo si solo le agregaras 1 parametro, si son mas de 1 pon los parentesis
const saluda3 = (nombre23) => console.log(`Holis ${nombre23}`);
saluda3("Irma");
//Existe otra caracteristica de las Arrow function
// Las arrow function tienen la capacidad de capturar el objeto this de el congexto donde se encuentre. (un contexto es como, un objeto es un contexto, la funcion est un contexto, el contexto global de window etc)
function perrov() {
  console.log(this);
}
perrov();
//Vean, que como la funcion existe dentro del contexto del navegador wentonces vean como this se vuelve el objeto window, el objeto que representa la ventana del navegador
//? Y si en vez de ser funcion, tengo un objeto?
const perro = {
  nombre: "benz",
  ladrar: function () {
    console.log(this);
  },
};
perro.ladrar();
//Vean como this ahora hace referencia al objeto
//? Y si ponemos con arrow function el objeto?
const perro0 = {
  nombre: "benz",
  ladrar: () => {
    console.log(this);
  },
};
perro0.ladrar();
//Vean como EL ARROW FUNCTION TIENE LA CAPACIDAD DE CAPTURAR EL CONTEXTO DEL OBJETO EN EL QUE SE ENCUENTRE por eso hay que tener cuidado al utilizar arrow function para declarar metodos dentro de objetos porque podemos tener este problema
