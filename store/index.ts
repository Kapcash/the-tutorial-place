import { getAccessorType, getterTree, mutationTree, actionTree } from 'typed-vuex';
import { IContentDocument } from '@nuxt/content/types/content';

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

export const state = () => ({
  tags: [] as string[],
  searchQuery: '',
  articles: [] as IContentDocument[],
  categories: [] as IContentDocument[],
});

export const getters = getterTree(state, {
  nbOfTags: state => state.tags.length,
});

export const mutations = mutationTree(state, {
  setSearchQuery(state, query: string) {
    state.searchQuery = query;
  },
  setTags(state, tags: string[]) {
    state.tags = tags;
  },
  setArticles(state, articles: IContentDocument[]) {
    state.articles = articles;
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

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
