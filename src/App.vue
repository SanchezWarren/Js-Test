<template>
  <div id="app" class="">
    <nav class=" navbar navbar-expand navbar-light shadow p-3 mb-5 bg-white">
      <div class="container">
        <a class="navbar-brand" href="/products">
          <img src="@/assets/logo.png" class="me-2" width="30" height="30" alt="" />MyShop
        </a>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <a href="/About" class="nav-link">About</a>
          </li>
        </div>
      </div>
    </nav>

    <div class="comp-container container mt-3">
      <router-view />
    </div>
    <footer class="text-center text-black-50 shadow p-3 bg-white">MyShop - 2021</footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
body {
  background-color: #fdfdfd;
}

body,
#app {
  min-height: 100%;
}

.comp-container {
  min-height: 77vh;
}
</style>
