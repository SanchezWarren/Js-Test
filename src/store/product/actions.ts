import { ActionTree } from "vuex";
import { ProductState } from "./index";
import { RootState } from "../index";

export const actions: ActionTree<ProductState, RootState> = {
  fetchData({ commit }): any {
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => commit("updateProducts", json))
      .catch((error) => {
        console.log(error);
      });
  },
};
