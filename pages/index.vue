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
    <div v-for="category in data.portfolio">
      <div class="text-2xl mt-5 dark:text-white">{{ category.title }}</div>
      <NuxtLink
        v-for="item in category.items"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData(`portfolio`, () =>
  queryContent(`/portfolio`).findOne()
);
</script>
