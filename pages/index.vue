<template>
  <div>
    <div class="flex flex-wrap md:justify-start justify-around">
      <ArticleCard v-for="article of articles" :key="article.title" :article="article"/>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component
export default class HomePage extends Vue {
  search: string = '';
  tags: string[] = [];

  get articles(): IContentDocument[] {
    return this.$accessor.articles;
  }

  async asyncData({ $content, app }: Context) {
    app.$accessor.getLightArticles();
    const articlesTags: IContentDocument[] = await $content('articles', { deep: true }).sortBy('createdAt').only(['tags']).fetch() as IContentDocument[];
    const tags = [...new Set(articlesTags
      .map((article: IContentDocument) => article.tags)
      .filter(tags => !!tags && tags.length > 0)
      .flat(),
    )];

    return { tags };
  }
}
</script>

<style scoped>
</style>
