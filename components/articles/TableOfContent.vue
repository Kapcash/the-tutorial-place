<template>
  <Card class="">
    <h3>Table of content</h3>
    <ul class="toc">
      <li
        v-for="link of article.toc"
        :key="link.id"
        :class="{ 'toc-2': link.depth === 2, 'toc-3': link.depth === 3 }">
        <NuxtLink :to="`#${link.id}`" class="text-gray-800 link-blue shift-x-sm">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </Card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';

@Component
export default class TableOfContent extends Vue {
  @Prop({ type: Object, required: true })
  readonly article!: IContentDocument;
}
</script>

<style scoped>
</style>
