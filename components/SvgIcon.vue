<template>
  <div v-html="svg" class="inline-flex"/>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IContentDocument } from '@nuxt/content/types/content';
import { Context } from '@nuxt/types';

@Component
export default class TagsList extends Vue {
  @Prop({ type: String, required: true, default: 'pencil' })
  icon!: string;

  @Prop({ type: Number, default: 32 })
  height!: number;

  growByHeight = true;
  svg = undefined;

  created() {
    this.svg = require('~/assets/svg/share.svg?raw');
  }

  mounted() {
    const svgElement = this.$el.firstElementChild;
    if (svgElement && svgElement?.nodeName === 'svg') {
      // use `viewBox` attribute to get the svg's inherent width and height
      const viewBox = (svgElement.getAttribute('viewBox') || '').split(' ').map(n => Number(n));
      const widthToHeight = (viewBox[2] / viewBox[3]).toFixed(2);
      // set width and height relative to font size
      // if growByHeight is true, height set to 1em
      // else width set to 1em and remaining is calculated based on widthToHeight ratio
      if (this.growByHeight) {
        svgElement.setAttribute('height', '1em');
        svgElement.setAttribute('width', `${widthToHeight}em`);
      }
      svgElement.classList.add('svg-class');
    }
  }
}
</script>
