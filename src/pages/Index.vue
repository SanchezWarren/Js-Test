<template>
  <div>
    <div class="card align-items-center">
      <div class="wrap">
        <h1 class="align-center ">Welcome to MyShop</h1>
        <h3>Take a look to our products</h3>
        <a href="/products" class="btn btn-primary">Go Shopping</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ProductDetails extends Vue {}
</script>

<style scoped>
.card {
  position: relative;
  border: 0;
  border-radius: 0.25rem;
  background-color: white;
  box-shadow: 5px 5px 5px 5px #e9ecef;
  padding: 4rem;
  margin-bottom: 2rem;
}

.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1rem;
  background-color: #ffffffb0;
}

@media (max-width: 970px) {
  .card {
    flex-direction: column;
  }
}
@media (max-width: 555px) {
  .card {
    flex-basis: 100%;
  }
}
</style>
