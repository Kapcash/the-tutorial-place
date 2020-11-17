<template>
  <Card class="w-64 shadow-md hover:bg-white transition-colors duration-200">
    <NuxtLink
      :to="{ path: article.path, params: { slug: article.slug } }"
      tag="article"
      class="h-full flex flex-col justify-between cursor-pointer">
      <h1 class="font-semibold text-xl leading-tight mb-3 l-clamp-3">
        {{ article.title }}
      </h1>
      <div>
        <div class="flex items-center my-1">
          <span v-for="tag of uniqTags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center mr-1 flex-normal">
            <img width="16px" height="16px" class="rounded-full mr-1" :src="authorPicture">
            <span class="font-semi-bold font-mali">{{ article.author }}</span>
          </div>
          <span class="text-sm text-gray-500 mx-2 whitespace-no-wrap">{{ fromNow }}</span>
        </div>
      </div>
    </NuxtLink>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { OmitFromKnownKeys } from '@/types/base';

@Component
export default class ArticleCard extends Vue {
  @Prop({ type: Object, required: true })
  article!: OmitFromKnownKeys<IContentDocument, 'body'>;

  get firstAuthor(): string {
    return (this.article.author || '').split(',')[0].trim();
  }

  get authorPicture() {
    return `https://github.com/${this.firstAuthor?.toLowerCase()}.png`;
  }

  get fromNow() {
    return this.$dayjs(this.article.createdAt).fromNow();
  }

  get uniqTags(): string[] {
    return [...new Set(this.article.tags)];
  }
}
</script>

<style lang="postcss" scoped>
</style>
