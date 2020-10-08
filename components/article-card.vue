<template>
  <article class="max-w-xxs m-4 p-4 shadow-md bg-white border overflow-hidden rounded-lg hover:bg-gray-100 transition-colors duration-200">
    <a :href="null" class="h-full flex flex-col justify-between">
      <h1 class="font-semibold text-xl leading-tight mb-3 l-clamp-3 h-full">
        {{ article.title }}
      </h1>
      <div class="flex items-center my-1">
        <span v-for="tag of tags" :key="tag" class="mr-1 rounded-md bg-blue-100 text-blue-500 text-xs px-2">{{ tag }}</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center mr-1 flex-normal">
          <img width="16px" height="16px" class="rounded-full mr-1" :src="authorPicture">
          <span class="font-semi-bold">{{ article.author }}</span>
        </div>
        <span class="text-sm text-gray-500 mx-2 whitespace-no-wrap">{{ fromNow }}</span>
      </div>
    </a>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { IContentDocument } from '@nuxt/content/types/content'

@Component
export default class ArticleCard extends Vue {
  @Prop({ type: Object, required: true })
  article!: IContentDocument;

  get authorPicture () {
    return `https://github.com/${this.article.author?.toLowerCase()}.png`
  }

  get fromNow () {
    return this.$dayjs(this.article.createdAt).fromNow()
  }

  get tags (): string[] {
    return [...new Set(this.article.tags)]
  }
}
</script>

<style lang="postcss" scoped>
</style>
