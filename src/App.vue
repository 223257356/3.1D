<script setup>
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
      <router-link to="/location">Visit Us</router-link>
      <router-link to="/furnychat">Live Chat</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  padding: 20px;
  min-height: 100vh;
  background-image: url("src/assets/furny.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 0 15px;
}

a:hover {
    color: beige;
}

</style>
