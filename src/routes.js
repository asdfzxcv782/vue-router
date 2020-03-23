import home from './components/home.vue';
import services from './components/services.vue';
import error from './components/error.vue';

const routes = [
    { path: './', name: 'login', component: services},
    //{ path: '/', component: services },
    { path: '/main',name: 'main', component: home,
        children:[
            {
                path:'test',
                component: services
            }
        ]
    },
    { path: '*', name: 'error', component:error}
    /*{ path: '/login', component: services,
        children:[
            {
                path:'test',
                component: home
            }
        ]
    }*/
]

export default routes;