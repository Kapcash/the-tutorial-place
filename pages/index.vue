<template>
  <div>
    <div v-show="articles.length > 0" class="flex flex-wrap md:justify-start justify-around content-start">
      <ArticleCard v-for="article of articles" :key="article.title" :article="article"/>
    </div>
    <div v-show="articles.length <= 0">
      <EmptyComponent/>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  get articles(): IContentDocument[] {
    return this.$accessor.displayedArticles;
  }

  asyncData({ $content, app }: Context) {
    app.$accessor.getLightArticles();
  }
}
</script>

<style scoped>
</style>
