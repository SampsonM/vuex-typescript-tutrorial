import { GetterTree } from 'vuex';
import { TodoState, RootState } from '@/types';

type TodoGetter = GetterTree< TodoState, RootState>;

export const getters: TodoGetter = {
    // Params => (state, getters, rootState, rootGetters)
    todos: (state) => state.todos.filter((todo: any) => !todo.checked),
    doneTodos: (state) => state.todos.filter((todo: any) => todo.checked),
};
