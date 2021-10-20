<template>
  <div class="list row">
    <h4>Product List</h4>

    <!-- either loading spinner or Product list -->
    <div v-if="isLoading">
      <Spinner />
    </div>

    <div v-else>
      <!-- product container -->
      <!-- Controls -->
      <div class="controls d-flex justify-content-between">
        <div class="d-flex flex-row  input-group-btn mb-4 h-1">
          <button
            type="button"
            class="btn btn-left btn-light btn-number list-group-item p-2"
            @click="perPage--"
          >
            -
          </button>
          <input
            class="marker form-control list-group-item input-number p-0 text-center"
            type="text"
            :placeholder="perPage"
            readonly
          />
          <button
            type="button"
            class="btn btn-right btn-light btn-number list-group-item p-2"
            @click="perPage++"
          >
            +
          </button>
          <h6 class="align-self-end text-label ms-2">Products per Page</h6>
        </div>
        <!-- Pagination Nav -->
        <nav>
          <ul class="pagination">
            <li class="page-item">
              <button type="button" class="page-link" v-if="currentPage != 1" @click="currentPage--">
                Previous
              </button>
            </li>
            <li class="page-item d-flex">
              <button
                type="button"
                class="page-link"
                v-for="(pageNumber, id) in pagesIndex.slice(currentPage - 1, currentPage + 5)"
                :key="id"
                @click="currentPage = pageNumber"
              >
                {{ pageNumber }}
              </button>
            </li>
            <li class="page-item">
              <button
                type="button"
                @click="currentPage++"
                v-if="currentPage < pagesIndex.length"
                class="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
        <!-- /Pagination Nav -->
      </div>
      <!-- /controls -->

      <!-- Product Grid -->
      <ul class="product-grid">
        <ProductCard :product="product" v-for="(product, index) in displayedPosts()" :key="index" />
      </ul>
    </div>
    <!-- /v-else container -->
  </div>
  <!-- /list row -->
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Product } from "@/store/product/types";
import ProductCard from "@/components/ProductCard.vue";
import Spinner from "@/components/Spinner.vue";

@Component({
  components: {
    Spinner,
    ProductCard,
  },
})
export default class ProductsList extends Vue {
  private products: Product[] = [];
  private currentPage: number = 1;
  private perPage: number = 9;
  private pagesIndex: number[] = [];
  private currentIndex: number = -1;
  private isLoading: boolean = true;

  getProducts() {
    this.products = this.$store.getters["product/getProducts"];
  }

  setPages() {
    let numberOfPages = Math.ceil(this.products.length / this.perPage);
    this.pagesIndex = [];
    for (let index = 1; index <= numberOfPages; index++) {
      this.pagesIndex.push(index);
    }
  }

  paginate(products: Product[]) {
    let page = this.currentPage;
    let perPage = this.perPage;
    let from = page * perPage - perPage;
    let to = page * perPage;
    return products.slice(from, to);
  }

  displayedPosts() {
    return this.paginate(this.products);
  }
  @Watch("perPage")
  onPrivateChange() {
    this.setPages();
  }

  async mounted() {
    this.isLoading = true;
    try {
      await this.$store.dispatch("product/fetchData");
      this.products = this.$store.getters["product/getProducts"];
      this.setPages();
    } catch (error) {
      console.log(error);
    }
    this.isLoading = false;
  }
}
</script>

<style scoped>
.list-group-item {
  font-size: 0.7rem;
  width: 2rem;
}
.btn-right {
  border-radius: 0% 25% 25% 0%;
}
.btn-left {
  border-radius: 25% 0 0 25%;
}
.marker {
  width: 3rem;
  border-radius: 0;
  border: 0;
}
.text-label {
  color: gray;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(221px, 1fr));
  grid-gap: 3vw;
  padding-left: 0;
}

@media (max-width: 555px) {
  .controls {
    flex-direction: column;
  }
}
</style>
