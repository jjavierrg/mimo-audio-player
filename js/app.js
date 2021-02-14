import StorageService from '../src/services/storage.service.js'

import App from '../src/components/app.component.js'
import Album from '../src/components/album.component.js'
import Artist from '../src/components/artist.component.js'
import Dashboard from '../src/components/dashboard.component.js'

import es from '../src/locales/es.js'
import en from '../src/locales/en.js'

const router = new VueRouter({
  routes: [
    { path: '/album/:album_id', component: Album, name: 'albums' },
    { path: '/artist/:artist_id', component: Artist, name: 'artists' },

    { path: '', component: Dashboard, name: 'dashboard' },
    { path: '*', component: Dashboard, name: 'fallback' },
  ],
})

const storageService = new StorageService()
const userConf = storageService.getUserConf() || { locale: 'es' }
const messages = { es, en }
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
})

var app = new Vue({
  router,
  i18n,
  components: {
    'mimo-app': App,
  },
  template: '<mimo-app></mimo-app>',
})

app.$mount('#app')
