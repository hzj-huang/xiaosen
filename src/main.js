import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import VCharts from 'v-charts'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(ElementUI);
Vue.use(VCharts)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')