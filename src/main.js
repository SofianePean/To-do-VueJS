import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false
library.add(faSpinner, faTrashAlt, faEdit)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
