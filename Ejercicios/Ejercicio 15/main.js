class Persona {
  constructor(name, message, edad, genero) {
    this.name = name;
    this.message = message;
    this.edad = edad;
    this.genero = genero;
  }
}

//Botón de enviar esté escondido hasta que tenga una letra

var app = new Vue({
  el: "#app",
  data: {
    personas: [
      new Persona("Oscar", "Hola", 31, "M"),
      new Persona("Miguel", "Hola", 30, "M"),
      new Persona("Joel", "Hola", 21, "M"),
      new Persona("Ivone", "Hola", 21, "F")
    ],
    mi_formulario: {
      name: "",
      genero: "M",
      edad: 1,
      message: "",
    },
    genero: {
      F: "Femenino",
      M: "Masculino",
    }
  },
  methods: {
    addUser: function(user) {
      this.personas = [...this.personas, user];
      this.mi_formulario = new Persona("", "", "", "");
    }
  },
  computed: {
    buttonEnabled: function() {
      return this.mi_formulario.name && this.mi_formulario.genero;
    }
  },
});
