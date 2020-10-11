import { Component } from 'vue-property-decorator';
import { Plugin } from '@nuxt/types';

Component.registerHooks([
  'asyncData',
  'fetch',
]);
