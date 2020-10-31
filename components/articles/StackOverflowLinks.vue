<template>
  <Card class="max-h">
    <h3>
      <svg class="inline" height="1rem" viewBox="0 0 24 24" width="1rem" xmlns="http://www.w3.org/2000/svg"><g fill="#ff9800"><path d="m6.444 14.839 10.338 2.196.433-2.089-10.338-2.212z"/><path d="m6.215 17.571h10.566v2.127h-10.566z"/><path d="m7.8 9.831 9.572 4.526.887-1.944-9.577-4.538z"/><path d="m17.373 14.358-.001-.001-.001.001z"/></g><path d="m2 15.429v8.571h18.992v-8.571h-2.113v6.428h-14.766v-6.428z" fill="#757575"/><path d="m10.453 5.063 8.109 6.873 1.346-1.65-8.109-6.873z" fill="#ff9800"/><path d="m22 8.587-6.302-8.587-1.691 1.286 6.302 8.587z" fill="#ff9800"/></svg>
      StackOverflow links
    </h3>
    <ul>
      <li v-for="link of links" :key="link">
        <a class="text-sm link-orange mb-2 text-gray-800" :href="link" target="_blank">{{ parseLink(link) }}</a>
      </li>
    </ul>
  </Card>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class StackOverflowLinks extends Vue {
  @Prop({ type: Object, required: true })
  readonly article!: IContentDocument;

  get firstThreeLinks(): string[] {
    return this.links.slice(0, 3);
  }

  get links(): string[] {
    return [
      'https://stackoverflow.com/questions/64622145/how-to-find-the-first-and-last-values-of-an-if-statement-in-swift',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622511/flutter-firebase-query-does-not-return-link-to-auto-generate-query',
      'https://stackoverflow.com/questions/64622044/how-to-implement-a-type-safe-generic-setter',
    ].map(link => link.trim());
  }

  parseLink(link: string): string {
    const slug = link.substring(link.lastIndexOf('/') + 1);
    const slugWhiteSpaced = slug.replace(/-/g, ' ');
    return slugWhiteSpaced.charAt(0).toUpperCase() + slugWhiteSpaced.slice(1);
  }
}
</script>

<style scoped>
.max-h {
  max-height: 25vh;
  transition: max-height 300ms;
  &:hover {
    max-height: 100vh;
  }
}
</style>
