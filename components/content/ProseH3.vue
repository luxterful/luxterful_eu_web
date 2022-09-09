<template>
  <h3 class="text-lg mt-6 mb-3 font-bold" :id="id">
    <a :href="`#${id}`">
      <slot />
    </a>
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>
