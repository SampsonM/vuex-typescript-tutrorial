import { MutationTree } from 'vuex';
import { TodoState, Todo } from '@/types';

export const mutations: MutationTree< TodoState> = {
    ADD_TODO(state, newTodo) {
      // Must create a copy to prevent unwanted two way binding happening
        const todo = {...newTodo};

        state.todos.push(todo);
    },
    TOGGLE_TODO(state, todo) {
        state.todos.forEach((t: Todo) => {
            if (t.text === todo.text) {
                t.checked = !t.checked;
            }
        });
    },
};
