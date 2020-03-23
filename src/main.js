import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import home from '@/components/home.vue'
import services from '@/components/services.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({mode: 'history',base: '/demo',routes});
//const router = new Router({mode: 'history',routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

/*export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'home',
      component: home
    },
    {
      path: '/demo/services',
      name: 'services',
      component: services
    }
  ]
})*/


