<template>
  <div class="pt-12">
    <Navbar class="h-12"/>
    <main class="container mx-auto px-4 lg:px-8">
      <div class="relative main-grid">
        <Sidebar class="hidden"/>
        <Nuxt class="flex flex-wrap w-full"/>
      </div>
    </main>
  </div>
</template>

<style scoped>
.main-grid {
  @apply grid gap-4;
  grid-template-columns: 1fr 3fr;
}
</style>
