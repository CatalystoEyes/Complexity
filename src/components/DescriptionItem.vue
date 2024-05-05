<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="hero">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold gradient-text pb-2">Complexity</h1>
        <p class="py-3">
          is a comprehensive app designed for competitive programmers and coding enthusiasts. This
          web application is designed to track Olympiad programming activities using the Codeforces
          API.
        </p>
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer" class="btn drawer-button">Get started</label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <a><RouterLink to="/users">Find people</RouterLink></a>
              </li>
              <li>
                <a><RouterLink to="/blog">Find blog</RouterLink></a>
              </li>
              <li>
                <a><RouterLink to="/contests">Explore contests</RouterLink></a>
              </li>
              <li>
                <a><RouterLink to="/problems">Explore problems</RouterLink></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.gradient-text {
  background-image: linear-gradient(to right, #6366f1, #fd3e5d);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
