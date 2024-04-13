// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image', '@nuxtjs/strapi', 'nuxt-swiper', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    }
  },
  strapi: {
    url: process.env.API_URL,
    prefix: '/api',
    admin: '/admin',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

})