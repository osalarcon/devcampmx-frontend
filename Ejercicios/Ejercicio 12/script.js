// var empleado = {
//   nombre: "Oscar Alarcón",
//   rfc: "...",
//   salario: 0,
//   puesto: "Puesto",
//   departamento: "desarrollo",
//   barrer: function() {
//     console.log("Barriendo");
//   },
//   sacudir: function() {
//     console.log("sacudiendo");
//   },
//   persona: {
//     direccion: "direccion",
//     fechaNacimiento: "16/03/1987"
//   },
//   saludar: function(nombre) {
//     console.log("Hola " + nombre + " " + this.nombre);
//   }
// };
// console.log(empleado.nombre);
// console.log(empleado.rfc);
// empleado.barrer();
// empleado.sacudir();
// empleado.saludar("Martin");

/**
 * Objeto que tiene la información general de una universidad
 */
// var escuela = {
//   nombre: "Universidad",
//   director: {
//     nombre: "Juanito Garza Sada",
//     fechaNacimiento: new Date(1957, 06, 03),
//     edad: function() {
//       var edadMS = new Date() - this.fechaNacimiento;
//       return Math.floor(edadMS / (1000 * 60 * 60 * 24 * 30 * 12));
//     }
//   },
//   salones: [
//     {
//       nombre: "Salon A1",
//       maxAlumnos: 30
//     },
//     {
//       nombre: "Salon A1",
//       maxAlumnos: 40
//     },
//     {
//       nombre: "Salon A2",
//       maxAlumnos: 40
//     }
//   ],
//   carreras: [

//     {
//       nombre: "Físico Matemáticas",
//       clave: "FM"
//     },
//     {
//       nombre: "Sociales",
//       clave: "FM"
//     }
//   ],
//   /**
//    * Obtiene número de salones de la escuela
//    */
//   salonesActuales: function() {
//     return this.salones.length;
//   },
//   /**
//    * Regresa si el salón tiene la carrera ingresada
//    */
//   tieneCarrera: function(nombreCarrera) {
//     return this.carreras.some(
//       carrera => carrera.nombre.toLowerCase() === nombreCarrera.toLowerCase()
//     );
//   }
// };
// console.log(escuela);
// console.log(escuela.salonesActuales());
// console.log(escuela.tieneCarrera("Sociales"));
// console.log(escuela.tieneCarrera("Matemáticas"));


// class Figura {
//   numeroDeLados = 4;
//   medida = 3;
// }

// var circulo = new Figura;
// var cuadrado = new Figura;

// class Figura {
//   constructor(numeroDeLados, medidaLado) {
//     this.numeroDeLados = numeroDeLados;
//     this.medidaLado = medidaLado;
//   }

//   perimetro() {
//     return this.numeroDeLados * this.medidaLado;
//   }
// }

// var circulo = new Figura(0,0);
// var cuadrado = new Figura(3,3);
// var rectangulo = new Figura(4,1);


/** 
 * Clase de Persona
*/
class Person {
  constructor(nombre, fechaNacimiento) {
    this.fechaNacimiento = fechaNacimiento;
    this.nombre = nombre;
  }

  getEdad() {
    var edadMS = new Date() - this.fechaNacimiento;
    return Math.floor(edadMS / (1000 * 60 * 60 * 24 * 30 * 12));
  }
}

/** 
 * Clase de Salon
*/
class Salon {
  constructor(nombre, maxAlumnos) {
    this.nombre = nombre;
    this.maxAlumnos = maxAlumnos;
  }
}

/** 
 * Clase de Carreras
*/
class Carrera {
  constructor(nombre, clave) {
    this.nombre = nombre;
    this.clave = clave;
  }
}

/** 
 * Clase de Escuela
*/
class Escuela {

  constructor(nombre, director) {
    this.nombre = nombre;
    this.director = director;
    this.carreras = [];
    this.salones = [];
  }

  /**
   * Inserta Carreras
   * @param {*} salones
   */
  pushCarreras(carrera) {
    this.carreras.push(carrera);
  }

  /**
   * Inserta Salones
   * @param {*} salones
   */
  pushSalones(salones) {
    this.salones.push(salones);
  }

  /**
   * Obtiene número de salones de la escuela
   */
  getNoSalonesActuales() {
    return this.salones.length;
  }

  /**
   * Regresa si el salón tiene la carrera ingresada
   * @param {*} nombreCarrera Carrera que se desea buscar
   * @returns Booleano Carrera Existe o No
   */
  existeCarrera(nombreCarrera) {
    return this.carreras.some(
      carrera => carrera.nombre.toLowerCase() === nombreCarrera.toLowerCase()
    );
  }
}

var director = new Person("Juanito Garza Sada", new Date(1957, 06, 03));

//Instancia escuela
var escuela = new Escuela("Universidad", director);
//Inserta instancia Carreras
escuela.pushCarreras(new Carrera("Física", "FC"));
escuela.pushCarreras(new Carrera("Sociales", "SC"));
//Inserta instancia Salones
escuela.pushSalones(new Salon("Salon A1", 30));
escuela.pushSalones(new Salon("Salon A2", 30));
escuela.pushSalones(new Salon("Salon A3", 29));