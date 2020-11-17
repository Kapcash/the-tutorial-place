<template>
  <div>
    <TableOfContent :article="currentArticle" class="bg-white"/>
    <LazyStackOverflowLinks v-if="sofLinks" :links="sofLinks" class="bg-white"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class ArticleDetails extends Vue {
  get currentArticle(): IContentDocument {
    return this.$accessor.currentArticle!;
  }

  get sofLinks(): string[] {
    return this.currentArticle.stackoverflow || [];
  }
}
</script>

<style scoped>
</style>
