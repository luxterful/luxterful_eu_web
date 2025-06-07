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
          Software engineer, UX enthusiast and minimalist.<br />
          I like to design visual stuff and keep it simple.
        </div>
        <NuxtLink
          v-for="item in connectData.connect"
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
        v-for="item in interestsData.interests"
        class="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200 inline-block mr-2 mt-2"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- Apps Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Apps</div>
      <NuxtLink
        v-for="item in appsData.apps"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>

    <!-- Freelancing Projects Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Freelancing Projects</div>
      <NuxtLink
        v-for="item in freelancingData.freelancing"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>

    <!-- Photography Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Photography</div>
      <NuxtLink
        v-for="item in photographyData.photography"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>

    <!-- Videography Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Videography</div>
      <NuxtLink
        v-for="item in videographyData.videography"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>

    <!-- Play Section -->
    <div>
      <div class="text-2xl mt-5 dark:text-white">Play</div>
      <NuxtLink
        v-for="item in playData.play"
        :to="item.url"
        class="bg-black dark:bg-white p-2 rounded-md text-white dark:text-black inline-block mr-2 mt-2"
      >
        {{ item.name }}<IconExternal />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Load all separate portfolio files
const [
  connectData,
  appsData,
  freelancingData,
  photographyData,
  videographyData,
  playData,
  interestsData,
] = await Promise.all([
  queryContent("/portfolio-connect").findOne(),
  queryContent("/portfolio-apps").findOne(),
  queryContent("/portfolio-freelancing").findOne(),
  queryContent("/portfolio-photography").findOne(),
  queryContent("/portfolio-videography").findOne(),
  queryContent("/portfolio-play").findOne(),
  queryContent("/portfolio-interests").findOne(),
]);
</script>
