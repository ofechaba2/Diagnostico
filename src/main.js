import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false;

// Chart.defaults.interaction.mode = 'nearest';

global.GsectorEconomia = "";

global.Grazonsocial = "";
global.Gnit = "";
global.Gformajuridica = "";
global.Gdepartamento = "";


// global.banderaDocumento = 0;
global.estado = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')