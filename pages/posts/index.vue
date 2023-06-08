<script setup lang="ts">
const { data: posts } = useLazyFetch('https://jsonplaceholder.typicode.com/posts')
// const { data: posts } = useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts'))

const makeClientRequest = async () => {
  const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')

}

useServerSeoMeta({
  title: 'Posts page: unique key: cp-test-posts-page-nazar',
  description: 'THis is tfghe page with posts to test SEO, unique key: cp-test-posts-page-description-nazar'
})
</script>

<template>
  <div>
    <h1 class="text-orange-400 text-3xl text-center" @click="makeClientRequest">Posts</h1>
    <img src="rc.jpg" alt="gjglgjlgjlgjlkfjlkdglajk;dfgjdflgkjsd;flgjsd;lfgj;sdlfgj">
    <div class="flex flex-wrap justify-between gap-2">
      <div v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/posts/${post.id}`" class="h-full block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-orange-300">{{ post.title }}</h5>
          <p class="font-normal text-gray-600 dark:text-gray-300">{{ post.body }}</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
