<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <NavbarItem />
    <RouterView />
    <FooterItem />
  </div>
</template>
