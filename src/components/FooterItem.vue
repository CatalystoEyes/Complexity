<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer bg-base-200 absolute bottom-0 w-full">
    <footer class="footer footer-center p-6 bg-base-200 text-base-content rounded">
      <nav class="grid grid-flow-col gap-8">
        <a class="link link-hover"><RouterLink to="/about">About us</RouterLink></a>
        <a class="link link-hover" onclick="my_modal_2.showModal()">Contact</a>
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box">
            <form method="dialog">
              <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-2xl mb-1">Contacts</h3>
            <div class="ml-1">
              <p class="py-3 text-lg flex w-8">
                <img src="/codeforces.png" alt="" />
                <a
                  href="https://codeforces.com/profile/Catalysto"
                  target="_blank"
                  class="mt-0.5 ml-1.5 link link-hover"
                  >Codeforces</a
                >
              </p>
              <p class="py-3 text-lg flex w-8">
                <img src="/reddit.svg" alt="" />
                <a
                  href="https://www.reddit.com/user/CatalystoEyes/"
                  target="_blank"
                  class="mt-0.5 ml-1.5 link link-hover"
                  >Reddit</a
                >
              </p>
              <p class="py-3 text-lg flex w-8">
                <img src="/GitHub.svg" alt="" />
                <a
                  href="https://github.com/CatalystoEyes"
                  target="_blank"
                  class="mt-0.5 ml-1.5 link link-hover"
                  >Github</a
                >
              </p>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <a
          class="link link-hover"
          href="https://github.com/CatalystoEyes/Complexity"
          target="_blank"
          >Github</a
        >
      </nav>
    </footer>
  </div>
</template>
