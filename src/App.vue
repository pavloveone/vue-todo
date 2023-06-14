<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/PaymentDetailsModal.vue'
</script>

<template>
  <header class="header">
      <nav class="header__navigation">
        <RouterLink to="/users">Пользователи</RouterLink>
        <RouterLink to="/payment">Платежи</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
  .header {
    width: 300px;
    margin: 0 auto;
  }
  .header__navigation {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 20px;
  }
</style>

