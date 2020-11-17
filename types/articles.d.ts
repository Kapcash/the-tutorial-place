import { IContentDocument } from '@nuxt/content/types/content';
import { KnownKeys } from './base';

type KeyOfDocument = KnownKeys<IContentDocument>;

declare module '@nuxt/content/types/content' {
  interface IContentDocument {
    title?: string;
    author?: string;
    thumbnail?: string;
    tags?: string[];
    stackoverflow: string[];
  }
}

declare module '@nuxt/content/types/query-builder' {
  interface QueryBuilder {
    sortBy(field: KeyOfDocument, direction?: 'asc' | 'desc'): QueryBuilder;
    only(keys: KeyOfDocument[] | KeyOfDocument): QueryBuilder;
    without(keys: KeyOfDocument[] | KeyOfDocument): QueryBuilder;
  }
}
