// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image', "@nuxtjs/cloudinary", 'nuxt-swiper', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-server-utils', '@unlok-co/nuxt-stripe'
  ],
  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_APP_URL
    },
    stripeKey: process.env.STRIPE_SECRET_KEY,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  nuxtServerUtils: {
    enabled: true, // default
    enableDevTools: true, // default
    mongodbUri: process.env.MONGODB_URI,
  },
  stripe: {
    server: {
      key: process.env.STRIPE_SECRET_KEY,
      options: {
        apiVersion: '2022-11-15',
      }
    }
  }
})