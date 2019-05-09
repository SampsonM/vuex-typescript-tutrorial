import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { TodoState, Todo } from '../types';

const TodoState: TodoState = {
  todos: [
    { text: 'buys milks', checked: true },
    { text: 'buys hair', checked: true },
    { text: 'buys nuts', checked: false },
  ],
};

const getters: GetterTree< TodoState, any> = {
  todos: (state) => state.todos.filter((todo: any) => !todo.checked),
  doneTodos: (state) => state.todos.filter((todo: any) => todo.checked),
};

const mutations: MutationTree< TodoState> = {
  addTodo(state, newTodo) {
    // Must create a copy to prevent unwanted two way binding happening
    const todo = {...newTodo};

    state.todos.push(todo);
  },
  toggleTodo(state, todo) {
    state.todos.forEach((t) => {
      // tslint:disable-next-line:no-console
      console.log(t);
    });
  },
};

const actions: ActionTree< TodoState, any> = {
  async addTodoAsync({ commit }, payload) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + payload);

    const data = await response.json();

    const todo: Todo = {
      text: data.title,
      checked: false,
    };

    commit('addTodo', todo);
  },
};

export const todos = {
  namespaced: true,
  state: TodoState,
  getters,
  mutations,
  actions,
};
