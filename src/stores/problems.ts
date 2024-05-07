import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('problems', () => {
  const problems = ref('')

  return { problems }
})
