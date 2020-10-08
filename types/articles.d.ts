import { IContentDocument } from '@nuxt/content/types/content'

declare module '@nuxt/content/types/content' {
  interface IContentDocument extends Record<string, any> {
    title?: string;
    author?: string;
    thumbnail?: string;
    tags?: string[];
  }
}
