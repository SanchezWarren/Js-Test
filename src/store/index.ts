import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { product } from "./product/index";

Vue.use(Vuex);

export interface RootState {
  isMobile: boolean;
}

const store: StoreOptions<RootState> = {
  state: {
    isMobile: true,
  },
  modules: {
    product,
  },
};

export default new Vuex.Store<RootState>(store);
