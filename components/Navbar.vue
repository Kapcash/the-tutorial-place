<template>
  <nav class="w-full fixed top-0 bg-gray-100 z-40">
    <div class="container navbar-grid px-4 lg:px-8 mx-auto justify-items-center items-center">
      <img class="h-12" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAACkCAMAAAApKatmAAAAMFBMVEX////BwcG/v7/f39/v7+/7+/vPz8/z8/Pn5+fLy8vHx8fX19fj4+P39/fr6+vT09OFCFGdAAAC+UlEQVR4nO2a63KDIBCFVUDxEvP+b9u4BAXRpOksK+mc709lRw+cLPdpVQEAAAAAAAAAAAAAAAAAAIDvpH7BlZVnloe3TJVnloe3TJWzyXMI8QFvkkJ8wJukEB/wJinEB7xJCvEBb5JCfMCbpBAf8CYpxAe8SQrxAW+SQnzAm6QQHwU2CQAAAAAAALCiJ6Wm7jisk3BnlVLaSDTs9+jmgdpHjaobYlCH4VpFNuzgws14y93eTzj01j0tLPRbc7shCG8pNe0Wrmehdv+GI2+htUdzzeuw6cNwU5C5A2+GPAyT1q4Lts+wy9qorBqCcNW6Tqr1ROG6nG554O1OFujR5cTSsyLH1BXNuIUt9VCXRArfxdr+jtSbDpPSkaHlibJZ+1HWryaGMFeUuXRyvYjU2xiNmrsvTdGL81JaHuyW5KR0Nak3ys9aWltLw2qb+VtlaZUj7+t6Z9Y0l0DirQu7ZFXdaDg9HvzfHbVPoIPGZymzSeLN7gKNa3x3Mk3sLMdpvJjEm9oFetcXj/cv8cTjv57yNfcj3nprXSaC95RHn3hLf4Jr+IM3vwNZiv/Am/nIW7F9cn4xl7RbxL/1VXPJbg0w4RrgVi694D/brQFt0WvAbu2mNC5rd7xyGf/ZLlFN9PHFvNtzraV4z7Wugt+159LhENr2yrRB8Yc2d96hz+ogn6b0vbIbM+7Hd8dRd5ihDLrDjLmvc4mbGZ/hfjdrXoxuIpaGdf5sOo9N0NgbhevRWn9r4n4SMrScTV24tLNp7M2NmpXeb/6jcDt4b/FVQzELQHXsrbLhXdB2rrFhdFq7cnhFVBcz2KoTb9VtfJYHG77c+RstZZZVwA/Ts6u9UjH6sRm2SRZu8yM8pw5OrmQBAAAAAAAA0hT4j8/4P3NJIT7gTVKID3iTFOID3iSF+IA3SSE+4E1SiA94kxTiA94khfiAN0khPuBNUogPeJMU4oPX2wkc+n+tPLM8vGWqPLM8vGWqPHvdAAAAAAAAAAAAAAAAAAD4An4A5QcTnXnPO7wAAAAASUVORK5CYII=">
      <SearchBar placeholder="Search by tags..."/>
      <a :href="$nuxt.context.env.homepage" target="_blank" class="justify-self-end">
        <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>

<style scoped>
.navbar-grid {
  @apply grid gap-4;
  grid-template-columns: 1fr 2fr 1fr;
}
</style>
