// var app = new Vue({
//   el: "#app",
//   /**
//    * Es donde se almacenarán las variables
//    */
//   data: {
//     hello: "Hola",
//     user: {
//       name: "Oscar Alarcón Rodríguez",
//       age: 31
//     }
//   },
//   /**
//    * Funciones para la página
//    */
//   methods: {
//     cambiarSaludo: function(name) {
//       this.name = "Carlos";
//       this.hello = "Texto cambiado";
//     }
//   },
//   /**
//    *
//    */
//   computed: {}
// });

var app = new Vue({
  el: "#app",
  /**
   * Es donde se almacenarán las variables
   */
  data: {
    counter: 0
  },
  /**
   * Funciones para la página
   */
  methods: {
    sumar: function(number) {
      this.counter += +number;
    },
    restar: function(number) {
      let resta = this.counter - number;
      if (resta >= 0) {
        this.counter -= number;
      }
    }
  },
  /**
   *
   */
  computed: {}
});

var app = new Vue({
  el: "#directivas",
  data: {
    visible: false,
    other: true,
    newTask: "",
    todos: []
  },
  methods: {
    login: function() {
      this.visible = !this.visible;
    },
    addTask: function(newTask) {
      if (newTask) {
        var taskObject = {
          tarea: newTask,
          id: this.todos.length
        };
        this.todos.push(taskObject);
        this.newTask = "";
      }
    }
  }
});
