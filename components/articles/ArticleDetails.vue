<template>
  <div>
    <TableOfContent :article="currentArticle"/>
    <StackOverflowLinks :article="currentArticle"/>
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
}
</script>

<style scoped>
</style>
