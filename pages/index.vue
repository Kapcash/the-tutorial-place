<template>
  <div>
    <SearchBar :query="search" @input="onSearch" placeholder="Search by tags..."/>
    <div>
      <span v-for="tag of tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
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
  tags: string[] = [];

  async asyncData({ $content }: Context) {
    const hello = await $content('hello').fetch();
    const articles = await $content('articles', { deep: true }).sortBy('createdAt').without(['body']).limit(20).fetch();
    const articlesTags: IContentDocument[] = await $content('articles', { deep: true }).sortBy('createdAt').only(['tags']).fetch() as IContentDocument[];
    const tags = [...new Set(articlesTags
      .map((article: IContentDocument) => article.tags)
      .filter(tags => !!tags && tags.length > 0)
      .flat(),
    )];

    return { hello, articles, tags };
  }

  async onSearch(query: string) {
    this.search = query;
    if (this.search) {
      this.articles = await this.$content('articles', { deep: true })
        .sortBy('createdAt')
        .without(['body'])
        .limit(10)
        .search('topics', query)
        .fetch() as IContentDocument[];
    } else {
      this.articles = await this.getAllArticles() as IContentDocument[];
    }
  }

  getAllArticles() {
    return this.$content('articles', { deep: true }).sortBy('createdAt').without(['body']).limit(20).fetch();
  }
}
</script>

<style scoped>
</style>
