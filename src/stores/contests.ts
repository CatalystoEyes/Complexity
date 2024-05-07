import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('contests', () => {
  const contest = ref('')

  return { contest }
})
