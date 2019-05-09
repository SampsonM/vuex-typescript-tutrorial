import { MutationTree, Module } from 'vuex';
import { LoginState, RootState } from '../types';

const LoginState: LoginState = {
    user: '',
    isLoggedIn: false,
};

const mutations: MutationTree< LoginState> = {
    login(state: LoginState) {
        state.isLoggedIn = true;
        state.user = 'Alex';
    },
};

export const login: Module< LoginState, RootState> = {
    namespaced: true,
    state: LoginState,
    mutations,
};
