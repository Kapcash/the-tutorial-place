<template>
  <div @mouseleave="showShareIcons = false">
    <button @click="share">
      <svg style="fill: #324575;" version="1.1" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512.001 512.001" xml:space="preserve">
        <path d="M404.99,344.077c-26.743,0-50.588,12.583-65.974,32.124l-154.093-88.964c3.888-9.662,6.049-20.198,6.049-31.236
          c0-11.037-2.162-21.573-6.049-31.236l154.093-88.964c15.387,19.54,39.231,32.124,65.974,32.124
          c46.297,0,83.962-37.666,83.962-83.962C488.952,37.666,451.288,0,404.99,0s-83.962,37.665-83.962,83.961
          c0,11.038,2.163,21.576,6.052,31.24l-154.091,88.964c-15.387-19.542-39.233-32.127-65.978-32.127
          c-46.297,0-83.962,37.666-83.962,83.962c0,46.296,37.665,83.962,83.962,83.962c26.745,0,50.591-12.585,65.978-32.127L327.08,396.8
          c-3.889,9.664-6.052,20.201-6.052,31.24c0,46.297,37.665,83.961,83.962,83.961s83.962-37.665,83.962-83.961
          C488.952,381.744,451.288,344.077,404.99,344.077z M404.99,23.808c33.169,0,60.155,26.985,60.155,60.153
          c0,33.169-26.985,60.155-60.155,60.155c-33.169,0-60.155-26.986-60.155-60.155C344.836,50.792,371.822,23.808,404.99,23.808z
          M107.011,316.155c-33.169,0-60.155-26.986-60.155-60.155c0-33.169,26.985-60.155,60.155-60.155
          c33.169,0,60.155,26.986,60.155,60.155C167.166,289.169,140.18,316.155,107.011,316.155z M404.99,488.192
          c-33.169,0-60.155-26.985-60.155-60.153c0-33.169,26.985-60.155,60.155-60.155c33.169,0,60.155,26.986,60.155,60.155
          C465.145,461.208,438.159,488.192,404.99,488.192z"/>
        <path d="M107.011,220.606c-19.516,0-35.394,15.877-35.394,35.394c0,6.573,5.329,11.904,11.904,11.904s11.904-5.331,11.904-11.904
          c0-6.389,5.197-11.586,11.586-11.586c6.574,0,11.904-5.331,11.904-11.904C118.915,225.936,113.585,220.606,107.011,220.606z"/>
      </svg>
    </button>
    <div v-show="showShareIcons">
      <div v-for="socialNetwork in networks" :key="socialNetwork">
        <ShareNetwork
          :network="socialNetwork"
          :url="shareUrl"
          :title="shareTitle"
          :description="shareDescription"
          :quote="shareQuote"
          :hashtags="shareHashtags">
          <img :src="require(`~/assets/svg/${socialNetwork}.svg`)">
        </ShareNetwork>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class ShareButton extends Vue {
  showShareIcons: boolean = false;

  networks: string[] = ['facebook', 'twitter', 'linkedin', 'reddit'];

  share() {
    if (navigator.share) {
      navigator.share({
        title: 'Title to be shared',
        text: 'Text to be shared',
        url: 'https://news.vuejs.org/issues/180',
      });
    } else {
      this.showShareIcons = true;
    }
  }

  get shareTitle(): string {
    return this.$accessor.currentArticle!.title!;
  }

  get shareDescription(): string {
    return '';
  }

  get shareUrl(): string {
    return `${this.$domainName}${this.$route.fullPath}`;
  }

  get shareQuote(): string {
    return '';
  }

  get shareHashtags(): string {
    return (this.$accessor.currentArticle!.tags || []).join(', ');
  }
}
</script>

<style scoped>
</style>
