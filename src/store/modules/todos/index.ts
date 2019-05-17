import { Module } from 'vuex';
import { TodoState, RootState } from '@/types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

const TodoState: TodoState = {
  todos: [
    { id: 0, text: 'buys milks', checked: true },
    { id: 1, text: 'buys hair', checked: true },
    { id: 2, text: 'buys nuts', checked: true },
  ],
};

export const todos: Module< TodoState, RootState> = {
  namespaced: true,
  state: TodoState,
  getters,
  mutations,
  actions,
};
