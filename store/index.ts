import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex';
import { IContentDocument } from '@nuxt/content/types/content';

export const state = () => ({
  domainName: '',
  tags: [] as string[],
  searchQuery: '',
  articles: [] as IContentDocument[],
  categories: [] as IContentDocument[],
  selectedTag: null as string | null,
  currentArticle: null as IContentDocument | null,
});

export const getters = getterTree(state, {
  displayedArticles: (state) => {
    if (state.selectedTag) {
      return state.articles.filter(article => article.tags?.includes(state.selectedTag!));
    } else {
      return state.articles;
    }
  },
});

export const mutations = mutationTree(state, {
  setDomain(state, domain: string) {
    state.domainName = domain;
  },
  setSearchQuery(state, query: string) {
    state.searchQuery = query;
  },
  setTags(state, tags: string[]) {
    state.tags = tags;
  },
  /** Select a tag to filter articles by */
  selectTag(state, tag: string) {
    if (state.selectedTag === tag) {
      state.selectedTag = null;
    } else {
      state.selectedTag = tag;
    }
  },
  setArticles(state, articles: IContentDocument[]) {
    state.articles = articles;
  },
  setCurrentArticle(state, article: IContentDocument) {
    state.currentArticle = article;
  },
  setCategories(state, categories: IContentDocument[]) {
    state.categories = categories;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    async nuxtServerInit({ state }, { req }): Promise<void> {
      const categories = await this.app.$content('tags').fetch();
      this.app.$accessor.setCategories(categories);
    },
    async searchFor({ state }, payload: string): Promise<void> {
      this.app.$accessor.setSearchQuery(payload);
      if (payload) {
        const articles = await this.app.$content('articles', { deep: true })
          .sortBy('createdAt')
          .without(['body'])
          .limit(10)
          .search('topics', this.app.$accessor.searchQuery)
          .fetch();
        this.app.$accessor.setArticles(articles);
      } else {
        return this.app.$accessor.getLightArticles();
      }
    },
    async getLightArticles({ state }): Promise<void> {
      const articles = await this.app.$content('articles', { deep: true })
        .sortBy('createdAt')
        .without(['body'])
        .limit(20)
        .fetch();
      this.app.$accessor.setArticles(articles);
    },
  },
);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
