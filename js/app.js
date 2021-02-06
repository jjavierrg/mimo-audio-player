import App from '../src/components/app.component.js'

// const router = new VueRouter({
//     routes: [
//         { path: '/granty', component: GrantsCallList, name: 'grants' },
//         { path: '/granty/vyzva/:call_id', component: GrantCallProjects, name: 'grantprojects' },
//         { path: '/granty/vyzva/:call_id/zadost', component: GrantApply, name: 'grantapply' },
//         { path: '/granty/subjekt', component: GrantSubjectEdit, name: 'grantsubj' },

//         { path: '/form', component: FormList, name: 'formlist' },
//         { path: '/form/:form_id', component: Form, name: 'form' },
//         { path: '', component: Dashboard, name: 'home' }
//     ]
// })


var app = new Vue({
    components: {
        'mimo-app': App
    },
    template: '<mimo-app></mimo-app>'
});

app.$mount('#app');