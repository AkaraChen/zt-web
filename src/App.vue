<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
.mt-10 {
  margin-top: 10px;
}

.container {
  max-width: 1200px;
}
</style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar
  },
};
</script>
