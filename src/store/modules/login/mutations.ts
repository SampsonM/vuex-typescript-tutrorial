import { MutationTree } from 'vuex';
import { LoginState } from '@/types';

export const mutations: MutationTree< LoginState> = {
    login(state: LoginState) {
        state.isLoggedIn = true;
        state.user = 'Alex';
    },
};
