// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxt/image', '@nuxtjs/strapi', 'nuxt-swiper', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@unlok-co/nuxt-stripe'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
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
  stripe: {
    // Server
    server: {
      key: process.env.STRIPE_PUBLISHABLE_KEY,
      options: {
        // your api options override for stripe server side
        apiVersion: '2022-11-15', // optional, default is '2022-11-15'
      }
      // CLIENT
    },
    client: {
      key: process.env.STRIPE_PUBLISHABLE_KEY,
      // your api options override for stripe client side
      options: {

      }
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },

})