import App from '../src/components/app.component.js'
import Album from '../src/components/album.component.js'
import Artist from '../src/components/artist.component.js'
import Dashboard from '../src/components/dashboard.component.js'

const router = new VueRouter({
    routes: [
        { path: '/album/:album_id', component: Album, name: 'albums' },
        { path: '/artist/:artist_id', component: Artist, name: 'artists' },

        { path: '', component: Dashboard, name: 'dashboard' },
        { path: '*', component: Dashboard, name: 'dashboard' }
    ]
})


var app = new Vue({
    router,
    components: {
        'mimo-app': App
    },
    template: '<mimo-app></mimo-app>'
});

app.$mount('#app');