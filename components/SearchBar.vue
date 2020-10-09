<template>
  <input
    :value="query"
    @input="$emit('input', $event.target.value)"
    type="search"
    autocomplete="off"
    placeholder="Search by tag...">
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';

@Component
export default class SearchBar extends Vue {
  @Prop({ type: String, required: true })
  readonly query!: string;
}
</script>

<style lang="postcss" scoped>
</style>
