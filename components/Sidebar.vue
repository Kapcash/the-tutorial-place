<template>
  <aside class="lg:block fixed lg:relative inset-0 mt-12 border-r border-gray-400 lg:mt-0 z-30 w-full hidden bg-gray-100">
    <div class="h-full overflow-y-auto lg:sticky lg:top-12 lg:h-auto lg:max-h-(screen-16)">
      <ul>
        <!-- TODO Foldable category -->
        <li v-for="category of categories" :key="category.slug">
          <h2 class="px-4 mt-4 uppercase font-semibold">{{ category.name }}</h2>
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
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class Sidebar extends Vue {
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
