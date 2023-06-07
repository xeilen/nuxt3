export default defineNuxtRouteMiddleware(to => {
  console.log(to.params.id)
  useState('routeParamId', () => to.params.id)
})
