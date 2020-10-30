<template>
  <div class="empty-state flex flex-col justify-center items-center text-gray-600">
    <img src="~assets/img/checklist.svg" alt="empty state" width="10%">
    <p class="mt-4 whitespace-pre-line text-center">
      This subject hasn't been covered yet!
      Go on writing!
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { OmitFromKnownKeys } from '@/types/base';

@Component
export default class ArticleCard extends Vue {}
</script>

<style lang="postcss" scoped>
.empty-state {
  margin-top: 200px;
}
</style>
