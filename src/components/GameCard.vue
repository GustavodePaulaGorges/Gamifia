<script setup>
  import { RouterLink } from "vue-router";
</script>
<template>
  <div class="card" style="width: 13rem">
    <img
      src="https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">Nome do Jogo</h5>
      <p class="card-text alt">Descrição rapida [...]</p>
      <p class="rate">Rating 100/100</p>
      <p class="plataforma">Plataforma/Mobile</p>
      <RouterLink to="/jogo">Ver Página</RouterLink>
    </div>
  </div>
</template>

<style>
    .card{
        margin-bottom: 1vh;
        margin-left: 13%;
    }
    .card-text{
      opacity: 60%;
    }
    .rate{
      line-height: 0.1vh;
    }


</style>
