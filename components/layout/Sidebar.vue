<template>
  <aside class="lg:block fixed lg:relative inset-0 mt-12 border-r border-gray-400 lg:mt-0 z-30 w-full hidden bg-gray-100">
    <div class="h-full overflow-y-auto lg:sticky lg:top-14 lg:h-auto max-h">
      <slot/>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class Sidebar extends Vue {}
</script>

<style scoped>
.max-h {
  /* 3rem = h-12 size (navbar height) */
  max-height: calc(100vh - 3rem);
}
</style>
