import { defineNuxtRouteMiddleware } from "#app"
import { storeToRefs } from "pinia"
import { useAuthorizationStore } from "~/stores/AuthorizationStore"

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === "/") {
      const authorizationStore = useAuthorizationStore()
      const { code } = storeToRefs(authorizationStore)

      code.value = "bar"

      return navigateTo("x")
  }
})
