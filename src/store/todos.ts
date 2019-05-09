import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { State, Todo } from '../types';

export const state: State = {
  todos: [
    { text: 'buys milks', checked: true },
    { text: 'buys hair', checked: true },
    { text: 'buys nuts', checked: false },
  ],
};

export const getters: GetterTree< State, any> = {
  todos: (rootState) => rootState.todos.filter((todo: any) => !todo.checked),
  doneTodos: (rootState) => rootState.todos.filter((todo: any) => todo.checked),
};

export const mutations: MutationTree< State> = {
  addTodo(rootState, newTodo) {
    // Must create a copy to prevent unwanted two way binding happening
    const todo = {...newTodo};

    rootState.todos.push(todo);
  },
  toggleTodo(rootState, todo) {
    todo.checked = !todo.checked;
  },
};

export const actions: ActionTree< State, any> = {
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
