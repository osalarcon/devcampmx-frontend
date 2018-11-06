import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mutations = {
  addTask(state, newTask) {
    state.tasks.push(newTask);
  }
};

const actions = {
  // addTask: ({ commit }) => commit("addTask"),
  addTask: (context, newTask) => {
    setTimeout(function() {
      context.commit("addTask", newTask);
    }, 1000);
  }
};

// getters are functions
const getters = {
  allTask: state => {
    return state.tasks;
  }
};

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, name: "task 1", date: new Date(), state: 0 },
      { id: 2, name: "task 2", date: new Date(), state: 0 }
    ]
  },
  getters,
  actions,
  mutations
});
