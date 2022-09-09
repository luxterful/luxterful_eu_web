<template>
  <div>
    <Checkbox v-for="(ingredient, idx) in groceries" :key="idx" class="mt-3">
      {{ ingredient.title }}
      {{ ingredient.amount ? `(${ingredient.amount})` : "" }}
    </Checkbox>
  </div>
</template>

<script setup>
const props = defineProps({
  list: Object,
});

const groceries = Object.entries(props.list).map(([key, value]) => ({
  title: key,
  amount: value,
}));
</script>
