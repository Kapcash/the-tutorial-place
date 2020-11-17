<template>
  <aside class="lg:block fixed lg:relative inset-0 mt-12 lg:mt-0 z-30 w-full hidden">
    <div class="h-full lg:top-14" :class="{ 'lg:sticky max-h overflow-y-auto': sticky }">
      <slot/>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class Sidebar extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly sticky!: boolean;
}
</script>

<style scoped>
.max-h {
  /* 3rem = h-12 size (navbar height) */
  max-height: calc(100vh - 3rem);
}
</style>
