import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuario: {
            nombre: "Luis Alejandro",
            email: "admin@prueba.com",
        }
    },
    mutations: {
        setData(firebaseConfig, data) {

            firebaseConfig.user = data.user,
                firebaseConfig.usuario = data.Usuario
            console.log(data)



        }
    },
    actions: {
        setData(context, data) {
            context.commit('setData', data)
        }
    },
    modules: {}
})