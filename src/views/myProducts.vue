<script>
import ProductItem from '../components/ProductItem.vue'

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: [
        {
        id: 1,
        name: 'Product A',
        price: 50,
        description: 'This is a description for Product A.',
        image: '../src/assets/1.jpeg',
        },
        {
        id: 2,
        name: 'Product B',
        price: 150,
        description: 'This is a description for Product B.',
        image: '../src/assets/2.jpeg',
        },
        {
        id: 3,
        name: 'Product C',
        description: 'This is a description for Product C.',
        image: '../src/assets/3.jpg',
        price: 150 },
        {
        id: 4,
        name: 'Product D',
        description: 'This is a description for Product D.',
        image: '../src/assets/5.jpeg',
        price: 150 },
      ],
      cart: []
    }
  },

  methods: {
    addToCart(product) {
      this.cart.push(product);
    }
  }
}
</script>

<template>
    <div class="products">

      <h1 class="header">Products</h1>

      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      ></product-item>
    </div>

</template>

<style scoped>
.products {
  background-color: rgba(248, 248, 248, 0.7);
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust column widths as needed */
  gap: 20px;
  align-items: center;
  text-align: center;
}

.products p {
  color: #000;
}

@media (max-width: 768px) {
  .products {
    flex-direction: column; /* Stack items vertically on smaller screens */
    align-items: center;
    width: 100%;
  }}

</style>


