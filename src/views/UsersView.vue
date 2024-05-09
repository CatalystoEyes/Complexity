<script setup lang="">
import { useQueryClient, useQuery } from '@tanstack/vue-query'
import { getData } from '../api/codeforces'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const queryClient = useQueryClient()

const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      users: z.string().min(3)
    })
  )
})

const [users, usersAttrs] = defineField('users')

const handleFormData = async (event) => {
  if (event.keyCode === 13) {
    if (blogs.value && blogs.value.trim() !== '' && blogs.value.length >= 3) {
      try {
        const response = await getData(
          `https://codeforces.com/api/user.info?handles=${users.value}&checkHistoricHandles=false`
        )
        console.log(response.data)
        queryClient.setQueryData(['users', users.value], response.data)
      } catch (error) {
        console.error(error)
        throw new Error(error.message)
      }
    } else {
      return
    }
  }
}

// Query
const { isPending, isError, data, error } = useQuery({
  queryKey: ['users', users.value],
  queryFn: async () => {
    try {
      const response = await getData(`https://codeforces.com/api/${users.value}`)
      console.log(response.data)
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error(error.message)
    }
  }
})
</script>

<template>
  <div>
    <h1 class="text-5xl text-center">Users</h1>
    <div class="w-1/3 mt-3 m-auto">
      <label class="input input-bordered flex items-center gap-2">
        <input
          type="text"
          class="grow"
          placeholder="Search"
          @keydown.enter="handleFormData"
          v-model="users"
          v-bind="usersAttrs"
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
      <div class="text-red-500 ml-1">{{ errors.users }}</div>
      <span v-if="isPending">Loading...</span>
      <span v-else-if="isError">Error: {{ error.message }}</span>
      <div v-if="data">
        <img src="${data.titlePhoto}" alt="" />
        <p>Username - {{ data.value }}</p>
        <p>Friends count - {{ data.friendOfCount }}</p>
        <p>Contribution - {{ data.contribution }}</p>
      </div>
    </div>
  </div>
</template>
