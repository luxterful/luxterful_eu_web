<template>
  <div>
    <Header :showHomeButton="false"> LUXTERFUL.EU </Header>
    <div class="flex align-middle mt-2 flex-wrap">
      <img
        src="/profile.png"
        class="mx-auto max-w-xs sm:px-0 h-full w-full sm:w-1/3"
      />
      <div class="text-xl dark:text-white pl-0 sm:pl-5 my-auto w-full sm:w-2/3">
        <div class="font-bold">✌️ HELLO I'M</div>
        <div class="font-extrabold text-3xl">LUKAS BAUER</div>
        <div class="font-thin text-lg mt-5">
          Software engineer, chess player, UX enthusiast and minimalist.
        </div>
      </div>
    </div>
    <div>
      <div class="text-2xl mt-5 dark:text-white">Connect</div>
      <div class="">
        <NuxtLink
          to="https://www.linkedin.com/in/derlukasbauer/"
          class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
        >
          LinkedIn
        </NuxtLink>
        <NuxtLink
          to="https://www.github.com/luxterful"
          class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
        >
          GitHub
        </NuxtLink>
      </div>
    </div>
    <div>
      <div class="text-2xl mt-5 dark:text-white">Apps</div>
      <div class="">
        <NuxtLink
          to="https://recipes.luxterful.eu/"
          class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
        >
          Recipes
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent(`/recipes`).find()
);
</script>
