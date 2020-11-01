<template>
  <div class="pt-12">
    <Navbar class="h-12"/>
    <main class="container mx-auto px-4 lg:px-8">
      <div class="relative main-grid">
        <Sidebar>
          <ArticleActions/>
        </Sidebar>
        <Nuxt class="w-full"/>
        <Sidebar sticky>
          <ArticleDetails/>
        </Sidebar>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class DefaultLayout extends Vue {
}
</script>

<style scoped>
.main-grid {
  @apply grid gap-4;
  grid-template-columns: 1fr 4fr 2fr;
}
</style>
