import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import SocialContainer from "@/components/Social_Container.vue";

library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('SocialContainer', SocialContainer)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')