<template>
  <aside class="lg:block fixed lg:relative inset-0 mt-12 border-r border-gray-400 lg:mt-0 z-30 w-full lg:w-1/5 hidden">
    <div class="h-full overflow-y-auto lg:sticky lg:top-12 lg:h-auto lg:max-h-(screen-16) p-4">
      HELLO
    </div>
  </aside>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
}
</script>

<style scoped>
</style>
