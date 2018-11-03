var app = new Vue({
  el: "#directivas",
  data: {
    color: "pink",
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
          name: newTask,
          completed: false
        };
        this.todos.push(taskObject);
        this.newTask = "";
      }
    },
    styles: function(task) {
      return {textDecoration: task.completed ? "line-through" : "none", color:task.completed ? "red" : "green"};
    }
  },
  computed: {
    /**
     * retorna solo tareas sin check
     */
    unCompletedTodos: function() {
      return this.todos.filter(function(task) {
        return !task.completed;
      });
    },
    completedTodos: function() {
      return this.todos.filter(function(task) {
        return task.completed;
      });
    }
  }
});
