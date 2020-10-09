import { IContentDocument } from '@nuxt/content/types/content';

declare module '@nuxt/content/types/content' {
  interface IContentDocument {
    title?: string;
    author?: string;
    thumbnail?: string;
    tags?: string;
    // Transformed field from hook
    topics?: string[];
  }
}
