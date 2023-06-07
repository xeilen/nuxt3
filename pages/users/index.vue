<script setup lang="ts">
const { data: users } = useFetch('https://jsonplaceholder.typicode.com/users')
// const { data: users } = useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/users'))
</script>

<template>
  <div>
    <h1 class="text-green-400 font-bold text-3xl text-center">Users</h1>
    <div class="flex flex-wrap gap-4">
      <div v-for="user in users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`" class="block bg-white shadow-lg rounded-lg p-6">
          <h2 class="text-xl font-semibold">{{ user.name }}</h2>
          <p class="text-gray-600">{{ user.username }}</p>
          <p class="text-gray-600">{{ user.email }}</p>
          <hr class="my-4">
          <div class="flex items-center mb-2">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </span>
            <p class="text-gray-600">{{ user.phone }}</p>
          </div>
          <div class="flex items-center">
            <span class="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </span>
            <a :href="'http://' + user.website" target="_blank" rel="noopener noreferrer" class="text-blue-500">{{ user.website }}</a>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
