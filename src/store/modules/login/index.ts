import { Module } from 'vuex';
import { LoginState, RootState } from '@/types';
import { mutations } from './mutations';

const LoginState: LoginState = {
    user: '',
    isLoggedIn: false,
};

export const login: Module< LoginState, RootState> = {
    namespaced: true,
    state: LoginState,
    mutations,
};
