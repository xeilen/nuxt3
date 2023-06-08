// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/users/**': { ssr: false }
  },
  build: {
    rollupOptions: {
      external: ['rc.jpg']
    }
  }
})
