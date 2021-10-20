<template>
  <div>
    <a href="/products">back to Product List</a>
    <h1>Product Details</h1>
    <div class="card align-items-center">
      <img :src="product.image" class="card-img-top " />
      <div class="card-body">
        <h2 class="card-title mb-2">{{ product.title }}</h2>
        <span class="badge bg-success mb-4">{{ product.category }}</span>
        <h5 class="text-end">{{ product.description }}</h5>

        <div class="d-flex flex-column align-items-end mb-4">
          <div class="star-cont ">
            <img
              src="@/assets/star.svg"
              v-for="i in getStars()"
              :key="i"
              class="me-1"
              width="15"
              height="15"
            />
          </div>
          <div class="comm-cont">
            {{ product.rating.count }}<img src="@/assets/comments.svg" width="15" height="15" class="ms-1" />
          </div>
        </div>
        <p class="card-text text-success">{{ product.price }}€</p>
        <a href="#" class="btn btn-primary disabled">Buy Now</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Product } from "@/store/product/types";

@Component({})
export default class ProductDetails extends Vue {
  @Prop(Number) "id": Number;
  private product: Product = ({} as any) as Product;

  @Getter("getTheproduct", { namespace: "product" })
  private getTheproduct!: (id: Number) => Product;

  getStars(): number {
    return Math.floor(this.product.rating.rate);
  }

  async mounted() {
    try {
      await this.$store.dispatch("product/fetchData");
      this.product = this.getTheproduct(this.id);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-basis: 20%;
  width: 100%;
  background-clip: border-box;
  border: 0;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #e9ecef;
  padding: 4rem;
  margin-bottom: 2rem;
}

.card-img-top {
  position: relative;
  width: 30%;
  height: 60%;
}
.card-img-top img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  vertical-align: middle;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.card-body,
h5 {
  font-size: 1rem;
}

img {
  vertical-align: sub;
}

@media (max-width: 970px) {
  .card {
    flex-direction: column;
  }
  .card-img-top {
    width: 100%;
  }
}

@media (max-width: 555px) {
  .card-img-top img {
    width: 100vw;
  }
}
</style>
