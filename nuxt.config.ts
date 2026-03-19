import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },  

  css: ['@/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      allowedHosts: true
    }
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
    '/03_confirmform': {
      appLayout: '01-leadercall-default',
    },
    '/03_confirmform/*': {
      appLayout: '01-leadercall-default',
    },
  },
  ssr: true,
  app: {
     head: {
      title: '51_amleadercall',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '51_amleadercall',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/images/Leader Call AM.svg' }],
    
    }

  },
})