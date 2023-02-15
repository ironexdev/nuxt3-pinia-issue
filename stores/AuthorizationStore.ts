import { defineStore } from "pinia"
import { AuthorizationStoreInterface } from "~/stores/AuthorizationStoreInterface"

export const useAuthorizationStore = defineStore("AuthorizationStore", (): AuthorizationStoreInterface => {
  const code = ref("foo")

  return {
      code
  }
})
