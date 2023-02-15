<template>
  <main>
    {{ code }}
  </main>
</template>

<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {useAuthorizationStore} from "~/stores/AuthorizationStore";

  const { code } = storeToRefs(useAuthorizationStore())
</script>

<style scoped lang="scss">
</style>
