import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-fundamentals',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style'
  ],

  generates: {
    async routes () {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // return response.data.map(post => `posts/${post.id}`)
      return response.data.map(post => ({
        route: `post/${post.id}`,
        payload: post
      }))
      // return axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then((response) => {
      //     return response.data.map(post => `post/${post.id}`)
      //   })
    }
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
