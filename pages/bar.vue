<template>
  <main>
    {{ code }}
  </main>
</template>

<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {useFooBarStore} from "~/stores/FooBarStore";

  const { code } = storeToRefs(useFooBarStore())
</script>
