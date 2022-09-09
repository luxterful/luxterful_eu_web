<template>
  <h1 class="text-2xl mt-6 mb-3 font-bold" :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>
