import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('blogs', () => {
  const blog = ref('')

  return { blog }
})
