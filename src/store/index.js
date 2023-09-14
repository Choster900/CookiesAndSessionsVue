import { createStore } from "vuex";
import { v4 as uuid, v4 } from "uuid";
export default createStore({
  state: {
    todos: [
      { id: "1", text: "Tarea 1", completed: true },
      { id: "2", text: "Tarea 2", completed: false },
      { id: "3", text: "Tarea 3", completed: false },
      { id: "4", text: "Tarea 4", completed: false },
      { id: "5", text: "Tarea 5", completed: false },
    ],
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    },
    crearteTodo(state, text = "") {
      if (text.length <= 1) return;

      state.todos.push({ id: v4(), completed: false, text: text });
    },
  },
  actions: {},
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((t) => !t.completed);
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter((t) => t.completed);
    },
    allTodos(state, getters, rootState) {
      return state.todos;
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "completed":
          return getters.completedTodos;
        case "pending":
          return getters.pendingTodos;
      }
    },
  },
  modules: {},
});
