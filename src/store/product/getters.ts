import { GetterTree } from "vuex";
import { ProductState } from "./index";
import { RootState } from "../index";
import { Product } from "./types";

export const getters: GetterTree<ProductState, RootState> = {
  getProducts(state): Product[] {
    return state.productList;
  },

  getTheproduct: (state) => (id: number): any => {
    return state.productList.find((x) => x.id === id);
  },
};
