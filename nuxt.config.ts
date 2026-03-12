import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  routeRules: {
    '/': {
      appLayout: '01-leadercall-default',
    },
    '/01_informationform': {
      appLayout: '01-leadercall-default',
    },
     '/01_informationform/*': {
      appLayout: '01-leadercall-default',
    },
     '/02_actionform': {
      appLayout: '01-leadercall-default',
    },    
     '/02_actionform/*': {
      appLayout: '01-leadercall-default',
    },
  }
})