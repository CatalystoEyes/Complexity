<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
import DescriptionItem from './components/DescriptionItem.vue'
</script>

<template>
  <div class="min-h-screen">
    <NavbarItem />
    <RouterView />
    <FooterItem />
  </div>
</template>
