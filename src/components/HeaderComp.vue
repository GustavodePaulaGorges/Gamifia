<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <nav class="navbar">
      <RouterLink to="/"> Home </RouterLink>
    </nav>
  </header>
</template>
<style>
.navbar {
  box-shadow: 0.4vh 0.2vh 1.2vh rgb(179, 184, 189);
  padding: 2vh;
  width: 100%;
}
</style>
