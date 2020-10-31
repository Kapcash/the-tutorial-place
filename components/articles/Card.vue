<template>
  <div class="m-4 p-4 bg-gray-100 border overflow-hidden rounded-lg">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style scoped>
</style>
