<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
import DescriptionItem from './components/DescriptionItem.vue'
</script>

<template>
  <div class="min-h-screen">
    <div class="min-h-screen">
      <NavbarItem />
      <DescriptionItem />
      <FooterItem />
    </div>
  </div>

  <RouterView />
</template>
