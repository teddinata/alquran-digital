export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  server: {
    port: 4000, // Port yang ingin Anda gunakan
    host: 'localhost', // Tetapkan host ke 'localhost'
  },
  generate: {
    routes: function () {
      const dynamicRoutes = []
      // Generate dynamic routes here
      // Misalnya, Anda memiliki 5 surat, dan Anda ingin membuat rute dinamis untuk setiap surat
      for (let i = 1; i <= 114; i++) {
        dynamicRoutes.push('/surat/' + i)
      }
      return dynamicRoutes
    }
  },
  ssr: false,
  target: 'static',
  googleAnalytics: {
    // Options
    id: 'G-14942YB253',
    autoTracking: {
      screenview: true
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Al-Quran Digital Bahasa Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // googleAnalytics
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-14942YB253',
        async: true,
      },
      {
        hid: "gtag-script",
        innerHTML: `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-14942YB253');`,

      },
      {
        hid: "gtm-script",
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','G-14942YB253');`,
      }
    ],
    noscript: [
      {
        hid: "gtm-noscript",
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-14942YB253" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        prepend: true,
        pbody: true,
      }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-script': ['innerHTML'],
      'gtm-script': ['innerHTML'],
      'gtm-noscript': ['innerHTML'],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // g.tag manager
    // '@/plugins/gtag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    ['@nuxtjs/pwa', {icon: false}]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
