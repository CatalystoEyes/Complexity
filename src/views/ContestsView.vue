<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      contests: z.string().min(3)
    })
  )
})

const [contests, contestsAttrs] = defineField('contests')
</script>

<template>
  <div>
    <h1 class="text-5xl text-center">Contests</h1>
    <div class="w-1/3 mt-3 m-auto">
      <label class="input input-bordered flex items-center gap-2">
        <input
          type="text"
          class="grow"
          placeholder="Search"
          v-model="contests"
          v-bind="contestsAttrs"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="w-4 h-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
      <div class="text-red-500 ml-1">{{ errors.contests }}</div>
    </div>
  </div>
</template>
