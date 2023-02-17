import { defineStore } from "pinia"
import { FooBarStoreInterface } from "~/stores/FooBarStoreInterface"

export const useFooBarStore = defineStore("FooBarStore", (): FooBarStoreInterface => {
  const code = ref("foo")

  return {
      code
  }
})
