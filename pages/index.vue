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
          Software engineer, UX enthusiast and hobbyist with diverse interests.
          Explore my passions below.
        </div>
        <NuxtLink
          v-for="item in connectData?.list || []"
          :to="item.url"
          class="text-gray-700 dark:text-gray-300 inline-block mr-4 mt-3 hover:text-black dark:hover:text-white transition-colors"
          :title="item.name"
        >
          <IconGithub v-if="item.name === 'Github'" />
          <IconLinkedin v-else-if="item.name === 'LinkedIn'" />
          <IconChess v-else-if="item.name === 'Chess.com'" />
        </NuxtLink>
      </div>
    </div>

    <!-- Interests Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Interests</div>
      <div
        v-for="item in portfolioData?.interests || []"
        class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200 inline-block mr-2 mt-2"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- Dynamic Categories Section -->
    <div v-for="category in displayCategories" :key="category.name">
      <div class="text-2xl mt-5 dark:text-white">
        {{ category.name }}
      </div>
      <NuxtLink
        v-for="item in category.list || []"
        :key="item.name"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2 hover:bg-neutral-700 dark:hover:bg-neutral-200 hover:text-white dark:hover:text-black transition-colors"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: portfolioData } = await useAsyncData("portfolio", () =>
  queryCollection("portfolio").first()
);

// Extract connect data for header social links
const connectData = computed(() =>
  portfolioData.value?.categories?.find((cat) => cat.name === "Connect")
);

// Get categories to display (excluding Connect which is used in header)
const displayCategories = computed(
  () =>
    portfolioData.value?.categories?.filter((cat) => cat.name !== "Connect") ||
    []
);
</script>
