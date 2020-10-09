<template>
  <div>
    <SearchBar :query="search" @input="onSearch"/>
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
  articles: IContentDocument[] = [];

  async asyncData({ $content }: Context) {
    const hello = await $content('hello').fetch();
    const articles = await $content('articles', { deep: true }).sortBy('createdAt').without(['body']).limit(10).fetch();

    return { hello, articles };
  }

  async onSearch(query: string) {
    this.search = query;
    console.log(query);
    this.articles = await this.$content('articles', { deep: true })
      .sortBy('createdAt')
      .without(['body'])
      .limit(10)
      .search('tags', query)
      .fetch() as IContentDocument[];
  }
}
</script>

<style lang="postcss" scoped>
</style>
