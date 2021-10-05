import vue from 'vue';
import vuex from 'vuex';
import state from './state';
import mutations from './mutation';

vue.use(vuex);

const store = new vuex.Store({
  state,
  mutations
})

export default store;