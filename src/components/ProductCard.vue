<template>
  <div class="card" @click="goTo(product.id)">
    <div class="card-img-top">
      <img :src="product.image" alt="" />
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text text-success">{{ product.price }} €</p>
      <div class="ratings d-flex justify-content-between">
        <div class="star-cont">
          <img src="@/assets/star.svg" v-for="i in getStars()" :key="i" class="me-1" width="15" height="15" />
        </div>
        <div class="comm-cont">
          {{ product.rating.count }}<img src="@/assets/comments.svg" width="15" height="15" class="ms-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Product } from "@/store/product/types";

@Component({})
export default class ProductDetails extends Vue {
  @Prop({ type: Object as () => Product }) "product": Product;

  goTo(id: any) {
    this.$router.push({ name: "product-details", params: { id: id } });
  }

  getStars(): number {
    return Math.floor(this.product.rating.rate);
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  height: 40vh;
  background-clip: border-box;
  border: 0;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #e9ecef;
  cursor: pointer;
}
.card:hover {
  box-shadow: 7px 7px 7px 7px #cfd2d4;
}

.card-img-top {
  position: relative;
  width: 100%;
  height: 60%;
  padding: 1rem;
}
.card-img-top img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  vertical-align: middle;
}

.card-body,
h5 {
  font-size: 0.8rem;
}

img {
  vertical-align: sub;
}

@media (max-width: 970px) {
  .card {
    flex-basis: 31%;
  }
}
@media (max-width: 555px) {
  .card {
    flex-basis: 100%;
  }
}
</style>
