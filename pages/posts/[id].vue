<script setup lang="ts">
definePageMeta({
  middleware: ['route-params-hack']
})



const id = useState('routeParamId')
const route = useRoute()
const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`)
console.log(post)

useServerSeoMeta({
  title: () => `Post ${post.value.id} with unique key: cp-test-demo-next-post`,
  description: () => `This post has body "${post.value.body}" with unique key: cp-test-demo-next-post-body`
})


useHead({
  title: () => `Post - ${id.value}`
})

</script>

<template>
  <div>
    <pre>{{ route.params }}</pre>
    <pre>{{ id }}</pre>
    <pre>{{ post }}</pre>
  </div>
</template>

<style scoped>

</style>
