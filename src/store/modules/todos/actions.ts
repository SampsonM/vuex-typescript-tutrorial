import { TodoActions, Todo } from '@/types';

export const actions: TodoActions = {
    async addTodoAsync({ commit, rootState }, payload) {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + payload);

        const data: any = response.json();

        const todo: Todo = {
            text: rootState.login.user + ' ' + data.title,
            checked: false,
            id: rootState.todos.todos.length,
        };

        commit('ADD_TODO', todo);
    },
  };
