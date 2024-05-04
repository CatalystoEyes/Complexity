<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from './components/FooterItem.vue'
import DescriptionItem from './components/DescriptionItem.vue'
</script>

<template>
  <div data-theme="lemonade">
    <div class="min-h-screen">
      <NavbarItem />
      <DescriptionItem />
      <nav>
        <!-- <RouterLink to="/"></RouterLink>
        <RouterLink to="/about"></RouterLink> -->
      </nav>
      <FooterItem />
    </div>
  </div>

  <RouterView />
</template>
