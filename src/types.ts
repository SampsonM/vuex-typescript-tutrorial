import { ActionTree, MutationTree } from 'vuex';

// State
export interface RootState {
  todos: TodoState;
  login: LoginState;
}

export interface TodoState {
  todos: Todo[];
}

export interface LoginState {
  user: string;
  isLoggedIn: boolean;
}

export interface Todo {
  text: string;
  checked: boolean;
  id: number;
}

// STORE

type TodoMutationNames = 'ADD_TODO' | 'TOGGLE_TODO';
type TodoCommit = (action: TodoMutationNames, todo: Todo) => void;

// Actions Interface
export interface TodoActions extends ActionTree< TodoState, RootState> {
  addTodoAsync: (c: {commit: TodoCommit, rootState: RootState}, payload: Todo) => void;
}

// Mutations Interface
export interface TodoMutations extends MutationTree< TodoState> {
  ADD_TODO: (state: TodoState, todo: Todo) => void;
  TODDLE_TODO: (state: TodoState, todo: Todo) => void;
}
