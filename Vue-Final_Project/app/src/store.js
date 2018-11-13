import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const mutations = {
  addTask(state, newTask) {
    newTask["id"] = state.tasks.length;
    state.tasks.push(newTask);
  },
  setSelection(state, selection) {
    state.menuSelection = selection;
  },
  setDateSelection(state, selection) {
    state.dateSelection = selection;
  }
};

const actions = {
  // addTask: ({ commit }) => commit("addTask"),
  addTask: (context, newTask) => {
    setTimeout(function() {
      context.commit("addTask", newTask);
    }, 1000);
  },
  setSelection: (context, selection) => {
    context.commit("setSelection", selection);
  },
  setDateSelection: (context, selection) => {
    context.commit("setDateSelection", selection);
  }
};

// getters are functions
const getters = {
  allTask: state => {
    return state.tasks;
  },
  menuSelection: state => {
    return state.menuSelection;
  }
};

export default new Vuex.Store({
  state: {
    tasks: [
    ],
    dateSelection: '',
    menuSelection: 0
  },
  getters,
  actions,
  mutations
});
