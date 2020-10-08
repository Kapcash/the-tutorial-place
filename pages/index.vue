<template>
  <div>
    <Logo />
    <nuxt-content :document="hello" />
    <div class="flex flex-wrap md:justify-start justify-around">
      <ArticleCard v-for="article of articles" :key="article.title" :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
  hello: any;
  articles: any[] = [];

  async asyncData ({ $content }: Context) {
    const hello = await $content('hello').fetch()
    const articles = await $content('articles', { deep: true }).sortBy('createdAt').without(['body']).limit(10).fetch()

    return { hello, articles }
  }
}
</script>

<style lang="postcss" scoped>
</style>
