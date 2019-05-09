import vue from 'vue';
import vuex from 'vuex';
import { todos } from './todos';
import { login } from './login';

vue.use(vuex);

export default new vuex.Store({
  modules: {
    todos,
    login,
  },
});
