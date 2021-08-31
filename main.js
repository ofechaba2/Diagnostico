import Vue from 'vue'
import App from './App.vue'
import router from './src/router'
import store from './src/store'
import vuetify from './src/plugins/vuetify'

Vue.config.productionTip = false;

global.Grazonsocial = "";
global.Gnit = "";
global.estado = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')