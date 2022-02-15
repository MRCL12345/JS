//# Fundamentos JavaScript Curso 1
//!---------------------------------------VARIABLES----------------------------------------------
//# Una variable es un lugar donde almacenar informacion de cualquier tipo, es el lugar donde por ejemplo se guarda tu correo o numero de telefono y se puede cambiar su valor como cuando quieres cambiar tu contraseña o algun dato personal
// Esisten 2 formas de hacer una variable normal
//* 1 VAR
var variable01 = "Hola mundo";
console.log(variable01);
// Se escribe la referencia de var y seguido de eso escribes el nombre de la variable, despues das un = y escribes su valor, ya sea numero o texto (si es texto tienes que ponerlo entre comillas)
//* 2 LET
let variable02 = "Hello World";
console.log(variable02);
// Para crearlo es lo mismo, solo que cambias el let por el var y listo
//? Cual es la diferencia entre usar let o var? La diferencia es que var la usaras cuando quieras crear una variable que  en este caso se use por toooda tu pagina, let se usara como si fuera una variable digamosla privada porque o pueden todos ver su valor o pueden algunos que no etc,
//Lo ideal es usar siempre el LET porque al hacer un bloque (luego explicaremos que es un blqoue mas detalladamente) no funcionara la variable var dentro de ello porque var aunque lo pongas en un bloque siempre va a ser como si no tuviera un bloque o no estuviera en tu codigo
{
  var variable_con_bloque = "variable con bloque usando var";
  console.log(variable_con_bloque);
}
console.log(variable_con_bloque);
// vean arriba que a pesar que este la variable var en un bloque (el bloque son las llaves {} y su trabajo es como hacer una nueva linea de codigo fuera de esta) igual la imprime fuera del bloque, esto no debe ocurrir con los bloques pero si pasa con var,
{
  let variable_Con_Bloque_Correcta = "variable con bloque usando let";
  console.log(variable_Con_Bloque_Correcta);
}
// console.log(variable_Con_Bloque_Correcta);
// (Puse el console log en un comentario para que no alterara la funcion, pero tu puedes quitarle los // y ver, pero luego vuelve a ponerlo o borralo para que no te altere el codigo.)Aqui observen que la variable let esta respetando el bloque y al querer imprimirlo en la consola fuera del bloque me marca error,
//TODO En conclusion, la forma correcta de hacer una variable es con let.
//!-------------------------------------------AMBITO DE BLOQUES-----------------------------------
//# Esto es un bloque
{
}
//# Un bloque tiene como funcion apartar lo que este adentro de el, fuera de esta linea de codigo, es como si tu estuvieras en una habitacion (la habitacion sera este archivo de que estas programando) y en una caja de madera estan tus cosas (la caja sera el bloque donde tienes unas variables y sus valores son tus cosas, osea el valor de esas variables seria el peine, la ropa, lo que tengas ahi dentro) y nadie puede abrir la caja a menos que tu lo hagas. Esa es una forma de entender que hace un bloque.
//Pongamos una variable dentro de este bloque
{
  let bloque00 = "Esto es un bloque";
  console.log(bloque00);
}
//Pero que pasa si yo quiero imprimir esa variable fuera del bloque
//* console.log(bloque00); (quitale el // para poder ver, pero despues de verlo, borralo o vuelve a ponerlo como comentario para que no interfiera el error en el codigo)
//Observa que sale erorr, porque el bloque hace como si no existiera en este archivo a menos que lo imprimiera dentro del bloque
//!------------------------------------------CONSTANTES---------------------------------------
//# Una constante es una variable que no va a cambiar su valor, a comparacion de let y var, un const es una variable que no se puede cambiar, solo se le pueden agregar cosas en sus propiedades.
//? Cuando usaremos constantes? Cuando quieras hacer una variable que no cambie de valor
//La forma de hacer la constante es con la referencia de const seguido del nombre y su valor,
const constante00 = "Hola mundo, esto es una constante";
console.log(constante00);
// Tambien las constantes pueden incluir objetos u arreglos (mas adelante explicamos mas a fondo un objeto y un arreglo)
//* Const con objeto
//* Dentro de el objeto podemos poner lo que seria como una variable o mas de una dentro de esta misma constante, pongamos una que sea mi nombre y otro con mi edad
const constante01 = {
  nombre: "Binz",
  edad: 7,
};
console.log(constante01);
//* Const con arreglos
//* Dentro de el arreglo podemos poner en este caso una cadena de texto (mas adelante se explica que es una cadena de texto) pongamos dos con dos nombres de colores
const constante02 = ["verde", "amarillo"];
console.log(constante02);
//Como ya te dije, Una constante no puede cambiar su valor, pero podemos cambiar sus propiedades, fijate, con la constante 1 podemos agregarle un correo electronico por ejemplo. Pones el nombre de la cosntante y escribes un punto, de ahi sin hacer espacio escribes el nombre de la variable que quieras agregar, en este caso le añadire un correo, pones su valor y listo
constante01.correo = "binzprogamer@gmail.com";
//Ahora intentemos con la de los colores
//Con la de los colores como es arreglo ponemos la referencia .push seguido de unos parentesis dentro pones su valor
constante02.push("anaranjado");
//--
console.log(constante01, constante02);
//!-------------------------------------CADENAS DE TEXTO-----------------------------------
//* Cadenas de texto aka strings
//# Esto es una cadena de texto, pongamosle una cadena de texto a una variable
let nombre01 = "B_nzz"; //la cadena de texto es lo que ves entre comillas "B_nzz"
let apellido01 = "KingEz";
let saludo01 = "Hola";
console.log(nombre01, apellido01, saludo01);
//# Las cadenas de texto son como palabras dentro de tu codigo, para poner esas palabras necesitas ponerselas entre comillas
// Si quieres cuantos caracteres tiene tu cadena de texto tienes que usar la propiedad length, basicamente es como si te contara cuantas letras tiene
console.log(nombre01.length, apellido01.length, saludo01.length);
// Y si quieres ver dentro de la cadena dividir letra por letra tienes que usar la referencia string, para eso hagamos una nueva variable
// Pondremos despues del = un new string (nueva construccion) osea que te saldra letra por letra tu cadena de texto en un apartado de la variable, pones entre parentesis tu cadena y listo
let despedida00 = new String("Adios");
console.log(despedida00);
console.log(nombre01, apellido01, saludo01, despedida00);
//Tambien puedes poner el .length para saber cuantos caracteres tiene la cadena de texto que pusiste en estas variables
console.log(
  nombre01.length,
  apellido01.length,
  saludo01.length,
  despedida00.length
);
//# Ahora imaginense que por ejemplo en tu web quieres que la gente cree su correo y le salga el nombre con mayusculas, para eso existe una referencia llamada ToUpperCase, y si quieres que por ejemplo su apellido salga en minuscula usas la referencia ToLowerCase
console.log(nombre01.toUpperCase(), apellido01.toLowerCase());
//Escribes el .toUpperCase/.toLowerCase y pegado pones unos parentesis
//*Ahora hagamos una variable larga
let lorem00 =
  "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.";
// Y si quieres buscar si esta variable tiene en su cadena de texto alguna palabra o letra esta esta referencia
console.log(lorem00.includes("texto"));
//Como en este caso el texto incluye la palabra texto nos sale true, pero si no fuera seria false
//# Ahora imaginense que en tu sitio web alguien se logueo y te salio su correo, usuario y numero separado por espacios, para identiciar cada uno por separado podemos usar la opcion split, en este caso como lo separaron con espacios pondre que el separador sea un espacio como se muestra dentro de las comillas.
console.log(lorem00.split(" "));
//!-------------------------------------------CONCATENACION---------------------------------------------
let nombre02 = "B3nz";
let apellido02 = "0dr";
//# Digamos que yo quiero saludar y decir en la consola "hola mi nombre es b3nz 0dr" con las variables.
//# concatenar significa unir una cadena de texto con una variable, imaginate en estas aplicaciones en los que dependiendo de las acciones del usuario los mensajes cambian, o que estas tratando de logearte y dice "el correo no existe en la base de datos" a esto se le llama CONCATENACION
//para concatenar una cadena de texto con otra o una variable tendremos que usar el simbolo ( + ) para agregar y (" ") para poner espacio osea:
let saludo03 = "hola mi nombre es " + nombre02 + " " + apellido02 + ".";
console.log(saludo03);
//Aunque esto resulta un poco tardado y frustante para algunos, asi que para hacerlo mas facil existe un metodo.
//* INTERPOLACION DE VARIABLES
// interpolar es meter dentro de una cadena de texto el valor dinamicamente de una variable pero para eso tenemos que hacer uso de una caracteristica llamada TEMPLATE STRING
let saludo04 = `Hola mi nombre es ${nombre02} ${apellido02}.`; // El $ significa espacio y en el juego de llaves va cada variable que quieras seleecionar para que salga su valor
console.log(saludo04);
//! Importrante esta vez no se usa el entre comillas comun, se usan los acentos invertidos pulsando alt 96 ( ``)
//? ¿Que otra caracteristica tiene usar las template strings (``)? muchas veces al hacer apps con java scripts, imaginate que tu quieres imprimir una lista en html de viñetas que tenga por ejemplo las estaciones del año.
// imaginate que yo quiero agregar a la variable ul el valor de las estaciones en codigo html. Asi se tendra que hacer, si lo haces con doble entre comillas te dira error pero si lo haces con el acento invertido estara bien
let ul0 = `<ul>
        <li>primavera</li>
        <li>verano</li>
        <li>otoño</li>
      </ul>`;
console.log(ul0);
//!---------------------------------------TIPOS DE DATOS NUMERICOS---------------------------------------
//# A diferencia de otros lenguajes, en javascript hay solo un tipo de numero
//Observen hagamos una variable con un valor de 2, y un nuevo numero con un valor primitivo que sea 4 y otro de punto decimal
let n01 = 2;
let n02 = 5.33;
let n03 = new Number(4);
//fijense con este comando estamos redondeando a cuantos numeros decimales va a tener el valor numerico, osea que si le pones en este caso 1, solo saldra un numero decimal como se muestra abajo
//esto nos puede servir para formatear o abreviar sobre todo numeros grandes poder hacerlo chico
console.log(n02.toFixed(1));
//aqui hay una funcion que se llama parseint que es un metodo que te devolvera solo la parte entera del numero si lleva el decimal, solo saldran los enteros como se muestra abajo
console.log(parseInt(n02));
//? Para que me puede servir?
// Este parseint es importante, imaginate que tienes que hacer en tu web que el usuario ponga su edad, pues te saldria su edad en una cadena de texto no como un numero
let edad_del_usuario0 = "17.10";
//hay una opcion para que veas si es una cadena de texto o es un numero
console.log(typeof edad_del_usuario0);
//y si intentas hacer la operacion de la suma con una cadena de texto y un numero
console.log(n01 + edad_del_usuario0);
// estara solo uniendo los numeros pero no sumarlos, observa tu consola.
//para hacer la manera correcta debe ser con solo numeros
console.log(n03 + n01);
//Entonces lo que tengo que hacer es convertir la cadena en numero y luego sumarlo, puedes hacer lo siguiente:
console.log(n02 + parseInt(edad_del_usuario0));
//aunque si te das cuenta no lo sumo aun bien ya que es un problema de javacript con la programacion, si te fijas le falta sumar los decimales, ahora usaremos la opcion parsefloat para que se haga correcto:
console.log(n02 + parseFloat(edad_del_usuario0));
//!-------------------------------------------VALORES BOOLEANOS-----------------------------------
// Formas de hacer un booleano:
let v01 = Boolean(true);
let f01 = Boolean(false);
let verdadero01 = true;
let falso01 = false;
//----------------------------------------------
console.log(verdadero01, falso01, v01, f01);
console.log(Boolean(0)); //el numero 0 es un valor que tiende falso
console.log(Boolean(-7)); //un numero negativo es un valor que tiende a verdadero
console.log(Boolean("")); //una cadena de texto vacia, tiende a falso
console.log(Boolean(" ")); //cualquier cadena de texto con cualquier caracter aunque sea en blanco, tiende a verdadero
// si se van a MDN y buscan truthy, te saldran las expresiones que siempre te saldran en verdadero con if.
//!--------------------------------NULL UNDEFINED AND NAN---------------------------------------
//# Tanto null como undefined van a representar un valor ausente es decir una variable sin valor pero la diferencia es que undefined es un valor asignado por javascript cuando detecta que una variable no tiene valor, y el null es cuando el programador le asigno especialmente el.
let indefinida01; // esta es una variable que no tiene valor (te saldra en la consola undefined)
console.log(indefinida01);
//----
let nulo0 = null; // digamos que es un valor intencionalmente asignado por el programador
console.log(null);
//----
//! NaN - Not a number
// javascript no mandara un NaN cuando asignemos o hagamos operaciones donde alguno de los datos no sea un numero
let noEsUnNumero = "hola" * 3.7;
//digamos que al valor hola lo multiplico (*) por el de 3.7, asi es como se saldria el NaN significa que no es un numero uno de los valores
//!----------------------------------------FUNCIONES-----------------------------------------
//# Las cosas suceden dentro de una funcion, una funcion es un bloque de codigo auto contenido osea que tiene su propio contenido y que se puede ejecutar en cualquier momento, puede aceptar parametros y devolver valores y que se puede ejecutar en cualquier momento. A las funciones tambien se les consideran objetos, son un tipo de dato muy especial y puedes ejecutar la funcion antes o despue de crearla
//Hay dos tipos de funciones, declaradas y expresadas
//* Funcion declarada
//Pon la palabra reservada function, una funcion siempre llevara parentesis y sus llaves y dentro de las llaves va el cuerpo de la funcion. seguido de function pones el nombre de la funcion.
function Funcion01() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
  console.log("---------");
}
// Para que se ejecute esta funcion debemos invocarla
//* Invocacion de funcion
Funcion01();
//* Ahora veamos como esta funcion devuelve un valor
//Cuando una funcion devuelve un valor nosotros debemos usar una palabra reservada llamada return

function FuncionQDevuelveValor01() {
  console.log("one");
  console.log("two");
  console.log("three");
  return "La funcion ha retornado una cadena de texto";
}
//Para invocarla debemos asignarle esta funcion a una variable y a partir de ahi ejecutar esa variable

let valorDeFuncion0 = FuncionQDevuelveValor01();
console.log(valorDeFuncion0);
console.log("------------------------");
//Ahora, esto es muy importante, que pasa si por ejemplo ponemos un return con un numero x o texto antes de la segunda console, para eso hagamos otra funcion

function FuncionQDevuelveValor022() {
  console.log("one");
  return 19;
  console.log("two");
  console.log("three");
}
let funcionQDevuelveValor022 = FuncionQDevuelveValor022();
console.log(funcionQDevuelveValor022);
console.log("---------------------------");

//Observen que la ejecucion en cuanto ejecuto el return, paró,
//Cuando una funcion dentro del cuerpo si el ejecutor encuentra la palabra reservada return, ignora lo que sigue del return y para ahi.

//* Ahora veamos como hacer que una funcion reciva valores
//Creemos una funcion que se llame saludar y vamos a decir que esta funcion va a recivir 2 valores, el nombre y la edad esos se ponen entre el parentesis, y por ejemplo hagamos un console log que diga mi nombre y edad, usemos las template strigs para eso.
function saludar0(nombre, edad) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}
//Y ahora ejecutemoslo y por ejemplo podemos decir que saludar tenga por nombre y edad los valores "binz" y 7 para que en el texto salga que mi nomber es binz y tengo 7 años. Ponlos en el orden que esten sus valores

saludar0("binz", 7);
console.log("------");

/** Pero tambien puedes poner por ejemplo que en vez de poner tu nombre y edad podriamos hacer que salga como desconocido escribiendo lo siguiente

function saludar(nombre = "desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

Las puse como un comentario para no confundir a la consola pero tu puedes aplicar uno de estos dos con la misma funcion
*/
//--------
//*Funcion expresada
//__ Funcion anonima
//# Esto es una funcion que no tiene nombre, usaremos una constante ya que no creo que cambiemos el valor de esta, si si la cambiaramos usariamos let
const funcionexpresada0 = function () {
  console.log(
    "Esto es una funcion expresada es decir, una funcion que se la ha asignado como valor a una variable."
  );
};
funcionexpresada0();
//! OJO A ESTA FUNCION NO LA PUEDES EJECUTAR ANTES DE CREARLA PERO A LA OTRO TIPO DE FUNCION SI
// pones la cosntante y escribes el "nombre de la funcion " seguido de eso pones la funcion, function blablabla, ya no tienes que repetir el nombre despues de escribir function ya que ya lo hiciste despues del const

//! te recomiendo jamas ejecutar una funcion antes de haber sido creada ya que puede causarte problemas
//!------------------------------------------------------ARREGLOS--------------------------------------------------------
//# un arreglo no es mas que una coleccion de elementos, estos elementos peuden ser de distinto tipo, numero, boolean, otro arreglo, cadenas de texto etc...
//Hay distintas maneras de declarar arreglos, yo declarare uno con una constante

const a01 = []; //(arreglo vacio)
const b01 = [1, true, "hola", ["A", "B", "C"]]; // incluso podemos poner un arreglo dentro de un arreglo y ponemos por ejemo abc
console.log(a01, "-", b01);
console.log(b01.length);
//En los arrreglos siempre van a empezar en la posicion numero cero si tenemos abc entonces tenemos 4 lengths el 0 1 2 3 y 4
//? Y que pasaria si quisiera imprimir solamente la palabra hola entonces tengo que acceder a la referencia o cordenada dentro de b00 donde se encuentra la palabra hola.
//En este caso esta en el numero 2 porque empieza del numero (0), el boolean (1) y la cadena de texto "hola" (2)
//Imprimelo asi
console.log(b01[2]);
//Ahora vean que en la tercer posicion pusimos una regla de 3 elementos y
//? que pasa si solo quisiera imprimir una de esas letras, digamos que la c

console.log(b01[3][2]); // imprimir el 3 elemento pero solo el segundo que esta dentro del elemento 3

//* Imaginate que en tu web tienes 100 productos de venta y a todos esos a lo mejor por defecto tienes que asignarle en un campo especifico un descuento y el descuento es de 0%, imaginate que lo estas guardando en un arreglo.

//! Este metodo te permite incializar un arreglo y asignarle a todas sus posiciones el mismo valor
const d01 = Array(100).fill(false); //* Accedemos con el objeto Array, entre parentesis y pones las 100 posiciones, luego pones el .fill (se refiere a llenar su  valor) y entre parentesis le ponemos el false en este caso porque su descuento es del 0%
console.log(d01);

//# tambien los arreglos tienen metodos por ejemplo

const colores00 = ["Rojo", "verde", "Azul"];
console.log(colores00);

//si tuvieramos la necesidad de agregar un nuevo elemento usamos el metodo de push y se agregara al final este
colores00.push("Amarillo");
console.log(colores00);

//* Y el metodo pop, este le quita el ultimo elemento osea al final
colores00.pop();
console.log(colores00);
//* El siguiente metodo nos permite ejectuar una funcion por cada uno de los elementos que tenga mi arreglo
// Imaginense que voy a formar una lista de viñetas de html y quiero que cada color vaya en un list item (colores00 rojo verde y azul)

colores00.forEach(function (el) {
  //el "el" significa elemento
  console.log(`<li>${el}</li>`);
});

//* Te saldran cada elemento(elemento se refiere a la lo de rojo,verde y azul)  por lista, ahora podemos hacer que cada elemento ocupe un numero para identificarlo

colores00.forEach(function (el, index) {
  //el "el" significa elemento
  console.log(`<li id="${index}">${el}</li>`);
});

//* asi te saldra su numero id

//* Igual en el mdn te saldran las distintas formas de hacer un arreglo y sus metodos
//!-----------------------------------------------OBJETOS----------------------------------------
//# Una frase entre los desarrolladores de javacsript "En JavaScript.. TODO es un objeto"
//Hagamos una constante con objetos ya que asi evito que algo externo modifique mi objeto, recuerden que con las llaves hacemos un objeto
//* Fijense que un objeto con llaves puede tener dentro cualquier tipo de de dato como ven en la constante binz0

const binz0 = {
  nombre: "binz",
  apellido: "pro",
  edad: 7,
  //--
  pasa_tiempos: ["Correr", "Hacer ejercicio"],
  soltero: true,
  contacto: {
    // a su vez el dato "contacto" es un objeto tambien, dentro de un objeto
    email: "binzprogamer@gmail.com",
    twitter: "@binzita",
    cel: "+52 sisisi sisisi sisisisi",
  },
  saludar: function () {
    //incluso puede llevar esta funcion
    console.log(`Hola :)`);
  },
  decirMiNombre00: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes encontrar como ${this.contacto.email} en correo`
    ); //Cuando tu quieras imprimir una propeidad dentro del objeto / dentro de otro objeto dentro usas el termino de this, proximamente veremos lo que el termino this da a referir en mas areas, This aqui es el contexto en el que nos encontramos y aqui hace referencia al mismo objeto
  },
};

//# dentro de un objeto sus variables se les llaman propiedades o atributos y a las funciones se les llaman metodos

console.log(binz0);

// Y de esta forma imprimimos un solo valor dentro del objeto, pones entre el parentesis el nombre de el atributo

console.log(binz0["nombre"]);

//* Pero hay otra forma que es la mas usada y certera, el punto que sigue en el nombre del objeto significa que accederemos a un atributo suyo

console.log(binz0.nombre);
console.log(binz0.edad);

//# Y para imprimir por ejempl solo un valor de la variable pasa_tiempos hacemos lo que aprendimos con este console log

console.log(binz0.pasa_tiempos[1]); //! (Recuerda entre [] pones el numero id de el valor dentro de la variable que quieras imprimir)

//* Y ahora imprimamos solo un valor de la variable contato QUE ES UN OBJETO LO CUAL IMPLICA QUE TAMbIEN LLEVA PUNTO EN VEZ DE PONER LOS CORCHETES []

console.log(binz0.contacto.email); // pones otro punto para acceder a los valores dentro de esta variable y pones el nombre de el valor que quieres imprimir sola

//Y finalmente la funcion que ya es obvio como ejecutarlo

binz0.saludar();

//* Ahora la funcion de decirMiNombre00 (ahi usamos el $ porque significa espacio, las llaves para poner el nombre de this, los puntos para ir entrando al objeto etc)

binz0.decirMiNombre00();

//* El siguiente metodo es un metodo que tiene el prototipo object que me permite listar todas las llaves del objeto

console.log(Object.keys(binz0));

//De igual manera vamos a tener un metodo muy parecido pero se llama values y que me formara un arreglo pero en lugar de darme las llaves, pues me da sus valores

console.log(Object.values(binz0));

//*Y para buscar una propiedad dentro del objeto usamos este comando, en este caso quiero buscar si se encuentra la propiedad nombre en el objeto binz0, si lo encuentra sera true y si no lo encuentra sera false en la consola

console.log(binz0.hasOwnProperty("nombre"));

//! Y aqui termina la informacion principal de javascript primer curso, vaya a la segunda carpeta del curso para continuar
