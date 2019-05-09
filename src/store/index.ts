import vue from 'vue';
import vuex from 'vuex';
import { state, getters, mutations, actions } from './todos';

vue.use(vuex);

export default new vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
