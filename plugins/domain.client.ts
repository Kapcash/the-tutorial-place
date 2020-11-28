import { Plugin } from '@nuxt/types';

const domainPlugin: Plugin = function(context, inject) {
  // in srr context: inject('domainName', (context as any).ssrContext.req.headers.host);
  inject('domainName', `${window.location.protocol}//${window.location.host}`);
};

export default domainPlugin;

declare module '@nuxt/types' {
  export interface Context {
    $domainName?: string;
  }
  interface NuxtAppOptions {
    $domainName?: string;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $domainName?: string;
  }
}
