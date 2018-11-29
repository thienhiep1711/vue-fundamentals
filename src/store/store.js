import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: ""
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
});
