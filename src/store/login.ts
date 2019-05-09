import { MutationTree } from 'vuex';
import { LoginState } from '../types';

const LoginState: LoginState = {
    user: '',
    isLoggedIn: false,
};

const mutations: MutationTree< LoginState> = {
    login(state) {
        state.isLoggedIn = true;
        state.user = 'Alex';
    },
};

export const login = {
    state: LoginState,
    mutations,
};
