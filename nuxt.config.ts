import { IContentDocument } from '@nuxt/content/types/content';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'the-tutorial-place',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Mali&display=swap' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/index.css',
  ],
  env: {
    homepage: process.env.npm_package_homepage,
    contributeHomepage: 'https://github.com/Kapcash/the-tutorial-place-content',
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/base',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxt/typescript-build',
    'nuxt-typed-vuex',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    exposeConfig: true,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/dayjs',
  ],
  dayjs: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    plugins: ['relativeTime'],
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    fullTextSearchFields: ['title', 'slug', 'topics'],
  },
  hooks: {
    'content:file:beforeInsert': (document: any) => {
      document.topics = (document.tags as string[] | undefined)?.join(', ');
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config: any, ctx: any) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },
  },
};
