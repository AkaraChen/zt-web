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
</style>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
