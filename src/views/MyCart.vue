<script>
//   export default {
//     data() {
//       return {
//         cart: []  // Fetch this from a central store or API call in a real-world scenario.
//       }
//     }
//   }

export default {
  props: {
    cart: Array // Define cart as a prop
  }
}

</script>

<template>
    <div class="cart">
      <h1>Cart</h1>
      <ul>
        <li v-for="item in cart" :key="item.id">{{ item.name }} - \${{ item.price }}</li>
      </ul>
      <router-link to="/checkout">Proceed to Checkout</router-link>
    </div>
</template>

<style scoped>
.cart  {
    background-color: rgba(248, 248, 248, 0.7);
    padding: 20px;
    }

</style>
