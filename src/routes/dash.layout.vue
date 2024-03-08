<script setup lang="tsx">
import { RouterView } from "vue-router";

import { ThemeTogglerIconButton } from "~/components/theme";
</script>

<template>
  <main class="container mx-auto max-w-screen-lg">
    <header class="flex items-center justify-between gap-2 p-4 sm:p-5 md:p-6 lg:p-7 border-b border-b-neutral-6">
      <h1 id="dashboard" class="font-bold text-xl lg:text-2xl select-none">Dashboard</h1>

      <ThemeTogglerIconButton></ThemeTogglerIconButton>
    </header>
    <main class="p-4 sm:p-5 md:p-6 lg:p-7">
      <RouterView></RouterView>
    </main>
  </main>
</template>
