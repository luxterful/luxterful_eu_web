<template>
  <div class="max-w-screen-md mx-auto px-5">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <div class="max-w-screen-md mx-auto px-5 pb-4">
    <hr class="mt-9 mb-4 border-stone-300 dark:border-stone-700" />
    <div class="text-center text-xs text-stone-300 dark:text-stone-700">
      Copyright 2022
      <a
        href="/legal"
        class="bg-stone-300 hover:bg-stone-400 dark:bg-stone-700 dark:hover:bg-stone-600 text-white dark:text-stone-800 py-1 px-2 rounded-full"
      >
        legal notice
      </a>
    </div>
    <div class="text-center text-xs text-stone-300 dark:text-stone-700 mt-3">
      <a href="https://github.com/luxterful/luxterful_eu_web">edit on github</a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Luxterful",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { name: "description", content: "HELLO I'M LUKAS BAUER" },
    {
      name: "theme-color",
      content: "white",
      media: "(prefers-color-scheme: light)",
    },
    {
      name: "theme-color",
      content: "rgb(41 37 36)",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  bodyAttrs: {
    class: "dark:bg-stone-800 bg-white",
  },
  script: [
    {
      src: "/appearance.js",
      body: false,
    },
  ],
});
</script>
