import { GetterTree, MutationTree, ActionTree } from 'vuex';
import { TodoState, Todo, RootState } from '../types';

type TodoGetter = GetterTree< TodoState, RootState>;

const TodoState: TodoState = {
  todos: [
    { text: 'buys milks', checked: true },
    { text: 'buys hair', checked: true },
    { text: 'buys nuts', checked: false },
  ],
};

const getters: TodoGetter = {
  // Params => (state, getters, rootState, rootGetters)
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
    // tslint:disable-next-line:no-console
    console.log(todo);
    todo.checked = !todo.checked;
  },
};

const actions: ActionTree< TodoState, RootState> = {
  async addTodoAsync({ commit, rootState }, payload) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + payload);

    const data = await response.json();

    const todo: Todo = {
      text: rootState.login.user + ' ' + data.title,
      checked: false,
    };

    commit('addTodo', todo);
  },
};

export const todos = {
  state: TodoState,
  getters,
  mutations,
  actions,
};
