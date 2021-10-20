# JS Interview Test
##### by  Miguel Pájaro
#

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is the test for Popsy.app

- see the demo [here](https://yourcoach.web.app)

## Goal
Create an UI web application that retrieves and displays products from the https://fakestoreapi.com/.

## Features

- Using Vue.js
- Routing with Vue Router
- State Managing with Vuex
- Typescript
- Bootstrap
- Loading Spinner
- Pagination and Products per page Option
- Fetch API
- Basic Error Catching from the API

## Impementation

```bash
.src
├
├── assets
├── components
├── pages
├── router
└── store
 - App.vue
 - main.ts 
```
 The project structure on gitHub.
 Following a clear separation of concerns like the router, the store, pages...

 Redirects for the router are separated on pages:
 ```bash
 ├── pages
│   ├── About.vue
│   ├── Index.vue
│   ├── ProductDetails.vue
│   └── ProductsList.vue
 ```
 
 Functionalities separated as well into components:
 ```bash
├── components
│   ├── ProductCard.vue
│   └── Spinner.vue
 ```
 
 
 State manager divided into modules, with their own functionalities separated aswell:
 Simple in this case. index.ts for the main state and product module on product folder
 ```bash
└── store
    ├── index.ts
    └── product
        ├── actions.ts
        ├── getters.ts
        ├── index.ts
        ├── mutations.ts
        └── types.ts
 ```

types.ts defines the TypeScript Interface for the data-type fetched from the BackEnd
```javascript I'm A tab
export interface Product {
    id: null;
    title: string;
    price: null;
    category: null;
    description: string;
    rating: { count: number, rate: number},
    image: string;
  }
```

## Use of Vue Class Component
[Vue Class Component](https://class-component.vuejs.org/) is a library that lets you make your Vue components in class-style syntax.
By defining your component in class-style, you not only change the syntax but also can utilize some ECMAScript language features such as class inheritance and decorators.
```javascript
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
  ...
```
Code is cleaner and, most important, Vue Class Component is TypeScript friendly ;)


## Basic Error Catching from the Backend
Right now only thrown erros from the Backend are catched and loged to the console.
It would be easy to add a module to the State Manager to store the errors and control any behavior in response, aswell as bring information to the user through nicely designed dialogs, for example.


## About Unit Testing and RxJS
These are topics that I am not related to (yet), but that I would love to learn about.


## Installing
```
npm install
npm run serve
```




