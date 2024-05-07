import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('users', () => {
  const users = ref('')

  return { users }
})
