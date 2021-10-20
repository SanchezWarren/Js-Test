import { MutationTree } from "vuex";
import { ProductState } from "./index";

export const mutations: MutationTree<ProductState> = {
  updateProducts(state, payload) {
    state.productList = payload;
  },
};
