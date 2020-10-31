<template>
  <div>
    <NuxtLink :to="{ name: 'index' }">Go home</NuxtLink>
    <NuxtContent :document="article"/>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  layout: 'article',
})
export default class ArticlePage extends Vue {
  article!: IContentDocument;

  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
      ],
    };
  }

  async asyncData({ $content, app, params, error }: Context) {
    const path = `/${params.pathMatch || 'index'}`;
    const [article] = await $content({ deep: true }).where({ path }).fetch() as IContentDocument[];

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' });
    }

    app.$accessor.setCurrentArticle(article);

    return { article };
  }
}
</script>

<style lang="postcss" scoped>
</style>
