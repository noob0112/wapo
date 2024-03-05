// https://nuxt.com/docs/api/configuration/nuxt-config
const isDevelopment = process.env.NODE_ENV === 'development'
const devModules = ['@nuxtjs/eslint-module']
const buildModules = ['@element-plus/nuxt', '@nuxtjs/tailwindcss']
let modules = [...buildModules]
if (isDevelopment) {
  modules = [...modules, ...devModules]
}

export default defineNuxtConfig({
  // ssr: false,
  devtools: { enabled: true },
  modules,
  elementPlus: {
    /** Options */
  },
  experimental: {
    //   payloadExtraction: false,
    // inlineSSRStyles: false // or a function to determine inlining
  },
})
