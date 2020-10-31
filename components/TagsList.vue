<template>
  <ul>
    <!-- TODO Foldable category -->
    <li v-for="category of categories" :key="category.slug">
      <h3 class="text-lg px-4 mt-4 uppercase font-semibold">{{ category.name }}</h3>
      <ul v-if="category.tags">
        <li
          v-for="tag of category.tags"
          :key="tag"
          class="py-2 px-8 uppercase text-sm hover:bg-gray-200 cursor-pointer"
          :class="{'active': $accessor.selectedTag === tag }"
          @click="selectTag(tag)">
          {{ tag }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class TagsList extends Vue {
  get categories(): IContentDocument[] {
    return this.$accessor.categories;
  };

  selectTag(tag: string) {
    this.$accessor.selectTag(tag);
  }
}
</script>

<style scoped>
.active {
  @apply bg-gray-300;
  &:hover {
    @apply bg-gray-400;
  }
}
</style>
