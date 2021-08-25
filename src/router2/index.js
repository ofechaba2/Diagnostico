import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
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
    {
        path: '/Categorias',
        name: 'Categorias',
        component: Categorias
    }


    //     path: '/',
    //     name: 'home',
    //     component: Home,
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/area',
    //     name: 'area',
    //     component: () =>
    //         import ('../components/area'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/proyecto',
    //     name: 'proyecto',
    //     component: () =>
    //         import ('../components/proyecto'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/proyectoRpt1',
    //     name: 'proyectoRpt1',
    //     component: () =>
    //         import ('../components/proyectosRpt1'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/proyectoRpt2',
    //     name: 'proyectoRpt2',
    //     component: () =>
    //         import ('../components/proyectosRpt2'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/usuario',
    //     name: 'usuario',
    //     component: () =>
    //         import ('../components/usuario'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () =>
    //         import ('../components/login'),
    //     meta: {
    //         libre: true
    //     }
    // },
    // {
    //     path: '/proyectoGraf',
    //     name: 'proyectoGraf',
    //     component: () =>
    //         import ('../components/proyectosGraf'),
    //     meta: {
    //         libre: true
    //     }
    // },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// router.beforeEach((to, from, next) => {
//     if (store.state.usuario && to.path != '/login') {
//         next({ name: 'login' })
//     } else {
//         next();
//     }
// })

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.libre)) next();
//     else if (store.state.usuario && store.state.usuario.rol == 'ADMIN_ROL') {
//         if (to.matched.some(record => record.meta.administrador)) next();
//     } else if (store.state.usuario && store.state.usuario.rol == 'VENDEDOR_ROL') {
//         if (to.matched.some(record => record.meta.vendedor)) next();
//     } else if (store.state.usuario && store.state.usuario.rol == 'ALMACENISTA_ROL') {
//         if (to.matched.some(record => record.meta.almacenista)) next();
//     } else next({ name: 'login' });
// })

export default router