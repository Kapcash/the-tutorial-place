<template>
  <div class="px-2 py-1 border border-blue-300 bg-blue-100 text-blue-300 rounded text-sm">
    Version <span class="font-medium text-blue-400">{{ version }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Version extends Vue {
  get version(): string {
    return this.$nuxt.context.env.version;
  }
}
</script>
