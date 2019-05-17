import vue from 'vue';
import vuex from 'vuex';
import { todos } from './modules/todos';
import { login } from './modules/login';

vue.use(vuex);

export default new vuex.Store({
  modules: {
    todos,
    login,
  },
});
