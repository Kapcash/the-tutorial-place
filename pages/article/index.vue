<template>
  <div>
    <NuxtContent :document="article"/>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Article extends Vue {
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

  async asyncData({ $content, params }: Context) {
    const article = await $content('articles', params.slug).fetch();

    return { article };
  }
}
</script>

<style lang="postcss" scoped>
</style>
