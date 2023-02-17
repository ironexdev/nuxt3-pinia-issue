<template>
  <main>...</main>
</template>

<script setup lang="ts">

import {useFooBarStore} from "~/stores/FooBarStore";
import {storeToRefs} from "pinia";

const fooBarStore = useFooBarStore()
const {code} = storeToRefs(fooBarStore)

code.value = "bar"

await navigateTo({path: "bar", query: {code: code.value}})

// Value "bar" is stored to fooBarStore.code correctly when using navigateTo in onMounted hook (on the client)
// onMounted(async () => {
//   await navigateTo({path: "bar", query: {code: code.value}})
// })
</script>
