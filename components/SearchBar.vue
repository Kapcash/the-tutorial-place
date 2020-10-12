<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    </div>
    <input
      v-model="query"
      type="search"
      autocomplete="off"
      class="my-auto h-8 block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
      :placeholder="placeholder">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';

@Component
export default class SearchBar extends Vue {
  @Prop({ type: String, required: false, default: '' })
  readonly placeholder!: string;

  get query() {
    return this.$accessor.searchQuery;
  }

  set query(value) {
    this.$accessor.searchFor(value);
  }
}
</script>

<style scoped>
</style>
