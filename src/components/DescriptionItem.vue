<template>
  <div class="hero min-h-96">
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
            <!-- Page content here -->
            <label for="my-drawer" class="btn drawer-button">Get started</label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
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
