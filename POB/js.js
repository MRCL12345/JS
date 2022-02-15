{
  //!-----------------------PROTOTIPOS--------------------
  //# Dentro de la POO (Programacion Orientada a Objetos) hay 4 conceptos importantes de entender
  /*
_Clases
_Objetos
  _Atributos
  _Metodos
*/
  /*
! Las Clases:
* Una clase es un modelo a seguir, algo que nos sirve como un esquema o modelo a seguir para de ahi basarnos y poder generar instancias.

! Los Objetos: 
* Un objeto es una instancia de una clase, Una copia de ese modelo a seguir, como cuando haces una copia de algun proyecto y lo usas en vez de usar el original para no tener problema al equivocarte.
  Los Objetos van a tener 2 facultades
    ! Atributos:
    * Es una caracteristica o propiedad del objeto, o en otras palabras son como variables dentro de un objeto
    !Metodos:
    * Son las acciones que un objeto puede realizar.
    * Como el If (como dar condiciones), si tu haces esto, if (hacer esto = true) por ejemplo. 
*/
  /*
# Una manera censilla de definir un prototipo en Js,
# Es un mecanismo por el cual un objeto va a poder heredar de un objeto padre, caracteristicas, osea atributos y metodos es decir funciones.
*/
  const animal = {
    nombre: "scooby",
    ladrar() {
      console.log("Goof, Goof");
    },
  };
  console.log(animal);
  /* Supongamos que queremos copiar todo el codigo de la constante animal y cambiarle el nombre a un perro normal, tendrias que copiar tooooodo eso, y si el codigo es mas largo, sera mas complicado.
!Para eso podemos hacer un prototipo en el que usemos este codigo para crear muchos animales sin copiar y copiar y copiar.
*/
  //* Funcion Constructora
  function Animal(nombre, tipo) {
    //Atributos:
    this.nombre = nombre;
    this.tipo = tipo;
    //Metodos:
    this.ladrar = function () {
      console.log("Soy un animal");
    };
  }
  /*
Hagamos la funcion y que en los atributos (nombre y tipo) pongamos que su valor sera lo que el usuario ponga en la variable nombre y tipo
!OJO en lo que sigue, en una funcion constructora no podremos declarar otra funcion dentro igual a como lo hicimos en la constante de animal, para eso tendremos que poner el this para que no haya errores y en el igual declaremos la funcion.
*/
  /*
Ahora, regresando mas a fondo con lo de no tener que copiar el codigo de nuevo, podemos hacer lo siguiente con un prototipo
*/
  const scooby2 = new Animal("Scooby2", "Macho");
  console.log(scooby2);
  /*
Solo hagamos una constante, con nombre, y de ahi es donde pondremos la palabra reservada NEW que nos permitira crear un nuevo objeto del tipo que le especifiquemos como una cadena de texto, arreglo.
Pero lo que yo quiero ahora es crear una nueva constante basada en la funcion constructora llamada Animal, dentro de los parentesis pones el valor ahora de los parametros de esta nueva constante
*/
  // ! Ahora como se va a estar duplicando en este caso la funcion ladrar, lo mejor sera sacar la funcion de esa constante y ahora si copiar la clase, porque estara ocupado mucho espacio si se duplica mu10chas veces la misma funcion
  /*
//* Funcion Constructora
function Animal(nombre, tipo) {
  *Atributos:
  this.nombre = nombre;
  this.tipo = tipo;

}  
*Metodos: (fuera de la funcion)
Animal.prototype.ladrar = function () {
    console.log("Soy un animal");
};
*/
}
{
  //!---------------------------HERENCIA PROTOTIPICA---------------------------------------
  //# Capacidad de heredar caracteristicas de un padre a un hijo
  //Hagamos un prototipo llamado Animal
  function Animal_de_ciudad(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.hablar = console.log("Soy un animal");
  }
  //Ahora imaginense que quiero hacer un perro, y perro como es un animal en la vida real, quiero que perro herede las caracteristicas de el prototipo animal.
  function perro(nombre, genero, tamanio) {
    this.modelo_a_seguir = Animal_de_ciudad;
    this.modelo_a_seguir(nombre, genero);
    this.tamanio = tamanio;
  }
  perro("nieve", "schnnauzer", "miniatura");
  /*
  En el modelo a seguir, le estoy diciendo que el prototipo perro tendra un elemento padre que va a ser Animal
Luego solo hay que ejecutar ese metodo "modelo a seguir" y como este es la funcion constructora de Animal pues recibira los dos parametros de Animal osea el nombre y el genero.
Y agreguemos el atributo de tamaño que no esta en Animal pero si en perro.

! Luego aqui cometemos el error de que cada vez que yo haga una instancia de la funcion constructora perro pues estaria clonando siempre el prototipo animal, y hara pesado el codigo.
_Aasi que hay que hay que decirle a la pc que el prototipo perro sera una instancia de animal y que ademas esto hara la herencia
  */
  //* HERENCIA Y ASIGNACION DE INSTANCIA DE ANIMAL
  perro.prototype = new Animal_de_ciudad();
  perro.prototype.constructor = perro;
  //Ahora si por ejenplo quieres que en lugar de que diga "soy un animal" ladre, porque es un perro, a esto tambien se le llama SOBRE ESCRITURA DE METODOS DEL PROTOTIPO PADRE
  //*Sobre escritura de metodos del prototipo padre
  perro.prototype.hablar = function () {
    console.log("Guau Guau");
  };
  //o tambien podemos hacerle una funcion propia que sea de ladrar, le pondre de ruñir
  perro.prototype.ruñir = function () {
    console.log("Guuauu!! Guauu!!");
  };
}
//!------------------------------------------LAS CLASES------------------------------------
{
  /*
  # Una Clase en javascript a pesar de su modo de escritura el compilador lo interpretara como un prototipo y no como las clases que vemos en otros lenguajes
  _Las Clases en JS no son mas que simplificar el modo de escritura de un prototipo
  * Clases 
  */

  class Animal {
    // Se agrega algo llamado constructor en el que pondremos los parametros que queremos usar, si quieres poner un metodo ponlo fuera del constructor pero adentro de la clase
    constructor(genero, tipo) {
      this.genero = genero;
      this.tipo = tipo;
    }
    // Metodos
    mensaje() {
      console.log("Soy un animal");
    }
  }
  //* Atributos
  // El extends es como decir que el padre de esta clase es Animal
  class Perro extends Animal {
    constructor(nombre, raza, tamanio) {
      // con el metodo super() se manda a llamar el constructor de la clase padre
      super(nombre, raza);
      // Aqui agrego tamanio en la clase perro pero esta es exlusiva de perro
      this.tamanio = tamanio;
    }
    // Aqui agrego el metodo que usara perro que tambien es exclusiva de el
    ladrar() {
      console.log("Guau!!! Guauu!!!");
    }
  }

  const nieve = new Perro("Nieve", "Schnnauzer", "Miniatura");
  nieve.ladrar();
  nieve.mensaje();
}
