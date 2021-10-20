import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { Product } from "./types";
import { RootState } from "../index";

export interface ProductState {
  productList: Product[];
}

const namespaced: boolean = true;

export const product: Module<ProductState, RootState> = {
  namespaced: true,
  state: {
    productList: [],
  },
  getters,
  actions,
  mutations,
};
