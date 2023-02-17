import { defineStore } from "pinia"
import { FooBarStoreInterface } from "~/stores/FooBarStoreInterface"

export const useFooBarStore = defineStore("AFooBarStore", (): FooBarStoreInterface => {
  const code = ref("foo")

  return {
      code
  }
})
