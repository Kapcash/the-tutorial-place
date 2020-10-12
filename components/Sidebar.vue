<template>
  <aside class="lg:block fixed lg:relative inset-0 mt-12 border-r border-gray-400 lg:mt-0 z-30 w-full hidden">
    <div class="h-full overflow-y-auto lg:sticky lg:top-12 lg:h-auto lg:max-h-(screen-16) p-4">
      <ul>
        <li v-for="tag of tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  tags = ['react', 'vue', 'typescript', 'aws'];
}
</script>

<style scoped>
</style>
