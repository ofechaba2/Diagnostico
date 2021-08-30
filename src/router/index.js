import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import diagnostico from '../views/Diagnostico.vue'
import Caracterizacion from '../views/Caracterizacion.vue'
import grafico from '../views/Grafico.vue'
import login from '../views/login.vue'
import store from '../store/index'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/caracterizacion',
        name: 'Caracterizacion',
        component: Caracterizacion
    },
    {
        path: '/diagnostico',
        name: 'diagnostico',
        component: diagnostico
    },
    {
        path: '/grafico',
        name: 'grafico',
        component: grafico
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (store.state.usuario && to.path != '/login') {
        next()
    } else {
        next();
    }
})

// import firebase from 'firebase/app'
// router.beforeEach((to, from, next) => {
//     if (firebase.apps.length && to.path != '/login') {
//         next()
//     } else {
//         next();
//     }
// })

export default router