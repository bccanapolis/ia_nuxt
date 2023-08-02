export default {
  ssr: true,
  srcDir: 'src/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Inteligência Artificial no Instituto Federal de Goiás',
    htmlAttrs: {
      lang: 'pt'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Este portal visa apresentar pesquisas e trabalhos do IFG nas diversas áreas da Inteligência Artificial e suas aplicações'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'https://cpa.bcc.anapolis.ifg.edu.br/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i'
      },
      {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: '/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: '/css/themify-icons.css'},
      // { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      {rel: 'stylesheet', href: '/css/animate.css'},
      {rel: 'canonical', href: 'https://ia.bcc.anapolis.ifg.edu.br/'}
      // { rel: 'stylesheet', href: '/css/owl.carousel.css' },
    ],
    script: [
      // { src: '/js/jquery-3.2.1.min.js', defer: true, body: true },
      // { src: '/js/owl.carousel.min.js', defer: true, body: true },
      // { src: '/js/jquery.countdown.js', defer: true, body: true },
      // { src: '/js/masonry.pkgd.min.js', defer: true, body: true },
      // { src: '/js/magnific-popup.min.js', defer: true, body: true },
      {src: '/js/bootstrap.js', defer: true, body: true},
      {src: 'https://www.googletagmanager.com/gtag/js?id=G-GR1F9PKS1D', async: true},
      {src: '/js/main.js', defer: true, body: true}
    ]
  },

  router: {
    linkActiveClass: 'active'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{src: '~/plugins/owl.js', mode: 'client'}, {src: '~/plugins/google-analytics.js', mode: 'client'}],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  publicRuntimeConfig: {
    apiEndpoint: process.env.PUBLIC_API_ENDPOINT || 'https://api.ia.bcc.ifg.edu.br'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.PUBLIC_API_ENDPOINT || 'https://api.ia.bcc.ifg.edu.br'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
