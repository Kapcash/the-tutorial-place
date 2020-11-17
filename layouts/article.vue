<template>
  <div class="pt-12 bg-gray-100">
    <Navbar class="h-12"/>
    <main class="container mx-auto px-4 lg:px-8">
      <div class="relative grid main-grid-template">
        <Sidebar sticky>
          <ArticleActions/>
        </Sidebar>
        <Nuxt class="w-full px-4 border-r border-l border-gray-400 bg-white"/>
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
export default class DefaultLayout extends Vue {}
</script>

<style scoped>
.main-grid-template {
  grid-template-columns: 1fr 4fr 2fr;
}
</style>
