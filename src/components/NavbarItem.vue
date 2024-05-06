<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <input
        type="checkbox"
        value="night"
        class="mb-2 toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
      />
      <RouterLink to="/"><a class="btn btn-ghost text-xl mb-2">Complexity</a></RouterLink>
    </div>
    <div class="flex-none mb-2">
      <ul class="menu menu-horizontal px-1">
        <li><RouterLink to="/recent">History</RouterLink></li>
        <li>
          <details>
            <summary>Functions</summary>
            <ul class="p-2 bg-base-100 rounded-t-none">
              <li>
                <RouterLink to="/users">Users</RouterLink>
              </li>
              <li>
                <RouterLink to="/blog">Blog</RouterLink>
              </li>
              <li>
                <RouterLink to="/contests">Contests</RouterLink>
              </li>
              <li>
                <RouterLink to="/problems">Problems</RouterLink>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
